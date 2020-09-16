import styled from 'styled-components';

import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import TvIcon from '@material-ui/icons/Tv';
import UpdateIcon from '@material-ui/icons/Update';


export const Container = styled.div`
  display: flex;
  bottom: 0;
  position: absolute;
  justify-content: center;
  background: #333;
  width: 100%;
`;

export const FooterContent = styled.div`
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentAlive = styled.div`
  background: #333333;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;  
  width: 127px;
  height: 47px;
  font-size: 12;
  color: #FF8700;
  font-family: 'Audiowide', cursive;
`;

export const ContentAliveTriangle = styled.div`
  border-bottom: 47px solid #222222;
  border-right: 45px solid transparent;
  width: 0px;
  height: 0px;
`;


export const IconRadioButtonChecked = styled(RadioButtonCheckedIcon)`
  color: #FF8700;
  size: 16px;
  padding-right: 6.61px;
`;

export const ContainerMeeting = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

export const IconTv = styled(TvIcon)`
  color: #666666;
  size: 16px;
  padding-right: 6.61px;
`;

export const TextMeet = styled.p`
  color: #fff;
  size: 16px;
  padding-right: 6px;
  font-family: 'Roboto', sans-serif;
  font-weight: medium;
`;

export const TextMeetSeparation = styled.p`
  color: #fff;
  size: 16px;
  padding-right: 6px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-style: italic;
`;

export const TextMeetHour = styled.p`
  color: #fff;
  size: 16px;
  padding-right: 6px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export const IconUpdate = styled(UpdateIcon)`
  color: #666666;
  size: 16px;
  padding-right: 6.61px;
  padding-left: 15px;
`;

export const TextUpdates = styled.p`
  color: #E9E9E9;
  size: 14px;
  padding-right: 6.61px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: italic;
`;

export const TextUpdatesHour = styled.p`
  color: #E9E9E9;
  size: 14px;
  padding-right: 6.61px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;  
`;

export const ContainerDate = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  margin-right: 20px;
`;

export const ContainerTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FF8700;
  font-size: 24px;
  font-weight: 400;
  font-family: 'Audiowide', cursive;
  margin-right: 20px; 
`;

export const RobotoItalick300 = styled.p`
  color: #E9E9E9;
  size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-style: italic;
  margin-right: 2px;
`;

export const RobotoItalick500 = styled.p`
  color: #E9E9E9;
  size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;  
  font-style: italic;
  margin-right: 2px;
`;
