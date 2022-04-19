import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hook/useForm';
interface Props {
  code: string;
}

const ValidateCode = (props: Props) => {
  const { code } = props;
  const navigate = useNavigate();
  const { value, onChange } = useForm({ code: '' });
  const [errors, seterrors] = useState<Array<string>>([]);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (code === value.code) navigate('/user/list', { replace: true });
    seterrors(['el codigo es incorrecto']);
  }

  return (
    <Form onSubmit={onSubmit}>
      <small className={'text-dark'}>Ingrese el codigo de verificacion</small>
      <Form.Group className={'my-3'}>
        <Form.Control
          type={'text'}
          placeholder={'code...'}
          onChange={(e) => onChange(e as React.FormEvent<HTMLInputElement>)}
          value={value.code}
          name={'code'}
        />
      </Form.Group>
      {errors.length > 0 && <Alert className={'text-center'} variant={'danger'}>{errors[0]}</Alert>}
      <Form.Group className={'my-3'}>
        <Button type={'submit'}>ingresar</Button>
      </Form.Group>
    </Form>
  )
}

export default ValidateCode