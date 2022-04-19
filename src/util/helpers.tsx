import { Error } from "../interface/Error";
import emailjs from '@emailjs/browser';

const numberRandom = (min: number, max: number): number => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const parseError = (errors: Error[]): string[] => {
    let errors_parser = errors.map((e) => e.msg);
    return errors_parser;
}

const sendEmail = async (name: string, email: string, code: string): Promise<boolean> => {
    let message: string = `React app : code:${code}`;
    const params = { name, message, email };
    try {
        await emailjs.send(process.env.REACT_APP_SERVICEID!, process.env.REACT_APP_TEMPLATEID!, params, process.env.REACT_APP_PUBLICKEY);
        console.log("succes email");
        return true;
    } catch (error) {
        console.log("failed email:" + error);
        return false;
    }
}

const helpers = {
    numberRandom,
    parseError,
    sendEmail
};

export default helpers;