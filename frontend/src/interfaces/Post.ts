export type PostType = {
  id: string;
  post: string;
  imageUrl?: string;
  user?: {
    id?: string;
    username?: string;
    image?: string;
  }
};