/** 本地开发 */
import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from 'index'

const id = 'demo'
function domElementGetter() {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('div')
    el.id = id
    document.body.appendChild(el)
  }
  return el
}

const render = () => {
  return ReactDOM.render(<Wrapper />, domElementGetter())
}

render()

if (module.hot) {
  module.hot.accept('index', () => {
    render()
  })
}
