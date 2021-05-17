/** 微前端模式 */
import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from 'index'
import { MICRO_APP_NAME } from 'config'

const id = `app-${MICRO_APP_NAME}`
function domElementGetter() {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('div')
    el.id = id
    document.getElementById('app-base')?.appendChild(el)
  }
  return el
}

export async function bootstrap() {}

export async function mount() {
  ReactDOM.render(<Wrapper />, domElementGetter())
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(domElementGetter())
}
