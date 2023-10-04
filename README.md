# ReactJS app to generate SQL using OpenAI API

This project was created with `npx create-react-app sql-ai-gen --template typescript`

It uses openAI API to generate SQL statements base on user's input. The access to OpenAi API is through the backend Node/Express with use of dotenv file to hide the API key. The AI generated SQL statements and explanation will be displayed at the bottom, along with the history of all prior requests on the top of the scrollable screen.

![dashboard](public/sample.jpg)

### `npm run start-frontend` to start the frontend UI

### `npm run start-backend` to start the backend server

### `npm run build` to build and deploy
