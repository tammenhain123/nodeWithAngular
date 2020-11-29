const connStr = "Server=mssql914.umbler.com,5003;Database=dbo.rafael;User Id=rafael;Password=rafatamme;";
const sql = require("mssql");

sql.connect(connStr)
   .then(createTable)
   .catch(err => console.log("erro! " + err));



function createTable(conn){    
    const table = new sql.Table('Clientes');
    table.create = true;
    table.columns.add('ID', sql.Int, {nullable: false, primary: true});
    table.columns.add('data', sql.DateTime(150), {nullable: false});
    table.columns.add('hora', sql.NChar(11), {nullable: false});
    table.columns.add('dia', sql.NVarChar(150), {nullable: false});
    table.columns.add('mes', sql.NChar(11), {nullable: false});
    table.columns.add('uf', sql.NVarChar(150), {nullable: false});
    table.columns.add('estado', sql.NChar(11), {nullable: false});
    table.columns.add('alo', sql.NVarChar(150), {nullable: false});
    table.columns.add('cpc', sql.NChar(11), {nullable: false});
    table.columns.add('cpca', sql.NVarChar(150), {nullable: false});
    table.columns.add('pp', sql.NChar(11), {nullable: false});
    table.columns.add('cliente_nao_esta', sql.NVarChar(150), {nullable: false});
    table.columns.add('cliente_nao_validou', sql.NChar(11), {nullable: false});
    table.columns.add('desconhece', sql.NVarChar(150), {nullable: false});
    table.columns.add('desconhece_divida', sql.NChar(11), {nullable: false});
    table.columns.add('falecido', sql.NVarChar(150), {nullable: false});
    table.columns.add('fone_mudo', sql.NChar(11), {nullable: false});
    table.columns.add('preventivo', sql.NVarChar(150), {nullable: false});
    table.columns.add('recado', sql.NChar(11), {nullable: false});
    table.columns.add('alega', sql.NVarChar(150), {nullable: false});
    table.columns.add('retorno_agendado', sql.NChar(11), {nullable: false});
    table.columns.add('dados_invalidos', sql.NVarChar(150), {nullable: false});
    table.columns.add('sem_interesse', sql.NChar(11), {nullable: false});
    table.columns.add('nao_tabulada', sql.NVarChar(150), {nullable: false});
    table.columns.add('retorno_indireto', sql.NChar(11), {nullable: false});
    table.columns.add('fraude', sql.NVarChar(150), {nullable: false});
    table.columns.add('ocupado', sql.NChar(11), {nullable: false});
    table.columns.add('recept', sql.NChar(11), {nullable: false});
    table.columns.add('processo_juridico', sql.NVarChar(150), {nullable: false});
    table.columns.add('contestacao', sql.NChar(11), {nullable: false});
    table.columns.add('valor', sql.NVarChar(150), {nullable: false});
    table.columns.add('tipo', sql.NChar(11), {nullable: false});
    table.columns.add('produto', sql.NVarChar(150), {nullable: false});
    table.rows.add(1, 15/04/2019, '20','15/15/2019', '4','SP', 'SÃO PAULO','30', '9','4', '4',
    '0', '2','5', '0','0', '2','0', '0','2', '2',
    '0', '0','1', '0','10', '0','0', '1','0', '1',
    '342,58', 'HUMANO','FIXO');
    

    const request = new sql.Request()
    request.bulk(table)
        .then(result => console.log('funcionou'))
        .catch(err => console.log('erro no bulk. ' + err));
}