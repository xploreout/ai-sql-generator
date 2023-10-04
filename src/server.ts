import express, { Application, Request, Response } from 'express'
import cors from 'cors'
//npm i --save-dev @types/cors
import OpenAI from 'openai'
import * as dotenv from 'dotenv'
dotenv.config({ path: 'src/.env' })

const app: Application = express()
app.use(cors())
app.use(express.json())

const PORT: number = 8000
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
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
    res.send(chatCompletion.choices[0].message)
  } catch (error) {
    console.error(error)
    res.status(500).send(`Caught an error..Server Error..${error}`)
  }
})

app.listen(PORT, () => console.log(`The server is running at ${PORT}`))
