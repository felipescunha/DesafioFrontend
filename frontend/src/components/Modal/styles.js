import styled from 'styled-components';

import CloseIcon from '@material-ui/icons/Close';
import TuneIcon from '@material-ui/icons/Tune';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HdrStrongIcon from '@material-ui/icons/HdrStrong';


export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba( 0, 0, 0, 0.8);
  z-index:2000;
`;
  
export const Content = styled.div`
  margin-left: auto;
  width: 480px;
  height: 933px;
  background: #F5F5F5;
  z-index:2000;
`;

export const ModalHeader = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 432px;
  height: 96px;
  background: #fff;
  padding-left: 24px;
  padding-right: 24px;
`;

export const FilterContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalTitleHeader = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Audiowide', cursive;
  padding-left: 10px; 
`;
     
export const IconClose = styled(CloseIcon)`
  size: 20px;
  background: #fff;
  width: 48px;
  height: 48px;
  color: #666666;
  border-radius: 4px;
  padding: 14px 14px;
  border: 0;
  box-shadow: 0 0 8px rgba( 0, 0, 0, 0.1);
`;

export const IconTune = styled(TuneIcon)`
  color: #999;   
  size: 24;
`;

export const IconDateRange = styled(DateRangeIcon)`
  color: #999;   
  size: 20;
`;

export const IconArrowDropDown = styled(ArrowDropDownIcon)`
  color: #999;   
  size: 20;
`;

export const IconHdrStrongIcon = styled(HdrStrongIcon)`
  color: #999;   
  size: 20;
`;

export const ModalContentText = styled.div`
  display: flex;
  align-items: flex-start;
  height: 58px;
  padding-top: 30px;
`;

export const ModalText = styled.p`
  color: #666;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  padding-left: 24px;
  padding-right: 24px;  
`;

export const ButtonText = styled.p`
  color: ${props => `${props.color}`};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 40px;
`;

export const FilterActions = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  border-bottom: 2px solid #E9E9E9;
`;

export const FilterActionsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 26px;
  padding-bottom: 26px;
`;

export const FilterActionsText = styled.p`
  color: #666;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #D83367;
  font-style: italic;
  padding-left: 16px;
`;

export const Separation = styled.hr` 
  width: 24px;
  height: 4px;
  background: #E9E9E9;
  border: 0;
  margin-left: 24px;
`;

