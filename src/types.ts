export interface Post {
    id: string;
    name: string;
    author: string;
    handle: string;
    content: string;
    timestamp: string;
    likes: number;
    imageUrl?: string;
    rating?: number;
}

export interface Comment {
    id: string;
    postId: string;
    author: string;
    text: string;
}