// Escribir un programa que escribe en la consola todos los múltiplos
//  de 23 menos de 500 y al final escribe la suma de todos ellos

function multiplies(){
    var num = 23
    var acum = ""
    for( var i = 0; acum<=500; i++ ){
        acum = i*num
		console.log(acum)
    }
return acum
}

multiplies()

// if(i>500){
// 			console.log("fuera");

// 		}