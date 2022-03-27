import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'
import 'antd/dist/antd.css'

import App from './App'
import Pages from 'pages'
import Home from 'pages/home'
import Components, { TextField, Dialog, Modal } from 'pages/components'

import Forms from 'pages/forms'
import Utils from 'pages/utils'
import Styles from 'pages/styles'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={ <App /> }>
        <Route index element={ <Pages /> }></Route>
        
        <Route path='pages' element={ <Pages /> }>
          <Route index element={ <Home /> }></Route>
          <Route path='components' element={ <Components /> }>
            <Route index element={ <TextField /> }></Route>
            <Route path='text-field' element={ <TextField /> }></Route>
            <Route path='dialog' element={ <Dialog /> }></Route>
            <Route path='modal' element={ <Modal /> }></Route>
          </Route>
          <Route path='forms' element={ <Forms /> }></Route>
          <Route path='utils' element={ <Utils /> }></Route>
          <Route path='styles' element={ <Styles /> }></Route>
        </Route>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
)