import { Gender } from "../enums/gender";

export interface Contact {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: Gender;
    avatar: null | string;
}
