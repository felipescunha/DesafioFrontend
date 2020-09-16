import React from 'react';

import {
  Container,
  FooterContent,
  IconRadioButtonChecked,
  ContentAlive,
  ContainerMeeting,
  IconTv,
  TextMeet,
  TextMeetSeparation,
  TextMeetHour,
  IconUpdate,
  TextUpdates,
  TextUpdatesHour,
  ContainerTime,
  ContainerDate,
  ContentAliveTriangle,
  RobotoItalick300,
  RobotoItalick500,
} from './styles';

function Footer() {
  return (
    <Container>
      <FooterContent>
        <ContentAlive><IconRadioButtonChecked/>NO AR</ContentAlive>
        <ContentAliveTriangle />
  
        <ContainerMeeting>
          <IconTv />
          <TextMeet>ENCONTRO</TextMeet>
          <TextMeetSeparation>-</TextMeetSeparation>
          <TextMeetHour>10:00</TextMeetHour>
        
          <IconUpdate />
          <TextUpdates>Última atualização em</TextUpdates>
          <TextUpdatesHour>10:28</TextUpdatesHour>
        </ContainerMeeting>
            
        <ContainerDate>
          <RobotoItalick300>Quinta,</RobotoItalick300>
          <RobotoItalick500>30</RobotoItalick500>
          <RobotoItalick300>de</RobotoItalick300>
          <RobotoItalick500>Maio</RobotoItalick500>
          <RobotoItalick300>de</RobotoItalick300>
          <RobotoItalick500>2019</RobotoItalick500>
        </ContainerDate>
        <ContainerTime> // 10:30:42</ContainerTime>
      </FooterContent>
    </Container>
  )
}

export default Footer;
