import { typesAuth } from "../type/types";

export interface Auth {
    id: string;
    name: string;
    email: string;
    isAuthenticated: boolean;
}

const initialState: Auth = {
    id: "",
    name: "",
    email: "",
    isAuthenticated: false,
}

const authReducer = (state = initialState, action: typesAuth) => {
    switch (action.type) {
        case "register":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default authReducer