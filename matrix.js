//Este es un algoritmo para visualizar Matrix en fondo negro y la cascada de letras verdes


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

let cw = window.innerWidth
let ch = window.innerHeight

canvas.width = cw
canvas.height = ch

let arregloNumero = [
"a", 
"b", 
"c", 
"d", 
"e", 
"f", 
"g", 
"h", 
"i", 
"j", 
"k", 
"l", 
"m", 
"n", 
"ñ", 
"o", 
"p", 
"q", 
"r", 
"s", 
"t", 
"u", 
"v", 
"w", 
"x", 
"y", 
"z",
"£",
"¥",
"§",
"¤"
];

let codigoArray = []
let conteoCodigo = 200
let fontSize = 15
let numeroColumna = cw / fontSize
let frame = 0

class Matrix {

	constructor(x, y) {
		this.x = x
		this.y = y
	}

	draw(ctx) {

		this.valor = arregloNumero[Math.floor(Math.random() * (arregloNumero.length - 1))].toUpperCase()
		this.velocidad = Math.random() * fontSize * 3 / 4 + fontSize * 3 / 4

		ctx.fillStyle = "rgba(0,255,0)"
		ctx.font = fontSize + "px san-serif"
		ctx.fillText(this.valor, this.x, this.y)

		this.y += this.velocidad

		if (this.y > ch) {
			this.x = Math.floor((Math.random() * numeroColumna) * fontSize)
			this.y = 0
			this.velocidad = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4

		}
	}
}


let update = () => {
	if (codigoArray.length < conteoCodigo) {
		let matrix = new Matrix(Math.floor(Math.random() * numeroColumna) * fontSize, 0)
		codigoArray.push(matrix)
	}

	ctx.fillStyle = "rgba(0,0,0,0.05)"
	ctx.fillRect(0,0,cw,ch)


	for (let i = 0; i < codigoArray.length && frame % 2 == 0; i++) {
		codigoArray[i].draw(ctx)
	}

	requestAnimationFrame(update)
	frame++
}

update()