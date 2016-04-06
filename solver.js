var MinMax = function(){
	this.bestMove = 0;
	this.MAX_DEPTH = 6;
}


MinMax.prototype = {


	computerTurn: function(currentBoard, currentPlayer, callback){
		this.bestMove = 0;
	    var initialScore = this.computerTurnRecursive(currentBoard, currentPlayer, 0);
	    
	    callback(this.bestMove);
		
	},
	
	computerTurnRecursive: function(currentBoard, currentPlayer, currentDepth){

		if(currentDepth>this.MAX_DEPTH){
			return 0;
		}

		if(currentBoard.isWin() == playerChar){
			return -1;
		}else if(currentBoard.isWin() == compChar){
			return 1;
		}
		if(currentBoard.isFull()){
	      return 0;
	    }
		var initialScore = -1;
		var scoreList = [];
		var moveList = currentBoard.getMoves();
		
		for(var i=0;i<moveList.length;i++){		
			
			var newBoard = new Board(currentBoard);
			newBoard.board[moveList[i]] = currentPlayer;
			newBoard.moves.push(moveList[i]);	
				
			var nextScore = this.computerTurnRecursive(newBoard, (currentPlayer == "noughts") ? "crosses":"noughts" , currentDepth + 1);					
			
			if(initialScore < nextScore){
				initialScore = nextScore;
			}	

			if(currentDepth == 0){
				scoreList.push(nextScore);
			}
		}


		if(currentDepth == 0){
	      	var posMoves = [];
	      	for(var n=0; n<scoreList.length; n++){
	       		if(scoreList[n] == initialScore){
	         		posMoves.push(moveList[n]);
	       		}
	      	}
	      	var randomMove = this.rand(posMoves);	

	      	this.bestMove = randomMove; //in future pick random..	

	    }
	    return initialScore;
	},

	rand: function(list){
	    var item = list[Math.floor(Math.random() * list.length)];
	    return item;
	}
}