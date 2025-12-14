import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Input from '../components/Input'
import { ThemeProvider } from 'styled-components'
import db from '../../db.json'

describe('Input component', () => {
  test('calls onChange when typing', () => {
    const handleChange = jest.fn()
    render(
      <ThemeProvider theme={(db as any).theme}>
        <Input name="test" placeholder="Type" onChange={handleChange} value="" />
      </ThemeProvider>,
    )

    const input = screen.getByPlaceholderText('Type') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'a' } })
    expect(handleChange).toHaveBeenCalled()
  })
})
