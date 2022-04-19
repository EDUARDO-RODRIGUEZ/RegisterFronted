import { User } from "./User";

export interface ResponseAllUser {
    ok: boolean;
    message: string;
    data: User[];
}
