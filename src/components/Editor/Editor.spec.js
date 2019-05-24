import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Editor from "./Editor"

afterEach(cleanup);

describe("<Editor />", () => {
  beforeAll(() => {
    // Necessary to test codemirror with jsdom
    global.document.body.createTextRange = function () {
      return {
        getBoundingClientRect: () => {
          return { right: 0 };
        },
        getClientRects: () => {
          return {
            length: 0,
            left: 0,
            right: 0
          }
        }
      }
    }
  })

  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<Editor />);
      expect(container).toMatchSnapshot();
    });
  })
})
