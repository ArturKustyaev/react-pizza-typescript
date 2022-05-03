import { render, screen } from '@testing-library/react';
import { Select } from './Select';


describe('Test UI select', () => {
	const onSelectItem = jest.fn()

 	test('render select', () => {
		render(<Select onSelectItem={onSelectItem} />)
		expect(screen.getByRole('combobox')).toBeInTheDocument()
	})
})
