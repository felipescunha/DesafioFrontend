import React from 'react';

import Button from '../../components/Button';

import { 
  Container,
  Content,
  ModalContent,
  ModalHeader,
  ModalTitleHeader,
  IconClose,
  IconTune,
  FilterContent,
  ModalText,
  ButtonText,
  FilterActions,
  IconDateRange,
  IconArrowDropDown,
  FilterActionsText,
  FilterActionsGroup,
  IconHdrStrongIcon,
  ModalContentText,
  Separation,
} from './styles';

export default function modal({ children, show, hide }) {
  if (!show) return null
  return (
    <Container>
      {children}
      <Content>
        <ModalHeader>
          <FilterContent>
            <IconTune/>
            <ModalTitleHeader>FILTROS </ModalTitleHeader>
          </FilterContent>
          <Button onClick={hide}><IconClose/></Button>
        </ModalHeader>
        <ModalContentText>
          <ModalText>
            Utilize os filtros abaixo para refinar os resultados da tabela, clique no botão APLICAR para salvar as alterações.
          </ModalText>
        </ModalContentText>
        <Separation />

        <ModalContent> 
          <FilterActions>
            <FilterActionsGroup>
              <IconDateRange />
              <FilterActionsText>TODAS AS DATAS DE INCLUSÃO</FilterActionsText>            
            </FilterActionsGroup>
            <IconArrowDropDown />
          </FilterActions>

          <FilterActions>
            <FilterActionsGroup>
              <IconDateRange />
              <FilterActionsText>TODAS AS DATAS DE ALTERAÇÃO</FilterActionsText>            
            </FilterActionsGroup>
            <IconArrowDropDown />
          </FilterActions>
        
          <FilterActions>
            <FilterActionsGroup>
              <IconHdrStrongIcon />
              <FilterActionsText>ATIVOS E INATIVOS</FilterActionsText>            
            </FilterActionsGroup>
            <IconArrowDropDown />
         </FilterActions>

        <Button 
          disabled={true}
          style={{ marginTop: 40, border:'1px solid #D83367' }} 
          width={322}
          height={67}
          background={'#F5F5F5'}        
        >
          <ButtonText color={"#D83367"} >
            APLICAR
          </ButtonText> 
        </Button>
      </ModalContent>

      </Content>
    </Container> 
  );
}
