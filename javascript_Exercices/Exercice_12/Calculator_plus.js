
// Calculadora Plus

// Definir una función llamada calculadora que recibe una operación y 
// varios números (puede ser 2 o 10 o lo que sea) devuelve el resultado de 
// la operación aplicada a los valores pasados ​​como parámetros

function sumAll() {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}


function  calculatorPlus(ope){

 	 	var ope = ope.toLowerCase();
 	 	switch(ope){
 	 		case "suma":
 	 			var result = 0;
 	 			var argTotal = arguments.length;

 				for( var i= 0; i=>argTotal; i++){

						result +=  argTotal[i];
 }
 	 		return ope +", Resultado: "+ result
 	 		
 	 		case  "resta":
 	 		totalRest -=  arguments[i];
 	 		return ope + ", "+ totalRest; 
 	 		case "division":
 	 		totalDiv = num1 / num2; 
 	 		return ope + ", "+ totalDiv; 
 	 		case "multiplicacion":
 	 		totalMultp = num1 * num2; 
 	 		return ope + ", "+ totalMultp; 	
 	}
 }

 calculatorPlus("suma", 3, 5);



function operation() {
  var res = 0;
  var number_of_params = arguments.length;
  for (var i = 1; i < number_of_params; i++) {
    res += arguments[i];
  }
	console.log("La opcion es: " + arguments[0])

  return res;
}
operation("suma", 2,3,4,65,7,3,1,3,4,5)







// funcion friki carles

  function tomorrow(){

	var skylabCoders = ["Alejandro", "Alejandro_teacher", "Bijay", "Carles","David_root","Ernesto", "Ezequiel", "Fran","Ignasi", "Jonas",
  	"Juanma_teacher", "Josep", "Stivali", "Oscar", "Xavi"];


  	var alert = "Mañana sorpresa para comer";

  	for (var i=0; i<skylabCoders.length; i++){

  		console.log(skylabCoders[i] + " => " + alert);

  	}

  }

// funcion de repaso linkia

function computer(){

	this.id = [] 
	this.piezas = [] 
}

var myComputer = new computer();


var codigo1 = myComputer.id.push(1);
var piezas1 = myComputer.piezas.push("MEMORIA RAM");
var codigo2 = myComputer.id.push(2);
var piezas2 = myComputer.piezas.push("TARGETA GRAFICA");
var codigo3 = myComputer.id.push(3);
var piezas3 = myComputer.piezas.push("TARGETA DE RED");

piezas1.toLowerCase();
piezas2.toLowerCase();
piezas3.toLowerCase();




for (var orden in myComputer.id){

	console.log(myComputer.id[orden] +" => "+ myComputer.piezas[orden]);
}





function Ordenador(){
                this.codigo = [];
                this.piezas = [];
            }
            
           var miPC = new Ordenador();
           var codigo1 = miPC.codigo.push("cod-1");
           var codigo2 = miPC.codigo.push("cod-2");
           var pc1 = miPC.piezas.push("RAM");
           var pc2 = miPC.piezas.push("CPU");


for (var computer in miPC[.piezas]){

  console.log(computer + " : " +miPC[computer]);
}


            
            for(var i=0; i<miPC.codigo.length && miPC.piezas.length; i++){                
                    document.write(miPC.codigo[i] + " => " + miPC.piezas[i] + "<br>");                
            }

// Crea un objeto Cine con un nombre de película, número de clientes
  // y un array de sillas. Debe contener los métodos para: cambiar el 
  // nombre de la película,  añadir un cliente a una silla, quitar un
  //  cliente de una silla, y ver el número de sillas disponibles.

// De cada cliente guarda su edad y nombre.
// Cuando se asigne una silla a un cliente, guarda ese cliente en un 
// array para saber el total de clientes que han asistido en un día.
// Sobre cada silla guarda su número de fila, columna y un método que 
// diga quien la está ocupando.


function cine(pelicula, numClientes){
	this.nombrePelicula = pelicula;
	this.numClientes = numClientes;
	this.sillas = new Array(50);

	this.clientes = function(nombre, edad){

		this.nombre = new Array();
		this.nombre.push(nombre)
		this.edad = edad;
		this.sillas.unshift(nombre);
	}
	this.sillasDisp = function(){

		for (var i = 0; cine9.sillas.length>= 50; i++){

			if(cine9.sillas.length === 50){
				console.log('NO HAY MAS SILLAS')
			}
			else{


				return sillas[i];

			}


		}

	}

}


