import jwt_decode from "jwt-decode";

export type UserTokenInfo = {
  id: string;
  email: string;
  username: string;
  image: string;
  exp: number;
  iat: number;
}

export function checkIfLogged(): boolean {
  const token = localStorage.getItem("token");
  if (token) {
    const isExpired = checkIfTokenExpired(token);
    if (!isExpired) return true;
  }
  return false;
}

export function checkIfTokenExpired(token: string): boolean {
  const { exp } = jwt_decode<UserTokenInfo>(token)
  const currentTime = Date.now().valueOf() / 1000;
  
  if (exp > currentTime) return false;
  
  localStorage.removeItem("token");

  return true;
}

export function getJwtToken(): string | null {
  const token = localStorage.getItem("token");
  return token;
}

export function extractJwtToken(): UserTokenInfo | null {
  const token = localStorage.getItem("token");
  if (token) return jwt_decode<UserTokenInfo>(token);
  return null;
}