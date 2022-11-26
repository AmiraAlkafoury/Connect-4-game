var player=1;
var grid = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]; // rows col

//col 1
let cnt1=4;
function colOne(){

  if (player == 1 && cnt1>=0)
  {
        document.getElementById(cnt1).style.backgroundColor = "yellow";
        grid[cnt1][0]=player;
        cnt1--;
        player=2;
  }

   else if(player == 2&& cnt1>=0)
   {
        document.getElementById(cnt1).style.backgroundColor = "red";
        grid[cnt1][0]=player;
        cnt1--;
        player=1;
  } 
  
 
}

//---------------------------------------------------

//col 2
let cnt2=9;
function colTwo(){
   
  if (player == 1 && cnt2>=5){

        document.getElementById(cnt2).style.backgroundColor = "yellow";
        grid[cnt2-5][1]=player;
        cnt2--;
        player=2;
        
    }
   else if(player == 2&& cnt2>=5){
        document.getElementById(cnt2).style.backgroundColor = "red";
        grid[cnt2-5][1]=player;
        cnt2--;
        player=1;
        
  } 
 
}
//---------------------------------------------------

//col 3 
let cnt3=14;
function colThree(){
   
  if (player == 1 && cnt3>=10)
  {
        document.getElementById(cnt3).style.backgroundColor = "yellow";
        grid[cnt3-10][2]=player;
        cnt3--;
        player=2;
        
    }
   else if(player == 2&& cnt3>=10){
        document.getElementById(cnt3).style.backgroundColor = "red";
        grid[cnt3-10][2]=player;
        cnt3--;
        player=1;
        
  } 

}

//---------------------------------------------------

//col 4
let cnt4=19;
function colFour(){

  if (player == 1 && cnt4>=15)
  {
        document.getElementById(cnt4).style.backgroundColor = "yellow";
        grid[cnt4-15][3]=player;
        cnt4--;
        player=2;
        

  }
   else if(player == 2 && cnt4>=15){
        document.getElementById(cnt4).style.backgroundColor = "red";
        grid[cnt4-15][3]=player;
        cnt4--;
        player=1;
        
  }

}

//---------------------------------------------------

//col 5
let cnt5=24;
function colFive(){
  
  if (player == 1 && cnt5>=20)
  {
        document.getElementById(cnt5).style.backgroundColor = "yellow";
        grid[cnt5-20][4]=player;
        cnt5--;
        player=2;
        
    }
   else if(player == 2&& cnt5>=20){
        document.getElementById(cnt5).style.backgroundColor = "red";
        grid[cnt5-20][4]=player;
        cnt5--;
        player=1;
        
  }

}

//---------------------------------------------------

//reset
function resetGrid() {
    for(var i=0; i<25 ; i++)
    {
      document.getElementById(i).style.backgroundColor = "white";

    }
    document.getElementById("game").style.display = "none";
    grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ];
      cnt1=4; cnt2=9; cnt3=14; cnt4=19; cnt5=24;
}

//---------------------------------------------------

/*
(4, 3) (0, 0) (0, 1)
(3, 2) (1, 1) (1, 2)
(2, 1) (2, 2) (2, 3)
(1, 0) (3, 3) (3, 4)
       (4, 4)
*/

function gameWin_diagonal3(){
   
      for(var row=0; row<4; row++)
      {
        if(
            row == 0 &&
            grid[row+1][row] == 1 &&
            grid[row+2][row+1] == 1 &&
            grid[row+3][row+2] == 1 &&
            grid[row+4][row+3] == 1   
          ) return 1;
           else if(
            row == 0 &&
            grid[row+1][row] == 2 &&
            grid[row+2][row+1] == 2 &&
            grid[row+3][row+2] == 2 &&
            grid[row+4][row+3] == 2
           ) return 2;
           
      }
    
}

//---------------------------------------------------


function gameWin_diagonal2(){
   
      for(var row=0; row<5; row++)
      {
        if(
            row == 0 &&
            grid[row][row+1] == 1 &&
            grid[row+1][row+2] == 1 &&
            grid[row+2][row+3] == 1 &&
            grid[row+3][row+4] == 1   
          ) return 1;
           else if(
            row == 0 &&
            grid[row][row+1] == 2 &&
            grid[row+1][row+2] == 2 &&
            grid[row+2][row+3] == 2 &&
            grid[row+3][row+4] == 2
           ) return 2;
           
      }
    
}

//---------------------------------------------------

