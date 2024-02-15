import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import nodemailer from 'nodemailer'

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000

const transporter = nodemailer.createTransport({
  service: 'google',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
})

const options = {
  from: 'gavruluknazar0210@gmail.com',
  to: 'gavruluknazar0210@gmail.com',
  subject: 'test',
  text: 'test',
}

app.get('/', (req, res) => {
  transporter.sendMail(options, (err) => {
    console.log(err)
  })
})

try {
  app.listen(PORT, () => {
    console.log(`Server was started in port: ${PORT}`)
  })
} catch (error) {
  console.log(error)
}
