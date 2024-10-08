# Project Setup

- Clone the project on your local.
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable:
  

- Inside the `src/config/` folder, create a new file `config.json` and then add the following piece of JSON:

```json
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
-Once you've added your database configuration as listed above, navigate to the src folder in your terminal and run the following Sequelize command to create the database:
`npx sequelize db:create`
