// Escribe una función que toma un carácter (es decir, una cadena de longitud 1) y 
// devuelve true si es una vocal, false en caso contrario.


// Escribe una función que toma un carácter (es decir, una cadena de longitud 1) y 
// devuelve true si es una vocal, false en caso contrario.


function caracter(palabra){
	var vocales = ["a", "e", "i", "o", "u"];
	for (var i =0; vocales.length; i++) {
		if (palabra[i] == vocales[i]) {
			console.log(i + " FOUND!!!")
		}else{console.log("OKI")}
	}
}



caracter("carles");





function isVowel(c) {
	for (var i = 0; i < c.length; i++) {
		if (['a', 'e', 'i', 'o', 'u'].indexOf(c[i].toLowerCase()) !== -1) {
			console.log( "Found vowel! " + c[i])
		}
		else{
			console.log( "nothing at position: " + i)
		}
	}
}

caracter("carles"); 


// funcion diferente para buscar si dentro de una palabra existe una vocal o no
function vocal(char){

var vocals = "aeiou";
var acces_Vocals = vocals.split("");
console.log(acces_Vocals);

if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){

	return true;
}

return false;

}
}


// translate()

// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

/* Version 1 */

function translate( originalText ) {

  var numCharacters = originalText.length;
  var currentChar;
  var translatedText = "";

  function isVowel( char ) {
    return /[aeiou]/.test( char.toLowerCase() )
  }

  function isSpecialChars( char ) {
    return /[ ,*]/.test( char )
  }

  for ( var i=0; i<numCharacters; i++) {
    currentChar = originalText[i];
    translatedText += currentChar;

    if ( !isVowel(currentChar) && !isSpecialChars(currentChar) ) {
      translatedText += "o" + currentChar; 
    }
    
  }
  return translatedText;
}

/* Version 2 */

function translate( originalText ) {

  var numCharacters = originalText.length;
  var currentChar;
  var translatedText = "";

  function isConsonant( char ) {
    return /[b-df-hj-np-tv-zñ]/i.test( char )
  }

  for ( var i=0; i<numCharacters; i++) {
    currentChar = originalText[i];
    translatedText += currentChar;

    if ( isConsonant(currentChar) ) {
      translatedText += "o" + currentChar; 
    }
    
  }
  return translatedText;
}

/* Version 3 */

function translateToRovarspraket( text ) {
  return text.replace( /[b-df-hj-np-tv-zñ]/ig, "$&o$&" )
}
