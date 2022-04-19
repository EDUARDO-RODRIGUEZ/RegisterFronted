import React, { Dispatch, SetStateAction, useState } from 'react'
import { Form, Alert, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useForm from '../../hook/useForm';
import { start_register } from '../../redux/action/actionAuth';
import { FormInput, initialFormInput } from './interface';
import { schemaRegister } from './validation';

interface Props {
    setstep: Dispatch<SetStateAction<number>>;
    setcode: Dispatch<SetStateAction<string>>;
}

const RegisterForm = (props: Props) => {
    const dispatch = useDispatch();

    const { setstep, setcode } = props;
    const [errors, seterrors] = useState<Array<string>>([]);
    const { value, onChange } = useForm<FormInput>(initialFormInput);

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!await schemaRegister.isValid(value)) {
            schemaRegister.validate(value).catch((error) => seterrors(error.errors));
            return;
        }
        seterrors([]);
        await dispatch<any>(
            start_register(value, (errors: string[], code?: string) => {
                seterrors(errors);
                if (code) next(code);
            })
        );
    }

    const next = (code: string) => {
        setstep((step) => step + 1);
        setcode(code);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className={'my-3'}>
                <Form.Control
                    type={'text'}
                    placeholder={'name...'}
                    onChange={(e) => onChange(e as React.FormEvent<HTMLInputElement>)}
                    value={value.name}
                    name={'name'}
                />
            </Form.Group>
            <Form.Group className={'my-3'}>
                <Form.Control
                    type={'email'}
                    placeholder={'ed@ed.com...'}
                    onChange={(e) => onChange(e as React.FormEvent<HTMLInputElement>)}
                    value={value.email}
                    name={'email'}
                />
            </Form.Group>
            <Form.Group className={'my-3'}>
                <Form.Control
                    type={'password'}
                    placeholder={'********...'}
                    onChange={(e) => onChange(e as React.FormEvent<HTMLInputElement>)}
                    value={value.password}
                    name={'password'}
                />
            </Form.Group>

            {errors.length > 0 && <Alert className={'text-center'} variant={'danger'}>{errors[0]}</Alert>}

            <Form.Group className={'my-3'}>
                <Button type={'submit'}>siguiente</Button>
            </Form.Group>
        </Form>
    )
}

export default RegisterForm