import { User } from "./User";

export type PostType = {
  id: string;
  post: string;
  imageUrl?: string;
  user?: User;
};