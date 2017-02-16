
// Definir una función llamada calculadora que recibe una operación y
//  dos números y devuelve el resultado de la operación aplicada a 
//  los valores pasados ​​como parámetros

function calculator(operation, num1, num2){
	var ope = operation.toLowerCase();
	switch(ope){
		case "suma":
			var totalSum =  num1 + num2;
			return ope+", "+ totalSum
		case  "resta":
			var totalRest =  num1 - num2;
			return ope + ", "+ totalRest; 
		case "division":
			var totalDiv = num1 / num2; 
			return ope + ", "+ totalDiv; 
		case "multiplicacion":
			var totalMultp = num1 * num2; 
			return ope + ", "+ totalMultp; 
		default:
			break;
	}
}


calculator("suma",10,5) // 15
calculator("resta",10,5) // 5
calculator("multiplicacion",10,5) // 50
calculator("division",10,5) // 2