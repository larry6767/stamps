import React from 'react'
import {Provider} from 'react-redux'
import App from './App'

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root
