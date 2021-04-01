import React from 'react';
import { waitFor } from '@testing-library/react';
import paths from 'constants/paths';
import { TestUtil } from 'utils';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  let util: TestUtil;
  let fail;

  const mockedFetch = (input, init) => {
    if (fail) {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ message: 'Something went wrong.' }),
      });
    }
    switch (init.method) {
      case 'POST':
        return Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve({ token: 'cos' }),
        });

      default:
        return null;
    }
  };

  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });
  beforeEach(() => {
    jest.clearAllMocks();
    window.fetch.mockImplementation(mockedFetch);
    util = new TestUtil(<LoginPage />);
    fail = false;
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should send login data', async () => {
    util.setValue('login', 'login1234');
    util.setValue('password', 'password123');
    util.click('submit');
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    await waitFor(() => expect(util.render.history.location.pathname).toEqual(paths.CALENDAR));
  });

  it('should log alert on error', async () => {
    fail = true;
    util.setValue('login', 'login1234');
    util.setValue('password', 'password123');
    util.click('submit');
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(util.get('alert').textContent).toBe('Something went wrong.');
  });
});
