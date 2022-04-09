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
  const [errors, setErrors] = useState([]);

  function handleName(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setErrors((prevState) => [...prevState, { field: 'name', message: 'Nome é obrigatório.' }]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleTelephone(e) {
    setTelephone(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

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
        <Button type="submit" disabled={errors.length}>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
