import React, { useState } from 'react';

import Button from '../../components/Button';
import Modal from '../../components/Modal';

import {
  Container,
  HeaderContent,
  VerticalLine,
  IconSecurity,
  IconPerson,
  InputSearch,
  IconHome,
  IconTune,
  IconPower,
  IconSettings,
  ControlContainer,
  IconSearch,
  SearchContent,
} from './styles';

import logo from '../../assets/symbol.svg'
import PersonIcon from '@material-ui/icons/Person';

function Header(props) {
  const[isModalVisivle, setIsModalVisible] = useState(false);
 
  return (
    <Container>        
      <HeaderContent>
        <img src={logo} alt="logo" />
                
        <VerticalLine/>
        <IconSecurity />
        <IconPerson/>

        <SearchContent>
          <InputSearch placeholder="Pesquisar..." />
          <IconSearch />
        </SearchContent> 
        
        <ControlContainer>
          <Button onClick={() => setIsModalVisible(true)}>
            <IconTune/>
          </Button>

          <Modal show={isModalVisivle} hide={() => setIsModalVisible(false)} />

          <Button          
            widht={176}
            height={48}
            background={'#D83367'}
            color={'#fff'}
            weight={"bold"}
          >
            <PersonIcon
              style={{ paddingRight: 10 }}
            /> INCLUIR USUÁRIO
          </Button>

          <VerticalLine/>
          <IconHome />
          <IconSettings />
          <IconPower />
        
        </ControlContainer>
      </HeaderContent>
    </Container>
  )
}

export default Header;
