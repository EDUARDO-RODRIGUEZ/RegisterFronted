import { Error } from "./Error";
import { User } from "./User";

export interface ResponseUserCreate {
    ok: boolean;
    message: string;
    data: User;
    errors?: Error[]
}
