# ReactJS app that create SQL using OpenAI API

This project was created with `npx create-react-app sql-ai-gen --template typescript` and tailwind CSS.

It uses openAI API to generate SQL statements. User write the request in the input field. `Run Query` will fetch API request to backend that access OpenAI API. The AI generated statements will be displayed along with the history of all prior requests as reference.

Backend server uses Node/Express to access OpenAI api and protect secret using dotenv.

![dashboard](public/sample.jpg)

### `npm run start-frontend` to start the frontend UI

### `npm run start-backend` to start the backend server

### `npm run build` to build and deploy
