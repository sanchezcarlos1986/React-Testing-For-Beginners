import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import MovieForm from './MovieForm'

// Unmount everything from the dom after each test
afterEach(cleanup)

const onSubmit = jest.fn()

test('<MovieForm />', () => {
  // Renders component
  const {
    queryByTestId,
    getByText,
    getByLabelText,
  } = render(<MovieForm submitForm={onSubmit} />)

  // Outputs dom as string
  // debug()

  const movieForm = queryByTestId('movie-form')
  const inputText = getByLabelText('Text')
  // const submitButton = getByText('Submit')

  // Asserts MovieForm exists
  expect(movieForm).toBeTruthy()

  // Simulate click event on submit button
  fireEvent.submit(movieForm)

  /**
   * Because onSubmit is a mock function, we can use next methods
   * to check if that function was called
   */
  expect(onSubmit).toHaveBeenCalled()
  expect(onSubmit).toHaveBeenCalledWith({
    text: '',
  })

  const expectedValue = 'Carlos Sánchez'

  // Changing input value
  // inputText.value = expectedValue
  fireEvent.change(inputText, {
    target: { value: expectedValue },
  })

  fireEvent.submit(movieForm)
  expect(onSubmit).toHaveBeenCalledWith({
    text: expectedValue,
  })
})
