import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomColor() {
  return  Math.floor(Math.random() * 16777215).toString(16)
}

const DynamicPostTitle = (p) => {
  const [color, setColor] = useState(getRandomColor())
  return (
    <div
      onClick={() => setColor(getRandomColor())}
      style={{ color }}
    >
      {p.children}
    </div>
  )
)

const component = document.querySelector('.entry-content h2')
if(component !== null) {
  const title = component.innerHTML
  ReactDOM.render(
    <DynamicPostTitle>
      {title}
    </DynamicPostTitle>,
    component
  )
}
