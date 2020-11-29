const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const connStr = "Server=mssql914.umbler.com,5003;Database=dbo.rafael;User Id=rafael;Password=rafatamme;";
const sql = require("mssql");
sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}

router.get('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM Clientes', res);
})
