import React from 'react'
import ReactDom from 'react-dom'

import './style.less'

import App from './app'
import routerConf from './routerConf'

window.React = React
window.ReactDom = ReactDom

const root = document.body.querySelector('#main')
ReactDom.render(<App routerConf={routerConf}/>, root)

