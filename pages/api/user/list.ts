// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@db/index'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    let users = await prisma.user.findMany()
    res.status(200).json({users, tamanho: users.length})
  } catch (error) {
    console.log(error)
    return res.status(400).json({messageError: 'Error to list users'})
  }
}
