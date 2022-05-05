import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
	test('Navbar basic render', () => {
		render(<Navbar />)
		screen.debug()
	})
})
