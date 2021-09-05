import { User } from "./User";

export type CommentType = {
  id: string;
  comment: string;
  imageUrl?: string;
  user?: User;
};