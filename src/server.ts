import express, { Application, Request, Response } from 'express'
import cors from 'cors'
//npm i --save-dev @types/cors
import OpenAI from 'openai'
import dotenv from 'dotenv'

const app: Application = express()
// app.engine('pug', require('pug').__express)
app.use(cors())
app.use(express.json())
dotenv.config()

const PORT: number = 8000
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

app.post('/completions', async (req: Request, res: Response) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: 'Create a SQL request to ' + req.body.message,
        },
      ],
    })
    console.log(chatCompletion.choices[0].message)
    res.send(chatCompletion.choices[0].message)
  } catch (error) {
    console.error(error)
    res.status(500).send(`Caught an error..Server Error..${error}`)
  }
})

app.listen(PORT, () => console.log(`Your server is running at ${PORT}`))
