
//Escribir una función que escribe en la consola de la tabla de multiplicar (de 1 a 10)
/* global vew_table */

function view_table(){
var acum = ""
	for(var i = 0; i <= 10; i++){		
		for(var j = 0; j <= 10; j++){
			acum += (i * j) + " "
			
		}
		acum += "\n";
	}
	return acum
}
view_table()