import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PostsPage, { type post } from './Components/Posts/Posts/PostsPage';


global.fetch = jest.fn();



describe('PostsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays user name after fetching data', async () => {
    const mockUserData: post = { id: 1, message: 'John Doe', postedBy: {name: 'jon'},
    imageUrl: 'www.hdhshd.com'};
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockUserData,
    });

  const { getByText } = render(<PostsPage />);
  const textElement = getByText(/Posts/i);
  expect(textElement).toContain(mockUserData.id);
})
   

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/posts');
  });

