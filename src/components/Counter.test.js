
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Counter from './Counter'

// Unmount everything from the dom after each test
afterEach(cleanup)

test('<Counter />', () => {
  // Renders component
  const { getByTestId } = render(<Counter />)

  // Outputs dom as string
  // debug()

  const counterButton = getByTestId('counter-button')

  // Asserts counter-button is a button
  expect(counterButton.tagName).toBe('BUTTON')
  // Asserts counter-button starts at 0
  expect(counterButton.textContent).toBe('0')

  fireEvent.click(counterButton)
  expect(counterButton.textContent).toBe('1')

  fireEvent.click(counterButton)
  expect(counterButton.textContent).toBe('2')
})
