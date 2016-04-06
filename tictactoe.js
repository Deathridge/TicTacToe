var playerChar;
var compChar;
var board = new Board();

window.onload = function () {
var width ;

var selection = document.getElementById("selection");
var grid = document.getElementById("grid");
var squareClick

playerTurn();


}

function playerTurn(){	
	var noughts = document.getElementById("noughts");	
	
	var noughtListen = function(){		
		playerChar = "noughts";
		compChar = playerChar == "noughts" ? "crosses": "noughts";	
		selection.style.display = "none";
		grid.style.display = "block";	

		var squares = document.getElementsByClassName("square");	
		width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if(width > 768){		
			for(var i =0;i < squares.length;i++){
				squares[i].style['font-size'] = ((32.6*width /100) /32) + 'em';
			}
		}else {
			for(var i =0;i < squares.length;i++){
				squares[i].style['font-size'] = ((32*width /100) /20) + 'em';
			}
		}
		MinMax.prototype.computerTurn(board, compChar, callback);		
	}
	
	noughts.onclick = noughtListen;

	var crosses = document.getElementById("crosses");
	
	var crossListen = function(){
		
		playerChar = "crosses";
		compChar = playerChar == "noughts" ? "crosses": "noughts";	
		selection.style.display = "none";
		grid.style.display = "block";
		var squares = document.getElementsByClassName("square");	
		width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if(width > 768){		
			for(var i =0;i < squares.length;i++){
				squares[i].style['font-size'] = ((32.6*width /100) /32) + 'em';
			}
		}else {
			for(var i =0;i < squares.length;i++){
				squares[i].style['font-size'] = ((32*width /100) /20) + 'em';
			}
		}		
		clickSquares();		
	}
	
	crosses.onclick = crossListen;
	
}


function clickSquares() {	
	var squares = document.getElementsByClassName("square");
	var squareID;
	
	for(var i=0; i<squares.length;i++){
		squareClick = function(){			
		console.log(this.id);
		squareID = undefined;
		squareID = this.id;	
		
			if(board.board[squareIdToNum(squareID)] == ""){			
				board.board[squareIdToNum(squareID)] = playerChar;						
				drawSquare(squareID, playerChar);				
				MinMax.prototype.computerTurn(board, compChar, callback);												
			}					
			if(board.isWin()){
					console.log(board.isWin() + " Wins!");
					emptyGrid();					
					hideGrid();									
					playerTurn();
			}else if(board.isFull()){
					console.log("Draw!");
					emptyGrid();
					hideGrid();	
					playerTurn();					
			}
						
		}
		
		squares[i].onclick = squareClick;
		
	}

}
function drawSquare(squareID, currentPlayer){
	var currentSquare = document.getElementById(squareID);
	if(currentPlayer=="noughts"){
		currentSquare.innerHTML = "O";
	}else if(currentPlayer =="crosses"){
		currentSquare.innerHTML = "X";
	} 
	
}

function squareID(idNum){
	return board.boardId[idNum];
}

function squareIdToNum(idString){
	return board.boardId.indexOf(idString);
}

function hideGrid(){
	grid.style.display = "none";
	selection.style.display = "block";
}

function emptyGrid(){
	board = new Board();
	var squares = document.getElementsByClassName("square");
	for(var i=0; i<squares.length;i++){
		
		squares[i].innerHTML = "";
		

	}

}

var callback = 
	function (best){		
		if(board.board[best] == "" && !board.isWin() && !board.isFull()){		
			board.board[best] = compChar;
			drawSquare(squareID(best), compChar);			
			clickSquares();
			return true;
		}

		if(board.isWin()){
			console.log(board.isWin() + " Wins!");
			emptyGrid();
			hideGrid();
			playerTurn();
			

		}else if(board.isFull()){
			console.log("Draw!");
			emptyGrid();
			hideGrid();	
			playerTurn();
			
		}
		
	};