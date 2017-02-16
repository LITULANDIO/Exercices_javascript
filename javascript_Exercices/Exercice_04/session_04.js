// mostrar la tabla de multiplicacion del 10


function view_table(){
var acum = ""
	for(var i = 0; i <= 10; i++){

		acum+= (i * 1) + "\n"
	}	
		return acum
	}

	view_table()