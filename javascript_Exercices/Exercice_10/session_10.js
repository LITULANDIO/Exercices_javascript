
// Hexadecimal mejorado
// Mejora la función anterior así que además de 
//la conversión también identifica algunos colores básicos:

function getRGB( colorHex ){

// Creamos un objeto diccionario
	var colors = {
		'#FFFFFF': 'white',
		'#000000': 'black'
	}


	// color -> ' recogemos los valores pares # FF FF FF' 
	var redHex = colorHex[1] + colorHex[2]; //FF
	var greenHex = colorHex[3] + colorHex[4]; // FF
	var blueHex = colorHex[5] + colorHex[6]; // FF

	// convertimos los valores pares a numero hexadecimal
	var redDec = parseInt(redHex,16);
	var greenDec = parseInt(greenHex,16); // FF
	var blueDec = parseInt(blueHex,16); // FF

	// Declaramos indices en variables para encontrar la propiedad deseada
    var colorHex1 = '#FFFFFF';
	var colorHex2 = '#000000';

	// conversion de todo el numero en rgb
	var colorRgb = "rgb(" + redDec +"," + greenDec + "," + blueDec+")";



	if (colorHex === colors[0]){
		return colorRgb + ", " + colors[colorHex1]
	}else{
		return colorRgb + ", " + colors[colorHex2]

	}
	
}

getRGB('#FFFFFF');
