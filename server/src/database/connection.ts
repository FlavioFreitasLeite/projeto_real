import express from 'express';
import knex from 'Knex';


const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());


const connection = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_aqua'
  }
});

app.post('/login', async (req, res) => {
  const { usuario, senha } = req.body;

  console.log(`Tentando fazer login com usuário ${usuario} e senha ${senha}`)

  try {
    // console.log(`Tentando fazer login com usuário ${usuario} e senha ${senha}`);
    const resultado = await connection
      .select()
      .from('tb_usuario')
      .where('usuario', usuario)
      .andWhere('senha', senha)
      .first();

    if (resultado) {
      // console.log(`Login bem-sucedido para usuário ${usuario}`);
      res.status(200).send('Login bem-sucedido!');
    } else {
      // console.log(`Login inválido para usuário ${usuario}`);
      res.status(401).send('Login inválido.');
    }
  } catch (error) {
    // console.log(`Erro ao fazer login para usuário ${usuario}: ${error}`);
    res.status(500).send('Erro ao fazer login.');
  }
});










// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

export default connection;
