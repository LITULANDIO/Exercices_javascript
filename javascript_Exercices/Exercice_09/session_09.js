
// Hexadecimal

// Escribe una función que convierte un color hexadecimal, "azul" por ejemplo
//  "# 0000FF" en su representación RGB rgb (0,0,255) 
//  ".Deja a la función el nombre getRGB () y probarlo con este código

>>> var a = getRGB ('#00FF00');
>>> a;
“rgb(0,255,0)”;

function getRGB(color){

	hex1 = color[1] + color[2];
	hex2 = color[3] + color[4];
	hex3 = color[5] + color[6];
	console.log(hex3);
	color = "rgb(" + hex1 + "," + hex2 + "," + parseInt(hex3,16)+")";

	console.log(color);
	
}

getRGB('#0000FF');


