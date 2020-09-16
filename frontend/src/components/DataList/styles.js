import styled from 'styled-components';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const  Container = styled.div`
  display: flex;
  justify-content: center;
`;


export const TableList = styled.table`
  width: 1360px;
  border-spacing: 0;
  border-collapse: separate;
  box-shadow: 0 0 8px rgba( 0, 0, 0, 0.1);
  border-radius: 4px;

 

   tr tbody {
    box-shadow: 0 0 8px rgba( 0, 0, 0, 0.1);

  }

  tr:nth-child(odd) {background: #F5F5F5}
  tr:nth-child(even) {background: #E9E9E9}


    
  th {
    
    height: 46px;
    font-size: 12px;
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    background: #fff;
    text-align: center;   
   
    &:last-child {
      text-align: center;
      padding-left: 80px;
    } 
  }

  .thName {
   text-align:left;
  }

  .thEmail {
    text-align: left;
    padding-left: 30px;
  }

  .thCheckbox {
    padding-left: 70px;
  }


  td {
    
    height: 48px;
    font-size: 14px;
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-align: center;
    
    
    
    &:last-child {
      text-align: center;
      padding-left: 80px;
      cursor: pointer;
      svg:hover {
        color: #E9E9E9;
      }
    }
  }

  .tdName {
    text-align:left;
  }
  .tdEmail {
    text-align: left;
    padding-left: 30px;
  }
`;

export const StatusColor = styled.p`
  color: #31BA1F;
`;

export const IconMoreHoriz = styled(MoreHorizIcon)`
  color: #666;
  size: 20px;
`;