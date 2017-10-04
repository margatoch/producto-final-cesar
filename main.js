function principal(option){ //esta funcion se hace para que repita y pregunte al usuario que opcion va a querer y que tiene que elegir una opcion
	do{
		var answer=prompt("Indica el numero de lo que deseas hacer: 1) cipher - 2) decipher");
	    if(answer !=""){
	    	if(answer =="1"){
	    		cipher();
	    	}else if (answer =="2"){
	    		decipher();
	    	}else{ 
	    		alert("Ingresa una opción");
	    	}
	    }
    }while (answer =="" || (answer != "1" && answer !="2"));
}

function cipher(phrase){ //creando la funcion para cifrar //lo que ingrese el usuario va a ser la variable que voy a usar para cigrar
		var phrase=prompt("Ingresa una frase");
		
   		alert("Está cifrado"); //con esto, al ingresar el usuario una opcion me va a decir si esta cifrado.

}


function decipher(){ //creando la funcion para decifrar
		var phrase=prompt("Ingresa una frase que quieras decifrar");
		
	alert("Está decifrado");
}  
principal();
