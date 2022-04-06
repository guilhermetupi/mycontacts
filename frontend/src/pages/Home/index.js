import { InputSearchContainer } from './styles';
import ContactsList from '../../components/ContactsList';

export default function Home() {
  return (
    <>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <ContactsList />
    </>
  );
}
