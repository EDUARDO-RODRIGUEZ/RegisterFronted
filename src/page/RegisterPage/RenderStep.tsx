import React, { Dispatch, SetStateAction } from 'react'
import RegisterForm from './RegisterForm';
import ValidateCode from './ValidateCode';

interface Props {
    step: number;
    code: string;
    setcode: Dispatch<SetStateAction<string>>;
    setstep: Dispatch<SetStateAction<number>>;
}

const RenderStep = (props: Props) => {

    const { step, setstep, code, setcode } = props;

    switch (step) {
        case 0:
            return <RegisterForm setstep={setstep} setcode={setcode} />
        case 1:
            return <ValidateCode code={code} />
        default:
            return <RegisterForm setstep={setstep} setcode={setcode} />
    }

}

export default RenderStep