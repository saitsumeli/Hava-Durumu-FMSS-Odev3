import React from 'react'
import Form from './Form'
import Info from './Info'
import Header from './Header'
import { WeatherProvider } from '../context/WeatherContext'

function Container() {
  return (
        <WeatherProvider>
            <Header/>
            <Form/>
            <Info/>
        </WeatherProvider>
  )
}

export default Container