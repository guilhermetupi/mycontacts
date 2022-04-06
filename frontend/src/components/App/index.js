import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import GlobalStyled from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';
import Routes from '../../routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <Container>
        <Header />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
