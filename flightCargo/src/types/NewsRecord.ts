import { Comment } from "./Comment";

export interface NewsRecord
{
    _id: string;
    caption: string;
    abstract: string;
    description: string;
    likes: string[];
    comments: Comment[];
    created: Date;
    updated: Date;
}

