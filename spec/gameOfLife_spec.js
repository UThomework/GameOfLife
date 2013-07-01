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

});