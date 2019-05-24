import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 1rem;
  background-color: transparent;
  color: white;
  font-size: 2rem;
  border-radius: 0.25rem;
`

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
