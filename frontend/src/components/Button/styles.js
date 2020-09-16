import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => `${props.widht}px`};
  height: ${props => `${props.height}px`} ;
  background: ${props => `${props.background}`};
  color: ${props => `${props.color}`};
  font-weight:  ${props => `${props.weight}`};
  border-color: ${props => `${props.bcolor}`};
  border-radius: 4px;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
