import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  Container, Footer, Overlay,
} from './styles';
import Button from '../Button';

export default function Modal({
  danger, title, description, cancel, mainButtonLabel,
}) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Footer>
          {cancel && <button type="button" className="cancel-button">Cancelar</button>}
          <Button danger={danger}>{mainButtonLabel}</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  cancel: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mainButtonLabel: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  danger: false,
  cancel: false,
};
