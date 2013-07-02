	var GameOfLife = function (size) {
	var nextGenerations = [];
	var gen = 0;

	this.fillMatrix = function(){
		var matrix = this.newMatrix();
		nextGenerations.push(matrix);
	}
	this.newMatrix = function(){
		var matrix = [];
		for (var i = 0; i < size; i++) {
			var aux1 = [];
			for (var j = 0; j < size; j++) {
				aux1.push(false);
			};
			matrix.push(aux1);
		};
		return matrix;
	}
	this.getMatrix = function(){

		return nextGenerations[gen];
	}
	this.getNextMatrix = function(){

		if(gen==0)
			return null;
		else
			return nextGenerations[gen+1];
	}
	this.getGenerations = function(){

		return nextGenerations;
	}
	this.setStatusCell = function(x, y){
		if(x >= size -1  || y >= size -1 ||
		   x == 0      || y == 0 )
			return false;
		nextGenerations[gen][x][y] = !nextGenerations[gen][x][y]
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
		var nextMatrix = this.newMatrix(); 
		for (var i = 1; i < size-1; i++) {
			for (var j = 1; j < size-1; j++) {
				var count = this.countNeighbors(i,j);
				if(count == 3 || (count == 2 && nextGenerations[gen][i][j]))
					nextMatrix[i][j] = true;
				if(count > 3 || count < 2)
					nextMatrix[i][j] = false;
			};	
		};
		gen++;
		nextGenerations.push(nextMatrix);
		return nextMatrix;
	}
	this.countNeighbors = function(x,y){
		var result = 0;
		var xVals = [x - 1, x - 1, x - 1, x    , x    , x + 1, x + 1, x + 1];
	    var yVals = [y - 1, y    , y + 1, y - 1, y + 1, y - 1, y    , y + 1];

		for (var i = 0; i < 8; i++) {
			var posx = xVals[i];
			var posy = yVals[i]
			if(nextGenerations[gen][posx][posy])
				result++;
		};
		return result;
	}
}