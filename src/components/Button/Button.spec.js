import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import Button from "./Button"

afterEach(cleanup);

describe("<Button />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<Button />);
      expect(container).toMatchSnapshot();
    });
  })

  describe('onClick prop', () => {
    it('should call onClick function when Button is clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(<Button onClick={onClickMock}>Click me!</Button>);
      fireEvent.click(getByText('Click me!'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
})
