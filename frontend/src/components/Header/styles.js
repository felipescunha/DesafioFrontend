import styled from 'styled-components';

import SecurityIcon from '@material-ui/icons/Security';
import PersonIcon from '@material-ui/icons/Person';
import TuneIcon from '@material-ui/icons/Tune';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

export const Container = styled.div`
  background: #F5F5F5;
  box-shadow: 0 0 8px rgba( 0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  height: 96px;
  display: flex;
  align-items: center;
  margin: 0 auto; 
  margin-bottom: 24px;
  padding-left: 5px;
`;

export const VerticalLine = styled.hr` 
  width: 2px;
  height: 24px;
  background: #E9E9E9;
  margin-right: 15px;
  border: 0;
`;

export const IconSecurity = styled(SecurityIcon)`
  background: #fff;
  width: 52px;
  height: 48px;
  color: #666666;
  border-radius: 4px;
  padding: 14px 16px;
  box-shadow: 0 0 8px rgba( 0, 0, 0, 0.2);
  margin-left: 2px;
`;

export const IconPerson = styled(PersonIcon)`
  size: 20px;
  background: linear-gradient(-90deg, #FF8700, #D83367 );
  width: 52px;
  height: 48px;
  color: #fff;
  border-radius: 4px;
  padding: 14px 16px;
  box-shadow: 0 0 8px rgba( 0, 0, 0, 0.2);
`;

export const InputSearch = styled.input`
  width: 298px;
  height: 36px;
  border: 0px;
  background: #F5F5F5;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-style: italic;
  
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    color: #333;
  }
`;

export const IconTune = styled(TuneIcon)`
  size: 20px;
  background: #fff;
  width: 48px;
  height: 48px;
  color: #666666;
  border-radius: 4px;
  padding: 14px 14px;
  box-shadow: 0 0 8px rgba( 0, 0, 0, 0.1);
`;

export const ControlContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 402px;
  height: 48px;
  padding-right: 40px;
`;

export const IconHome = styled(HomeIcon)`
  color: #666;
`;

export const IconSettings = styled(SettingsIcon)`
  color: #666;
`;

export const IconPower = styled(PowerIcon)`
  color: #666;
`;

export const IconSearch = styled(SearchIcon)`
  color: #666;   
`;

export const SearchContent = styled.div`
  display: flex;
  background: #f5f5f5;
  border-bottom: 2px solid #E9E9E9;
  align-items: center;
  margin-left: 40px;
`;