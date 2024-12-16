import { Comment } from "./Comment";

export interface NewsRecord
{
    _id: string;
    caption: string;
    abstract: string;
    content: string;
    likes: string[];
    comments: Comment[];
    created: Date;
    updated: Date;
}

export interface NewsRecordForUpdate
{
    _id: string;
    caption: string;
    abstract: string;
    content: string;
}

