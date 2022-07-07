import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App'
import Pages from 'pages'
import Home from 'pages/home'
import Components, { Upload, Dialog, Modal, TextField } from 'pages/components'

import Forms from 'pages/forms'
import Utils from 'pages/utils'
import Styles from 'pages/styles'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Router>
    <Routes>
      <Route path='/' element={ <App /> }>
        <Route index element={ <Pages /> }></Route>
        
        <Route path='pages' element={ <Pages /> }>
          <Route index element={ <Home /> }></Route>
          <Route path='components' element={ <Components /> }>
            <Route path='upload' element={ <Upload /> }></Route>
            <Route path='dialog' element={ <Dialog /> }></Route>
            <Route path='modal' element={ <Modal /> }></Route>
            <Route path='text-field' element={ <TextField /> }></Route>
          </Route>
          <Route path='forms' element={ <Forms /> }></Route>
          <Route path='utils' element={ <Utils /> }></Route>
          <Route path='styles' element={ <Styles /> }></Route>
        </Route>
      </Route>
    </Routes>
  </Router>
)