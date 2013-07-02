describe("Game Of Life Kata", function() {
	var game;
	var result;
	
	beforeEach(function() {
	  game = new GameOfLife(7);
	  game.fillMatrix();
	  result = game.getMatrix();	
	});
	
	it("has to be a two dimensional grid", function() {
      expect(result[1][0]).toBe(false);
	  expect(result[6][0]).toBe(false);
	  expect(result[0][6]).toBe(false);
	  expect(result[6][6]).toBe(false);
	});
	
	it("can set the state of one cell", function() {
	  var aux = result[4][3];
	  var cell = game.setStatusCell(4,3);
	  expect(result[4][3]).toBe(!aux);

	});
	it("return false when a number is incorrect", function() {
	  var aux = game.setStatusCell(8,8);
	  expect(aux).toBe(false);
	});
	it("can recive a Initial position of entire matrix", function() {
		var init = [[1, 2], [3, 4], [2, 4]];
		game.giveInitialPosition(init);
		expect(result[1][2]).toBe(true);
		expect(result[1][2]).toBe(true);
		expect(result[3][4]).toBe(true);
		expect(result[2][4]).toBe(true);

		expect(result[1][1]).not.toBe(true);

	});
	it("can't permit life on the edges", function() {
		var init = [[0, 2], [6, 2],[0, 0],[3, 4], [2, 4]];
		game.giveInitialPosition(init);
		expect(result[0][2]).toBe(false);
		expect(result[6][2]).toBe(false);
		expect(result[0][0]).toBe(false);
		expect(result[6][6]).toBe(false);
	});
	it("calculate the next generation of the matrix", function() {
		var init = [[3, 3]];
		game.giveInitialPosition(init);
		expect(result[3][3]).toBe(true);
		var nextGeneration = game.nextIteration();
		expect(nextGeneration[3][3]).toBe(false);
	});
	it("calculate the next generation of the matrix", function() {
		var init = [[2, 1],[2,2],[2,3]];
		game.giveInitialPosition(init);
		var nextGeneration = game.nextIteration();
		expect(nextGeneration[1][2]).toBe(true);
		expect(nextGeneration[2][2]).toBe(true);
		expect(nextGeneration[3][2]).toBe(true);
		expect(nextGeneration[2][1]).toBe(false);
		expect(nextGeneration[2][3]).toBe(false);
		var nextGeneration2 = game.nextIteration();
		expect(nextGeneration2[1][2]).toBe(false);
		expect(nextGeneration2[2][2]).toBe(true);
		expect(nextGeneration2[3][2]).toBe(false);
		expect(nextGeneration2[2][1]).toBe(true);
		expect(nextGeneration2[2][3]).toBe(true);

	});


});