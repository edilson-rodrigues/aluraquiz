import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/Button'
import { ThemeProvider } from 'styled-components'
import db from '../../db.json'

describe('Button component', () => {
  test('renders children and responds to click', () => {
    const handleClick = jest.fn()
    render(
      <ThemeProvider theme={(db as any).theme}>
        <Button onClick={handleClick}>Click me</Button>
      </ThemeProvider>,
    )

    const btn = screen.getByRole('button', { name: /click me/i })
    expect(btn).toBeInTheDocument()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('disabled prop prevents clicks', () => {
    const handleClick = jest.fn()
    render(
      <ThemeProvider theme={(db as any).theme}>
        <Button onClick={handleClick} disabled>Disabled</Button>
      </ThemeProvider>,
    )

    const btn = screen.getByRole('button', { name: /disabled/i })
    expect(btn).toBeDisabled()
    fireEvent.click(btn)
    expect(handleClick).not.toHaveBeenCalled()
  })
})
