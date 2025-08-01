import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

createRoot(document.getElementById('root')).render(
  React.createElement('div', {
    id: 'id1',
    children:
      React.createElement('div', {
        id: 'id2',
        children: [
          'Привет, это текст',
          React.createElement('button', {
            children: 'Текст кнопки',
            onClick: () => alert('Хэээй')
          })
        ]
      })
  })
)
