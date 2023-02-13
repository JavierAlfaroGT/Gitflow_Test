//Tarea1 AyD1 calculadora

/*----------------------------------------ojo con cors si hubiera interfaz
npm init -y
npm i express cors dotenv
*/

var express = require('express')

var app = express()
app.use(express.json())//para que no de problemas


app.post('/calculadora-201700644',function(req,res){//POST
    const result = {"suma":5+5} 
    res.send(result)
})

app.listen(//ojo con el puerto
    7000,
    ()=>console.log('Server on port', 7000)
)