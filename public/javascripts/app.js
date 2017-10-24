$(document).ready(function(){
	
	$("#temp").text();
	/*$("#Servicio1").text();
	$("#Servicio2").text();*/

	var $sisPluvial = $("#sisPluvial");  //de la etiqueta del html
	var $sisPotable = $("#sisPotable");  //de la etiqueta del html
	var $serv1 = $("#Servicio1");
	var $serv2 = $("#Servicio2");

	var $potable;
	var $Lluvia;

	var socket = io();   	//inicia librreria, objeto socket.io
	
	socket.on('datos', function(dato){   //son todos los datos que vienen en el json de arduino
		console.log(dato);				 //imprimimos la cadena (linea por linea)
		
		$("#temp").text(dato.Pluvial);
		/*$("#Servicio1").text(dato.Servicio1);
		$("#Servicio2").text(dato.Servicio2);*/

		sisPluvial = dato.sistemaPluvial;  //dato que viene desde arduino en el json 
		sisPotable = dato.sistemaPotable;
		serv1 = dato.Servicio1;
		serv2 = dato.Servicio2;

		potable = dato.Potable;
		Lluvia = dato.Lluvia;

		

		if (Lluvia == "Apagado"){    //verificamos si el estado es apagado 
			$sisPluvial.removeClass('btn-success').addClass('btn-danger');
			$sisPluvial.attr('status', sisPluvial).find('span').text('Apagado');

		
		}else{						//de lo contrario esta encendido
			$sisPluvial.removeClass('btn-danger').addClass('btn-success');
			$sisPluvial.attr('status', sisPluvial).find('span').text('Encendido');
		}

		if (potable == "Apagado"){    //verificamos si el estado es apagado 
			$sisPotable.removeClass('btn-success').addClass('btn-danger');
			$sisPotable.attr('status', sisPotable).find('span').text('Apagado');
		
		}else{						//de lo contrario esta encendido
			$sisPotable.removeClass('btn-danger').addClass('btn-success');
			$sisPotable.attr('status', sisPotable).find('span').text('Encendido');
		}



		if (serv1 == "Apagado"){    //verificamos si el estado es apagado 
			$serv1.removeClass('btn-success').addClass('btn-danger');
			$serv1.attr('status', serv1).find('span').text('Apagado');
		}else{						//de lo contrario esta encendido
			$serv1.removeClass('btn-danger').addClass('btn-success');
			$serv1.attr('status', serv1).find('span').text('Encendido');
		}


		if (serv2 == "Apagado"){    //verificamos si el estado es apagado 
			$serv2.removeClass('btn-success').addClass('btn-danger');
			$serv2.attr('status', serv2).find('span').text('Apagado');
		}else{						//de lo contrario esta encendido
			$serv2.removeClass('btn-danger').addClass('btn-success');
			$serv2.attr('status', serv2).find('span').text('Encendido');
		}


	});

	$sisPotable.click(function(){
		status = (sisPotable == "Ev2_off")?"Ev2_on":"Ev2_off";
		socket.emit('potable', status);
		console.log(status);
	});

	$sisPluvial.click(function(){
		status = (sisPluvial == "Ev1_off")?"Ev1_on":"Ev1_off";
		socket.emit('pluvial', status);
		console.log(status);
	});


/*	$serv1.click(function(){
		status = (serv1 == "Ev3_off")?"Ev3_on":"Ev3_off";
		socket.emit('serv1', status);
		console.log(status);
	});

	$serv2.click(function(){
		status = (serv2 == "Ev4_off")?"Ev4_on":"Ev4_off";
		socket.emit('serv2', status);
		console.log(status);
	});
*/
});