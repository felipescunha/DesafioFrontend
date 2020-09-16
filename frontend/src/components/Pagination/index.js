import React from 'react';

import { 
  Container,
  ContentPagination,
  PageButton,
  PageViewNumber,
 } from './styles';

function Pagination() {
  return (
    <Container>
      <ContentPagination>
        <PageButton onClick={() => {}}>Primeiro</PageButton>
        <PageButton onClick={() => {}}>Anterior</PageButton>
        <PageViewNumber>1</PageViewNumber>
        <PageButton  onClick={() => {}} disabled={true}>Próximo</PageButton>
        <PageButton  onClick={() => {}} style={{ border:'1 solid #fff' }}  disabled={true}>Último</PageButton>
      </ContentPagination>
    </Container>
  );
}

export default Pagination;
