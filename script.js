$(function()
{
	//Para generar la ecuación de la respuesta a buscar...
	var respuesta = 0;
	var numCifras = 2;
	var contCorrectas = 0;
	var tiempo = 0;
	var tiempoMuestra = 0;
	//Para generar la ecuación en función del resultado dado...
	var ecuacionAdivina = function()
	{
		var operacion = "";
		if(numCifras >= 2)
		{
			var signoOpera = ["+", "-"];
			do
			{
				operacion = "";
				for(var i = 1; i <= numCifras; i++)
				{
					operacion += Math.floor(Math.random() * 3) + 1;
					if(i < numCifras)
					{
						operacion += " " + signoOpera[Math.floor(Math.random() * 2)] + " ";
					}
				}
				var valor = eval(operacion);
				if(valor === respuesta)
				{
					break;
				}
			}while(1);
		}
		return operacion;
	};

	//Para iniciar un nuevo Juego...
	var nuevoJuego = (function nuevoJuego()
	{
		if(contCorrectas % 2 === 0 && contCorrectas !== 0)
		{
			numCifras++;
		}
		respuesta = Math.floor(Math.random() * 3) + 1;
		$("#ecuacion").html(ecuacionAdivina() + " = ?");
		return  nuevoJuego;
	})();
	for(var i = 1; i <= 3; i++)
		{
			$("#respuesta_" + i)
			.click(function(event) {
				var ind = Number(this.id.split("_")[1]);
				console.log(ind);
			});
var validarRespuesta = function (ind)
	{
		if (respuesta == ind)

	}
// validar tiempo
tiempoMuestra = setTimeout(function()
		{
			console.log(" 0 ");
			clearTimeout(tiempoMuestra);
			mostrando = false;	
			$(".imgAdivina").hide();
			//Ocultar los elementos...
		}, tiempo * 1000);

});
