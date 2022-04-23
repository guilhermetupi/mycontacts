import { useState } from 'react'
import PropTypes from 'prop-types'
import { ButtonContainer, Form } from './styles'
import FormGroup from '../FormGroup'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'
import isEmailValid from '../../utils/isEmailValid'
import formatPhone from '../../utils/formatPhone'
import useErrors from '../../hooks/useErrors'

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const { setError, removeError, getErrorByFieldName, errors } = useErrors()

  const isFormValid = name && !errors.length

  function handleNameChange(e) {
    setName(e.target.value)

    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' })
    } else {
      removeError('name')
    }
  }

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value))
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    console.log({
      name,
      email,
      phone,
      category,
    })
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorByFieldName('name')?.message}>
        <Input
          type="text"
          placeholder="Nome *"
          error={getErrorByFieldName('name')}
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorByFieldName('email')?.message}>
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
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
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
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
