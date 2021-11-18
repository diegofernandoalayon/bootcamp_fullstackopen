import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import { render, prettyDOM } from '@testing-library/react'

import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'This is a test',
    important: true
  }
  const component = render(<Note content={note.content} important={note.important} />)
  // component.getByText('This is a test')
  expect(component.container).toHaveTextContent(note.content)
  // component.debug()
  // const li = component.container.querySelector('li')
  // console.log(prettyDOM(li)) // para ver mejor el arbol de elementos
})

test('clicking the button call event handler once', () => {
  const note = {
    content: 'This is a test',
    important: true
  }
  const component = render(<Note content={note.content} important={note.important} />)
  console.log(component)
})
