import { useState } from 'react';

const useForm = <T extends object>(initialValue: T) => {

    const [value, setvalue] = useState<T>(initialValue);

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setvalue({
            ...value,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    return {
        value,
        onChange
    }
}

export default useForm
