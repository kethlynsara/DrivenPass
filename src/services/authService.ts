import { User } from "@prisma/client";

export type CreateSignUpData = Omit<User, "id" | "createdAt">;