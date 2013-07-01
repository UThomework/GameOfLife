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
	this.setStatusCell = function(x, y){
		if(x >= size   || y >= size ||
		   x == 0      || y == 0    ||
		   x == size-1 || y == size-1)
			return false;
		matrix[x][y] = !matrix[x][y];
		return true;
	}

	this.giveInitialPosition = function(matrixA){

		for (var i = 0; i < matrixA.length; i++) {
			var posX = matrixA[i][0];
			var posY = matrixA[i][1];
			this.setStatusCell(posX,posY);
		};

	}
}