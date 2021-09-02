export type CommentType = {
  id: string;
  comment: string;
  imageUrl?: string;
  user?: {
    id?: string;
    username?: string;
    image?: string;
  }
};