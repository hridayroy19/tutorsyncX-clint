export interface IUser {
    email: string;
    role: "student" | "tutor";
    iat?: number;
    exp?: number;
  }