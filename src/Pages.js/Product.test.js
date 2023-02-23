import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Product from './Product';

const mockProduct = {
  id: 1,
  name: 'Product 5',
  image: 'https://example.com/product1.jpg',
  shortDescription: 'Short description of product 1',
  price: 10,
};

describe('Product component', () => {
//   it('renders product information', () => {

  it('updates the quantity when the InputNumber is changed', () => {
    render(<>
      <BrowserRouter>
        <Product prod={mockProduct} />
      </BrowserRouter>
      </>
    );

    const inputNumber = screen.getByRole('spinbutton');
    fireEvent.change(inputNumber, { target: { value: '5' } });

    expect(inputNumber.value).toBe('5');
  });


  
});

