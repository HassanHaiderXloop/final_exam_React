import { render, waitFor } from '@testing-library/react';
import GetingData from './GetingData';

describe('GetingData component', () => {
  it('renders product list after API call', async () => {
    const mockData = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const { getByTestId } = render(<GetingData />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    const productList = getByTestId('product-list');
    expect(productList.children.length).toBe(mockData.length);
  });
});
