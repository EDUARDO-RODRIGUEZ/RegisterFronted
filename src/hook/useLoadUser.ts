import { useEffect, useState } from "react";
import { apiBackend } from "../api/apiBackend";
import { ResponseAllUser } from "../interface/ResponseAllUser";
import { User } from "../interface/User";

interface ResultHook {
    users: User[]
}

const useLoadUser = (): ResultHook => {

    const [users, setusers] = useState<User[]>([] as User[]);

    const getAllUser = async () => {
        let response: ResponseAllUser;
        try {
            let result = await apiBackend.get<ResponseAllUser>('/user');
            response = result.data;
        } catch (error) {
            console.log("Error :" + error);
            return;
        }
        setusers(response.data);
    }

    useEffect(() => {
        setTimeout(() => {
            getAllUser();
        }, 2000);
    }, []);

    return {
        users
    }
}

export default useLoadUser