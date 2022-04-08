import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import { ButtonContainer, Form } from './styles';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input type="email" placeholder="Email" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="" disabled selected hidden>
            Selecione a categoria
          </option>
          <option value="instagram">Instagram</option>
          <option value="gmail">Gmail</option>
          <option value="whatsapp">WhatsApp</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
