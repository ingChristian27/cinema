(function (){
	var app = angular.module('cinema',[] );

	app.controller('peliculaController', function(){
		this.pelicula = {
			name : "titanic",
			imagen :"titanic",
			id : 001,
			genero : ['drama', 'acción'],
			Calificacion : 3,
			formato : [ '3d', 'subtitulado', 'estandar'],
			sinopsis : "Jack (DiCaprio), un joven artista, en una partida de cartas gana un pasaje para América, en el Titanic, el trasatlántico más grande y seguro jamás construido. A bordo, conoce a Rose (Kate Winslet), una joven de una buena familia venida a menos que va a contraer un matrimonio de conveniencia con Cal (Billy Zane), un millonario engreído a quien sólo interesa el prestigioso apellido de su prometida. Jack y Rose se enamoran, pero Cal y la madre de Rose ponen todo tipo de trabas a su relación. Inesperadamente, un inmenso iceberg pone en peligro la vida de los pasajeros.",
			lenguajes : ['estañol', 'ingles']
		};
	});
})();


				