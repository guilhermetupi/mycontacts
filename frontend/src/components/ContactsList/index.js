import {
  Card,
  Container, Header, ListContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
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
          <a href="/"><img src={edit} alt="edit" height="24" /></a>
          <button type="button"><img src={trash} alt="trash" height="24" /></button>
        </div>
      </Card>

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
          <a href="/"><img src={edit} alt="edit" height="24" /></a>
          <button type="button"><img src={trash} alt="trash" height="24" /></button>
        </div>
      </Card>

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
          <a href="/"><img src={edit} alt="edit" height="24" /></a>
          <button type="button"><img src={trash} alt="trash" height="24" /></button>
        </div>
      </Card>
    </Container>
  );
}
