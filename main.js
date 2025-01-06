import './css/estilos-1.css'


let botones = document.querySelectorAll('button')
let display = document.querySelector('#display')
let digitos = ''

botones.forEach(button => { // añade a cada botón el addEventListener por los click
    button.addEventListener('click', () => { // captura los valores de los botones y actualiza el display con los nuevos digitos
        let valor = button.textContent
        textoDisplay(valor)
    })
})

let textoDisplay = (valor) => { // la funcion limita la cantidad de digitos a 13. 
    if (digitos.length < 13) { // El if deja seguir agregando digitos al display hasta que este llegue a 13
        let ultNum = digitos.slice(-1) // se utiliza para obtener el ultimo digito de la cadena.
        if (['+', '-', '*', '/'].includes(valor) && ['+', ]) return // validacion que dice que si ya hay un punto (coma) en el display, no se pueda agregar otro mas
        digitos += valor
        display.textContent = digitos
    }
}

display.addEventListener('click', () => { // otro evento para el click que elimina los digitos del display al hacer click en este
    digitos = ''
    display.textContent = digitos
})

let calculos = () => {
    try { // try se utiliza para envolver un bloque de codigo que podria lanzar una excepcion (error). si esto ocurre, se salta inmediatamente al bloque catch.
        let resultado = eval(digitos) // ! la funcion eval() toma una cadena de texto como argumento y la evalua como si fuera una expresion de Js.
        display.textContent = resultado.toString().slice(0, 13) // ! el metodo toString() convierte numeros, objetos y otros datos a texto y slice() extrae una parte de la cadena y devuelve una nueva cadena solo con la cantidad de digitos estipulada (en este caso, solo hasta 13)
        digitos = resultado.toString() // actualiza los digitos actuales en el display
    } catch { // catch captura el error lanzado en el bloque try y evita que el programa se detenga abruptamente
        display.textContent = 'Error'
        digitos = ''
    }
}

document.querySelector('#igual').addEventListener('click', calculos)