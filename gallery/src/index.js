import Vue from 'vue'
import App from './comps/App.vue'

const initAppElement = (id = '#app') => {
  if (document.querySelector(id)) {
    return id
  }
  const main = document.createElement('div')
  main.id = id.slice(1)
  document.body.appendChild(main)
  return id
}

new Vue({
  el: initAppElement(),
  render: h => h(App, { props: { path: PUBLIC_PATH } }),
})
