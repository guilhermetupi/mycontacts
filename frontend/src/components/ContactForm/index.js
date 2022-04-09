import { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Form } from './styles';
import FormGroup from '../FormGroup';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [category, setCategory] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleTelephone = (e) => setTelephone(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error="Nome é obrigatório">
        <Input type="text" placeholder="Nome" error value={name} onChange={handleName} />
      </FormGroup>

      <FormGroup error="O formato do e-mail é inválido">
        <Input type="email" placeholder="E-mail" error value={email} onChange={handleEmail} />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Telefone" value={telephone} onChange={handleTelephone} />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={handleCategory}>
          <option value="" disabled selected hidden>
            Categoria
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
