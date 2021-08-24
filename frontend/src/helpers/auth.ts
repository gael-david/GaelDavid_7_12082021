import jwt_decode from "jwt-decode";

export type UserTokenInfo = {
  userId: number;
    email: string;
  username: string;
  exp: number;
iat: number;
}

export function checkIfLogged(): boolean {
  const token = localStorage.getItem("token");
  if (token) return true;
  return false;
}

export function extractJwtToken(): UserTokenInfo | null {
  const token = localStorage.getItem("token");
  if (token) return jwt_decode<UserTokenInfo>(token);
  return null;
}