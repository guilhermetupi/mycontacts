import { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Form } from './styles';
import FormGroup from '../FormGroup';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import isEmailValid from '../../utils/isEmailValid';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handleNameChange(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório.' },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'name')
      );
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      const errorAlreadyExists = errors.find(
        (error) => error.field === 'email'
      );

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido.' },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'email')
      );
    }
  }

  function handleTelephoneChange(e) {
    setTelephone(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      name,
      email,
      telephone,
      category,
    });
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  function getErrorByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="Nome"
          error={getErrorByFieldName('name')}
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="E-mail"
          error={getErrorByFieldName('email')}
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder="Telefone"
          value={telephone}
          onChange={handleTelephoneChange}
        />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={handleCategoryChange}>
          <option value="" disabled defaultValue hidden>
            Categoria
          </option>
          <option value="instagram">Instagram</option>
          <option value="gmail">Gmail</option>
          <option value="whatsapp">WhatsApp</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={errors.length}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
