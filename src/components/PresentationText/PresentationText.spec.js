import React from 'react'
import { render, cleanup } from 'react-testing-library'

import PresentationText from "./PresentationText"

afterEach(cleanup);

describe("<PresentationText />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<PresentationText />);
      expect(container).toMatchSnapshot();
    });
  })
})
