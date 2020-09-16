import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContentPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const PageButton = styled.button`
  color: #666;
  background: #fff;
  font-family: 'Roboto', sans-serif;
  font-style: regular;
  font-size: 14px;
  border-radius: 4px;
  padding: 16px;
  border: 0;  
  margin-left: 8px;
  
  &:hover {
    opacity: 0.8;
    color: #D83367;
  }

  :disabled {
    opacity: 0.6;
    color: #666;
    background: #f5f5f5;
    cursor: not-allowed;
    border: 2px solid #fff
  }
`;

export const PageViewNumber = styled.div`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #D83367;
  border-radius: 4px;
  height: 48px;
  width: 48px;
`;