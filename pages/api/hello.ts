// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from './interface/db/db'
import { ResponseFunc } from './interface/response'
import user, { User } from './interface/userDB'
import jwt, { Jwt, JwtPayload } from "jsonwebtoken"
import { deleteCookie } from 'cookies-next'
import { log } from 'console'

const { SECRET_KEY } = process.env

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const methods: keyof ResponseFunc = req.method as keyof ResponseFunc
  const catcher = (error: Error) => res.json({ error: error, msg: "Error" })
  await connectDB()

  const Case: ResponseFunc = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const tokenGet = req.headers.token as string



      if (tokenGet === "") return res.status(401).json({ err: "Error", msg: "Token Not exist" })

      jwt.verify(tokenGet, SECRET_KEY as string, (err, decode) => {

        if (err) return catcher(err)
        const id: string[] | "" = decode ? ['id'] : ""
        user.findById(id, (err: Error, data: User) => {
          if (err) {

            res.status(401).json({ err: "Error", msg: "Token Doesnt Exist" })

          };

          console.log(data)
          return res.status(200).json({ msg: data })
        })

      })

    },

    POST: async (req: NextApiRequest, res: NextApiResponse) => {


      const dataUser: User = req.body

      if (!dataUser.username || !dataUser.email || !dataUser.password) return res.json({ msg: "Error all Fields are required" })





      user.find({ $or: [{ email: dataUser.email }, { username: dataUser.username }] }).then(async (response) => {
        if (response.length !== 0) {
          if (response[0].email === dataUser.email) return res.json({ error: "Error", msg: "Email Exist" })
          if (response[0].username === dataUser.username) return res.json({ error: "Error", msg: "User Exist" })
        }
        dataUser.verfified = false
        dataUser.vs = []

        const save = await user.create(dataUser)
        return save.save().then(async () => {


          const token = await jwt.sign({ id: save._id }, process.env.SECRET_KEY as string, { expiresIn: '1y' })


          res.json({ msg: "Created", token: token })
        })
          .catch(catcher)

      })
        .catch(catcher)

    }


  }

  const response = Case[methods]

  if (response) response(req, res)
  else res.status(404).json({ msg: "No response" })

}

