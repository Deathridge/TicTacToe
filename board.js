class Board {
	constructor(prevState){
		this.board = ["","","","","","","","",""];
		this.moves = [];
		
		this.boardId = ["topleft", "topmiddle","topright","middleleft","middlemiddle", "middleright","bottomleft","bottommiddle", "bottomright"];
		if(prevState){
			this.board[0] = prevState.board[0]?prevState.board[0]:"";
			this.board[1] = prevState.board[1]?prevState.board[1]:"";
			this.board[2] = prevState.board[2]?prevState.board[2]:"";
			this.board[3] = prevState.board[3]?prevState.board[3]:"";
			this.board[4] = prevState.board[4]?prevState.board[4]:"";
			this.board[5] = prevState.board[5]?prevState.board[5]:"";
			this.board[6] = prevState.board[6]?prevState.board[6]:"";
			this.board[7] = prevState.board[7]?prevState.board[7]:"";
			this.board[8] = prevState.board[8]?prevState.board[8]:"";		
		}
	}	

	isWin(){
		if((this.board[0]==this.board[1] && this.board[1]==this.board[2]) && (this.board[0] !="") ){
			return this.board[0];
		}else if ((this.board[0]==this.board[4] && this.board[4]==this.board[8]) && (this.board[0] !="")){
			return this.board[0];
		}else if ((this.board[0]==this.board[3] && this.board[3]==this.board[6]) && (this.board[0] !="")){
			return this.board[0];
		}else if ((this.board[0]==this.board[3] && this.board[3]==this.board[6]) && (this.board[0] !="")){
			return this.board[0];
		}else if ((this.board[0]==this.board[3] && this.board[3]==this.board[6]) && (this.board[0] !="")){
			return this.board[0];
		}else if ((this.board[2]==this.board[5]&& this.board[5]==this.board[8]) && (this.board[2] !="")){
			return this.board[2];
		}else if ((this.board[6]==this.board[7]&& this.board[7]==this.board[8]) && (this.board[6] !="")){
			return this.board[6];
		}else if ((this.board[6]==this.board[7]&& this.board[7]==this.board[8]) && (this.board[6] !="")){
			return this.board[6];
		}else if ((this.board[2]==this.board[4] && this.board[4]==this.board[6]) && (this.board[2] !="")){
			return this.board[2];
		}else if ((this.board[1]==this.board[4]&& this.board[4]==this.board[7]) && (this.board[1] !="")){
			return this.board[1];
		}else if ((this.board[3]==this.board[4]&& this.board[4]==this.board[5]) && (this.board[3] !="")){
			return this.board[3];
		}else if((this.board[6]==this.board[7]&& this.board[7]==this.board[8]) && (this.board[6] !="")){
			return this.board[6];
		}else {
			return false;
		}
	}

	isFull(){
	    for(var i=0; i<9; i++){
	      if(this.board[i] == ""){
	        return false;
	      }
	    }
	    return true;
  	}

  	getMoves(){
  		var moveList = [];
  		for(var i=0;i<this.board.length;i++){
  			if(this.board[i] == ""){
  				moveList.push(i);
  			}
  		}
  		return moveList;
  	}

};