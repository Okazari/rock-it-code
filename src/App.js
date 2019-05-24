import React from 'react';
import styled from 'styled-components'

import { PresentationText } from "./components/PresentationText"
import { Editor } from "./components/Editor"
import { Button } from "./components/Button"

const Wrapper = styled.div`
  background-color: #424651;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  padding: 0 15rem 0 15rem;
`

const ActionWrapper = styled.div`
  text-align: center;
`

const App = () => {
  return (
    <Wrapper>
      <PresentationText />
      <Editor />

      <ActionWrapper>
        <Button>
          Let's rock <span role="img" aria-label="">🎸</span>
        </Button>
      </ActionWrapper>
    </Wrapper>
  );
}

export default App;
