import { User } from "./User";

export interface Comment
{
    _id:string;
    content:string;
    userId: User;
    created: Date;
    updated: Date;
}
