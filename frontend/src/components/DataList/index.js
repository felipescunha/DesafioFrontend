import React, { useState, useEffect} from 'react';

import {format} from 'date-fns'
import Modal from '../../components/Modal';
import CheckBox from '../../components/Checkbox';
import api from '../../services/api';

import { 
  Container,
  TableList,
  StatusColor,
  IconMoreHoriz,
 } from './styles';

function DataList() {
  const[users, setUsers] = useState([]);
  const[isModalVisivle, setIsModalVisible] = useState(false);

  useEffect(()=> {
    api.get('users').then(response => {
      setUsers(response.data)
    })
  },[]) 
 
  return (

    <Container>
      <TableList>
        <thead>
          <tr>
            <th className="thCheckbox"></th>
            <th className="thName">USUÁRIO</th>
            <th className="thEmail">EMAIL</th>
            <th className="thDataInc">DATA DE INCLUSÃO</th>
            <th>DATA DE ALTERAÇÃO</th>
            <th>REGRAS</th>
            <th>STATUS</th>
            <th>AÇÕES</th>
          </tr>
        </thead>

        <tbody>
          <Modal show={isModalVisivle} hide={() => setIsModalVisible(false)} /> 
          {users.map(user => ( 
            <tr key={user.id}>
              <td>
                <CheckBox type="checkbox" />
              </td>
              <td className="tdName">{user.name}</td>
              <td className="tdEmail">{user.email}</td>
              <td> {format(new Date(user.createdAt),'dd/MM/yyyy')}</td>
              <td>{format(new Date(user.updatedAt),'dd/MM/yyyy')}</td>
              <td>{user.regras}</td>
              <td><StatusColor>{user.status.toUpperCase()}</StatusColor></td>
              <td><IconMoreHoriz  onClick={() => setIsModalVisible(true)}/></td>
            </tr>        
          ))
        }
        </tbody>
      </TableList>
    </Container>
  );
}

export default DataList;
