import { Dispatch } from "redux";

type user = { name: string, email: string, password: string }
type callback = (errors: string[], code?: string) => void;


interface Prueba extends Dispatch {
    start_register(user: user, callback: callback): void;
}

export default Prueba;