import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import InputBox from './InputBox';
import { updateRestaurantField } from '../redux/actions';

jest.mock('react-redux');

describe('InputBox', () => {
  it('renders input control with given name', () => {
    const { getByRole } = render(<InputBox name="이름" />);

    expect(getByRole('textbox', { lable: '이름' })).toBeInTheDocument();
  });

  it('updates field onblur', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const [field, value] = ['name', '마녀주방'];

    const { getByRole } = render(<InputBox name={field} />);
    const inputControl = getByRole('textbox', { label: field });

    inputControl.focus();
    fireEvent.change(inputControl, { target: { value } });
    inputControl.blur();

    expect(dispatch).toBeCalledWith(updateRestaurantField({ field, value }));
  });
});
