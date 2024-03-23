let totalCarrito = 0

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let guitarra = new Producto("Guitarra", 60)
let piano = new Producto("Piano", 2000)
let flautaDulce = new Producto("Flauta dulce", 15)
let trompeta = new Producto("Trompeta", 250)
let saxofon = new Producto("Saxofon", 800)

const arrayInstrumentos = [guitarra,piano,flautaDulce,trompeta,saxofon]

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayInstrumentos[0].nombre} por $${arrayInstrumentos[0].precio}\nPulse 2 si desea comprar un ${arrayInstrumentos[1].nombre} por $${arrayInstrumentos[1].precio}\nPulse 3 si desea comprar un ${arrayInstrumentos[2].nombre} por $${arrayInstrumentos[2].precio}\nPulse 4 si desea comprar un ${arrayInstrumentos[3].nombre} por $${arrayInstrumentos[3].precio}\nPulse 5 si desea llevar un ${arrayInstrumentos[4].nombre} por $${arrayInstrumentos[4].precio}\nPulse 6 si desea filtrar desde el precio más bajo`))
    
    while (opciones < 1 || opciones > 6){
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayInstrumentos[0].nombre} por $${arrayInstrumentos[0].precio}\nPulse 2 si desea comprar un ${arrayCelulares[1].nombre} por $${arrayInstrumentos[1].precio}\nPulse 3 si desea comprar un ${arrayInstrumentos[2].nombre} por $${arrayInstrumentos[2].precio}\nPulse 4 si desea comprar un ${arrayInstrumentos[3].nombre} por $${arrayInstrumentos[3].precio}\nPulse 5 si desea llevar un ${arrayInstrumentos[4].nombre} por $${arrayInstrumentos[4].precio}\nPulse 6 si desea filtrar desde el precio más bajo`))
    }
    let productoElegido;
    if (opciones == 1){
        productoElegido = arrayInstrumentos[0]
        totalCarrito += arrayInstrumentos[0].precio 
    }
    else if (opciones == 2){
        productoElegido = arrayInstrumentos[1]
        totalCarrito += arrayInstrumentos[1].precio
    }
    else if (opciones == 3){
        productoElegido = arrayInstrumentos[2]
        totalCarrito += arrayInstrumentos[2].precio
    }
    else if (opciones == 4){
        productoElegido = arrayInstrumentos[3]
        totalCarrito += arrayInstrumentos[3].precio
    }
    else if (opciones == 5){
        productoElegido = arrayInstrumentos[4]
        totalCarrito += arrayInstrumentos[4].precio
    }
    else if (opciones == 6){
        arrayInstrumentos.sort((a,b) => a.precio - b.precio)
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayInstrumentos[0].nombre} por $${arrayInstrumentos[0].precio}\nPulse 2 si desea llevar un ${arrayInstrumentos[1].nombre} por $${arrayInstrumentos[1].precio}\nPulse 3 si desea llevar un ${arrayInstrumentos[2].nombre} por $${arrayInstrumentos[2].precio}\nPulse 4 si desea llevar un ${arrayInstrumentos[3].nombre} por $${arrayInstrumentos[3].precio}\nPulse 5 si desea llevar un ${arrayInstrumentos[4].nombre} por $${arrayInstrumentos[4].precio}`))
        while (opciones < 1 || opciones > 6){
            opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayInstrumentos[0].nombre} por $${arrayInstrumentos[0].precio}\nPulse 2 si desea llevar un ${arrayInstrumentos[1].nombre} por $${arrayInstrumentos[1].precio}\nPulse 3 si desea llevar un ${arrayInstrumentos[2].nombre} por $${arrayInstrumentos[2].precio}\nPulse 4 si desea llevar un ${arrayInstrumentos[3].nombre} por $${arrayInstrumentos[3].precio}\nPulse 5 si desea llevar un ${arrayInstrumentos[4].nombre} por $${arrayInstrumentos[4].precio}`))
        }
        if (opciones == 1){
            productoElegido = arrayInstrumentos[0]
            totalCarrito += arrayInstrumentos[0].precio
        }
        else if (opciones == 2){
            productoElegido = arrayInstrumentos[1]
            totalCarrito += arrayInstrumentos[1].precio
        }
        else if (opciones == 3){
            productoElegido = arrayInstrumentos[2]
            totalCarrito += arrayInstrumentos[2].precio
        }
        else if (opciones == 4){
            productoElegido = arrayInstrumentos[3]
            totalCarrito += arrayInstrumentos[3].precio
        }
        else if (opciones == 5){
            productoElegido = arrayInstrumentos[4]
            totalCarrito += arrayInstrumentos[4].precio
    }
    }
    let confirmacion = confirm(`Usted eligió ${productoElegido.nombre} y sale $${productoElegido.precio} dolares, desea agregarlo al carrito?`)
    if (confirmacion == true){
        let confirmacion2 = confirm("El producto se agregó al carrito, desea comprar algo más?")
        if (confirmacion2 == true){
            comprar()
        } else{
            let confirmacion3 = confirm(`El total es de ${totalCarrito} dolares, desea pagar?`)
            if (confirmacion3 == true){
                alert("Gracias por su compra!")
            } else{
                alert("")
            }
        }
    } else{
        let confirmacion4 = confirm("Desea seguir comprando?")
        if (confirmacion4 == true){
            comprar()
        } else{
            alert("Muchas gracias, nos vemos pronto!")
        }
    }
}

comprar()