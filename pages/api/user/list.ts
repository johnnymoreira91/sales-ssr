// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@db/index'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    let users = await prisma.user.findMany()
    let products = await prisma.product.findMany()
    let func = []
    for (let obj of users) {
      if (obj.permissionLevel === 1 || obj.permissionLevel === 2) {
        func.push(obj)
      }
    }
    res.status(200).json({users, products, productSize: products.length, tamanho: users.length, func: func.length})
  } catch (error) {
    console.log(error)
    return res.status(400).json({messageError: 'Error to list users'})
  }
}
