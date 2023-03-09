// import express, { Response } from 'express';
// import knex from './database/connection';

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   senha: string;
// }

// const routes = express.Router();

// routes.get('/login', async (request, response) => {
//   const login: User[] = await knex('tb_usuario').select('*');

//   const serializedLogin = login.map(user => {
//     return user.name;
//   });

//   return response.json(serializedLogin);
// });

// export default routes;
