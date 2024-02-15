import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello world')
})

try {
  app.listen(PORT, () => {
    console.log(`Server was started in port: ${PORT}`)
  })
} catch (error) {
  console.log(error)
}
