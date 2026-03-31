export interface Post {
    id: string;
    author: string;
    handle: string;
    content: string;
    timestamp: string;
    likes: number;
}

export interface Comment {
    id: string;
    postId: string;
    author: string;
    text: string;
}