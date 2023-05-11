//const dotenv = require('dotenv')
import * as dotenv from 'dotenv'
dotenv.config({path:__dirname + '/.env'})

const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function generate(req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {message: 'OpenAI API key is not configured or missing'}
    })
    return
  }

  const animal = req.body.animal || ''

  if (animal.trim().length == 0) {
    res.status(400).json({
      error: {message: 'Please enter a valid animal'}
    })
    return
  }
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `suggest three pet names for the following ${animal}`,
      temperature: 0.8,
      max_tokens: 100,
    })
    res.status(200).json({result: response.data.choices[0].text})
  } catch (error) {
    if (error.response) {
      console.log(error(error.response.status, error.response.data))
      res.status(error.response.status).json(error.response.data)
    } else {
      console.error(`Error - OpenAI API request: ${error.message}`)
      res.status(500).json({
        error: {message: 'Error occured during your request'}
      })
    }
  }
}
