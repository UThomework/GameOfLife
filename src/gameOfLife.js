var GameOfLife = function (size) {
	var matrix = [];

	this.fillMatrix = function(){

		for (var i = 0; i < size; i++) {
			var auxiliar = [];
			for (var j = 0; j < size; j++) {
				auxiliar.push(false);
			};
			matrix.push(auxiliar);
		};
	}
	this.getMatrix = function(){

		return matrix;
	}

}