//Tarea1 AyD1 info

/*----------------------------------------ojo con cors si hubiera interfaz
npm init -y
npm i express cors dotenv
*/

var express = require('express')

var app = express()
app.use(express.json())//para que no de problemas


app.get('/info-201700644',function(req,res){//GET
    const result = "Tarea1 AyD1"
    res.send(result)
})

app.listen(//ojo con el puerto
    7000,
    ()=>console.log('Server on port', 7000)
)