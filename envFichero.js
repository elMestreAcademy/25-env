// LEE el contenido del fichero .env y lo guarda en process.env
require('dotenv').config()


console.log(process.env.POKEMON)

let connect = {
	user: process.env.DB_USER,
	pass: process.env.DB_PASS
}

console.log(connect)