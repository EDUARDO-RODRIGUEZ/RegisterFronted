import { Dispatch } from "redux";
import { apiBackend } from "../../api/apiBackend";
import { ResponseUserCreate } from "../../interface/ResponseUserCreate";
import helpers from "../../util/helpers";
import { typesAuth } from "../type/types";

type user = { name: string, email: string, password: string }
type callback = (errors: string[], code?: string) => void;

export const start_register = (user: user, callback: callback) => {
    return async (dispatch: Dispatch<typesAuth>) => {

        let response: ResponseUserCreate;
        try {
            let { data } = await apiBackend.post<ResponseUserCreate>('/user/create', user);
            if (!data.ok) {
                callback(helpers.parseError(data.errors!));
                return;
            }
            response = data;
        } catch (error) {
            console.log("Error actionAuth_start_register :" + error);
            callback(['error en el server']);
            return;
        }

        const { id, name, email } = response.data;
        let code: string = helpers.numberRandom(0, 999).toString();
        await helpers.sendEmail(name, email, code);
        callback([], code);

        dispatch({
            type: "register",
            payload: { id: id.toString(), name, email, isAuthenticated: true }
        });
    }
}