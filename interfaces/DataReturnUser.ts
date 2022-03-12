import { Prisma } from '@prisma/client';

export interface DataReturn extends Prisma.UserArgs {
    message?: string
  }