function gameWin_diagonal1(){
   
      for(var row=0; row<5; row++)
      {
        if(
            row < 2 &&
            grid[row][row] == 1 &&
            grid[row+1][row+1] == 1 &&
            grid[row+2][row+2] == 1 &&
            grid[row+3][row+3] == 1   
          ) return 1;
           else if(
            row < 2 &&
            grid[row][row] == 2 &&
            grid[row+1][row+1] == 2 &&
            grid[row+2][row+2] == 2 &&
            grid[row+3][row+3] == 2
           ) return 2;
           
      }
}

//---------------------------------------------------

/*
(3, 0) (4, 0) (4, 1)
(2, 1) (3, 1) (3, 2)
(1, 2) (2, 2) (2, 3)
(0, 3) (1, 3) (1, 4)
       (0, 4)
*/

function gameWin_diagonal6(){
    if((
        grid[4][0] == 1 &&
        grid[3][1] == 1 &&
        grid[2][2] == 1 &&
        grid[1][3] == 1   
      ) ||
      (
        grid[0][4] == 1 &&
        grid[3][1] == 1 &&
        grid[2][2] == 1 &&
        grid[1][3] == 1  
      )
    ) return 1;
 
    if((
        grid[4][0] == 2 &&
        grid[3][1] == 2 &&
        grid[2][2] == 2 &&
        grid[1][3] == 2   
      ) ||
      (
        grid[0][4] == 2 &&
        grid[3][1] == 2 &&
        grid[2][2] == 2 &&
        grid[1][3] == 2  
      )
    )return 2;
 
}

//---------------------------------------------------

function gameWin_diagonal4(){
   
        if(
            grid[3][0] == 1 &&
            grid[2][1] == 1 &&
            grid[1][2] == 1 &&
            grid[0][3] == 1   
          ) return 1;
          if(
            grid[3][0] == 2 &&
            grid[2][1] == 2 &&
            grid[1][2] == 2 &&
            grid[0][3] == 2   
          ) return 2;        
   
}
//---------------------------------------------------


function gameWin_diagonal5(){
        if(
            grid[4][1] == 1 &&
            grid[3][2] == 1 &&
            grid[2][3] == 1 &&
            grid[1][4] == 1   
          ) return 1;
        if(
            grid[4][1] == 2 &&
            grid[3][2] == 2 &&
            grid[2][3] == 2 &&
            grid[1][4] == 2   
          ) return 2;

}
//---------------------------------------------------

function gameWin_horizontal(){
   
    for(var col=0; col<5; col++)
    {
      for(var row=0; row<5; row++)
      {
        if(
            row < 2 &&
            grid[col][row] === 1 &&
            grid[col][row + 1] === 1 &&
            grid[col][row + 2] === 1 &&
            grid[col][row + 3] === 1
          ) return 1;
           else if(
            row < 2 &&
            grid[col][row] === 2 &&
            grid[col][row + 1] === 2 &&
            grid[col][row + 2] === 2 &&
            grid[col][row + 3] === 2
           )return 2;
           
      }
    }
}

//---------------------------------------------------


function gameWin_vertical(){

  for(var col=0; col<5; col++)
  {
    for(var row=0; row<5; row++)
    {
      if(
          row < 2 &&
          grid[row][col] === 1 &&
          grid[row + 1][col] === 1 &&
          grid[row + 2][col] === 1 &&
          grid[row + 3][col] === 1
        ) return 1;
         else if(
          row < 2 &&
          grid[row][col] === 2 &&
          grid[row + 1][col] === 2 &&
          grid[row + 2][col] === 2 &&
          grid[row + 3][col] === 2
         ) return 2;
         
    }
  }

}

//---------------------------------------------------
function draw(){
    for(let col=0; col<5; col++){
        for(let row=0; row<5; row++){

            if(grid[col][row] == 0){return 0;}
        }
    }
    return 1;
}
//---------------------------------------------------
function GameWin(){

    var a = gameWin_diagonal6();
    var b =  gameWin_diagonal5();
    var c = gameWin_diagonal4();
    var d =gameWin_diagonal3();
    var x = gameWin_diagonal2();
    var y = gameWin_diagonal1();
    var z = gameWin_horizontal();
    var w = gameWin_vertical();
    var f = draw();
    if(a == 1 || b == 1 || c == 1 || d == 1 || x == 1 || y == 1 || z == 1 || w == 1)
    {
            window.alert('The Yellow player won!');
            document.getElementById("game").style.display = "block";
            document.getElementById("game").style.visibility = "visible";
    }
    else if(a == 2 || b == 2 || c == 2 || d == 2 || x == 2 || y == 2 || z == 2 || w == 2)
        {
            window.alert('The Red player won!');
            document.getElementById("game").style.display = "block";
            document.getElementById("game").style.visibility = "visible";
        }
    else if(f == 1)
    {
        window.alert('Draw!');
        document.getElementById("game").style.display = "block";
        document.getElementById("game").style.visibility = "visible";
    }
}


