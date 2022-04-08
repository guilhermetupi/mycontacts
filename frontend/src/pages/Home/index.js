import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InputSearchContainer,
  Card,
  Container, Header, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Modal from '../../components/Modal';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => setModalVisible(!modalVisible);

  return (
    <>
      {modalVisible && <Modal danger title="Oi" description="oi" mainButtonLabel="oi" />}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Container>
        <Header>
          <strong>3 contatos</strong>
          <Link to="/new">Novo contato</Link>
        </Header>
        <ListContainer>
          <header>
            <button type="button">
              <span>Nome</span>
              <img src={arrow} alt="arrow" height="16" />
            </button>
          </header>
        </ListContainer>

        <Card>
          <div className="info">
            <div className="name">
              <strong>Guilherme</strong>
              <small>instagram</small>
            </div>
            <span>guilherme@guilherme.com</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/1"><img src={edit} alt="edit" height="24" /></Link>
            <button type="button" onClick={handleModalVisible}><img src={trash} alt="trash" height="24" /></button>
          </div>
        </Card>
      </Container>
    </>
  );
}
