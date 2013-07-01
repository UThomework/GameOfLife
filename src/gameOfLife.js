	var GameOfLife = function (size) {
	var matrix = [];
	var nextMatrix = [];

	this.fillMatrix = function(){

		for (var i = 0; i < size; i++) {
			var auxiliar = [];
			for (var j = 0; j < size; j++) {
				auxiliar.push(false);
			};
			matrix.push(auxiliar);
		};
		for (var i = 0; i < size; i++) {
			var auxiliar = [];
			for (var j = 0; j < size; j++) {
				auxiliar.push(false);
			};
			nextMatrix.push(auxiliar);
		};
		
	}
	this.getMatrix = function(){

		return matrix;
	}
	this.getNextMatrix = function(){

		return nextMatrix;
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
	this.nextIteration = function(){
		//matrix = nextMatrix;
		for (var i = 1; i < size-1; i++) {
			for (var j = 1; j < size-1; j++) {
				var count = this.countNeighbors(i,j);
				if(count == 3 || (count == 2 && matrix[i][j]))
					nextMatrix[i][j] = true;
				if(count > 3 || count < 2)
					nextMatrix[i][j] = false;
			};	
		};
		return nextMatrix;
	}
	this.countNeighbors = function(x,y){
		var result = 0;
		for (var i = 0; i < 9; i++) {
			var posx = parseInt(i/3) +(x-1);
			var posy = (i - ((parseInt(i/3))*3))+(y-1);;
			if(posx==x && posy ==y)
				continue;
			if(matrix[posx][posy])
				result++;
		};
		return result;
	}
}