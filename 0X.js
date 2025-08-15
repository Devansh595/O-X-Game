const box1 = document.getElementById('a');
const box2 = document.getElementById('b');
const box3 = document.getElementById('c');
const box4 = document.getElementById('d');
const box5 = document.getElementById('e');
const box6 = document.getElementById('f');
const box7 = document.getElementById('g');
const box8 = document.getElementById('h');
const box9 = document.getElementById('i');
const result = document.getElementById('result')

var user;
var gameOver = false;
  
function reset(){
   box1.textContent = ""
   box2.textContent = ""
   box3.textContent = ""
   box4.textContent = ""
   box5.textContent = ""
   box6.textContent = ""
   box7.textContent = ""
   box8.textContent = ""
   box9.textContent = ""

   box1.style.color = "#DEF9C4"
   box2.style.color = "#DEF9C4"
   box3.style.color = "#DEF9C4"
   box4.style.color = "#DEF9C4"
   box5.style.color = "#DEF9C4"
   box6.style.color = "#DEF9C4"
   box7.style.color = "#DEF9C4"
   box8.style.color = "#DEF9C4"
   box9.style.color = "#DEF9C4"
   user = true
   gameOver = false
   result.textContent = ""

}

function isAllBoxMarked(){
    if(
        box1.textContent == "" || 
        box2.textContent == "" ||  
        box3.textContent == "" || 
        box4.textContent == "" || 
        box5.textContent == "" ||
        box6.textContent == "" ||  
        box7.textContent == "" || 
        box8.textContent == "" ||
        box9.textContent == "" 


    ){
        return false
    }
    else {
        return true
    }
}




function putValue(box) {

    if(gameOver)  return;
    if (box.textContent === "") {  // Only put value if the box is empty
        user ? (box.textContent = "x", user = false) : (box.textContent = "o", user = true);
        if (checkWin()) {
            user ? result.textContent = "o won the game" : result.textContent = "x won the game"
            gameOver = true;
        }
        if (isAllBoxMarked() && !checkWin()) {
            result.textContent = "Draw !"
            gameOver = true;
        }
    }
}

// Event listeners for the boxes
box1.addEventListener('click', () => putValue(box1));
box2.addEventListener('click', () => putValue(box2));
box3.addEventListener('click', () => putValue(box3));
box4.addEventListener('click', () => putValue(box4));
box5.addEventListener('click', () => putValue(box5));
box6.addEventListener('click', () => putValue(box6));
box7.addEventListener('click', () => putValue(box7));
box8.addEventListener('click', () => putValue(box8));
box9.addEventListener('click', () => putValue(box9));

function putvalue8(){
    user == true ?  ( box8.textContent = "x", user = false)  : ( box8.textContent = "o", user = true)
    if(checkWin()){
        user? console.log("o win the game"): console.log("x win the game")
    }
    if(isAllBoxMarked() && !checkWin() ) {
        console.log("game tied")
    }
}


function putvalue9(){
    user == true ?  ( box9.textContent = "x", user = false)  : ( box9.textContent = "o", user = true)
    if(checkWin()){
        user? console.log("o win the game"): console.log("x win the game")
    }
    if(isAllBoxMarked() && !checkWin() ) {
        console.log("game tied")
    }
}



function checkWin(){
    if((box1.textContent == "o" && box2.textContent == "o" && box3.textContent =="o") ||  (box1.textContent == "x"  && box2.textContent == "x" && box3.textContent == "x") ){
        box1.style.color = "green"
        box2.style.color = "green"
        box3.style.color = "green"      
        return true
    }
    else if((box1.textContent == "o" && box4.textContent == "o" && box7.textContent =="o") ||  (box1.textContent == "x" && box4.textContent == "x" && box7.textContent == "x") ){
        box1.style.color = "green"
        box7.style.color = "green"
        box4.style.color = "green"  
        return true
    }
    
    else if((box1.textContent == "o" && box5.textContent == "o" && box9.textContent =="o") ||  (box1.textContent == "x" && box5.textContent == "x" && box9.textContent == "x") ){
        box1.style.color = "green"
        box5.style.color = "green"
        box9.style.color = "green" 
         
        return true
    }
    else if((box5.textContent == "o" && box2.textContent == "o" && box8.textContent =="o") ||  (box5.textContent == "x" && box2.textContent == "x" && box8.textContent == "x") ){
        box5.style.color = "green"
        box2.style.color = "green"
        box8.style.color = "green" 
        return true
        
    }
    else if((box4.textContent == "o" && box5.textContent == "o" && box6.textContent =="o") ||  (box4.textContent == "x" && box5.textContent == "x" && box6.textContent == "x") ){
        box4.style.color = "green"
        box5.style.color = "green"
        box6.style.color = "green" 
        return true
        
    }
    else if((box3.textContent == "o" && box5.textContent == "o" && box7.textContent =="o") ||  (box3.textContent == "x" && box5.textContent == "x" && box7.textContent == "x") ){
        box3.style.color = "green"
        box5.style.color = "green"
        box7.style.color = "green" 
         
        return true
    }
    else if((box3.textContent == "o" && box6.textContent == "o" && box9.textContent=="o") ||  (box3.textContent == "x" && box6.textContent == "x" && box9.textContent == "x") ){
        box3.style.color = "green"
        box6.style.color = "green"
        box9.style.color = "green" 
         
        return true
    }
    else if((box7.textContent == "o" && box8.textContent == "o" && box9.textContent=="o") ||  (box7.textContent == "x" && box8.textContent == "x" && box9.textContent == "x") ){
        box7.style.color = "green"
        box8.style.color = "green"
        box9.style.color = "green" 
        return true
        
    }
    else{
        return false
    }
    
}
