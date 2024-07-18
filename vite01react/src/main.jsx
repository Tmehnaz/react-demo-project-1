import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  {href: 'https://www.pinterest.com/pin/26388347811151267/', target:'_blank' },
  'click me to visit pinterest'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    
    reactElement
 
)
