var colors =[];
var numSquares = 6;
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //reset
  reset();
// add button event listener
  setupModeButtons();
// add square event listener
  setupSquares();

}

function setupModeButtons(){
  for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
      console.log(numSquares);
      reset();
    });
  }
}

function setupSquares(){
  for(var i=0;i<squares.length;i++){
    // add initial colors to squares
    squares[i].style.background = colors[i];
    // add click listener to the squares
    squares[i].addEventListener("click",function(){
      // grab color of clicked square
      var clickedColor = this.style.background;
      // compare color to pickedColor
      if(clickedColor === pickedColor){
        message.textContent = "Correct!"
        changeColor(clickedColor);
        h1.style.background = pickedColor;
        resetBtn.textContent = "PLAY AGAIN?"
      }else{
        this.style.background = "#232323";
        message.textContent = "Try Again!";
        resetBtn.textContent = "NEW COLORS";
      }
    });
  }
}

function reset(){
  message.textContent = "";
  resetBtn.classList.add("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length;i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  resetBtn.textContent = "NEW COLORS";
}

resetBtn.addEventListener("click",function(){
  reset();
})

function changeColor(color){
  //loop through all squares
  for(var i=0;i<squares.length;i++){
  //change color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  //pick a random number
  var random= Math.floor(Math.random()*colors.length) // 0 to color.length
  //add random to color array and return;
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for(var i=0;i<num;i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  // pick a red from 0 to 255
  var r = Math.floor(Math.random()*256);
  // pick a green from 0 to 255
  var g = Math.floor(Math.random()*256);
  // pick a blue from 0 to 255;
  var b = Math.floor(Math.random()*256);
  // rgb(r,g,b)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
