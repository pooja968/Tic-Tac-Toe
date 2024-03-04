let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count =0;
let turnO = true; //playerX , 

// now storing winning pattern in the array of arrays and winning pattern is :(0,1,2),(3,4,5).(6,7,8),(0,3,6),(1,4,7),(2,5,8),(0,4,8),(2,4,6) 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
 
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
// const newGame = () =>{
//     turnO = true;
//     enableBoxes();
//     if(count ==9){
//         showDraw();
//     }
//     msgContainer.classList.add("hide");
// };

// const green = () =>{
//     document.querySelector(".box").innerText.style.color = "green";
// };

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{

        // console.log("box was clicked");
       
        if(turnO){ //playerO
           box.innerHTML = "<span class='classO'> O </span>";
            turnO = false;
        }else{ //playerX
            box.innerHTML= "<span class ='classX'>X</span";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;  //it means we are disabling the box.
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false; //it means we are enabling the box.
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, winner is ${winner}`; 
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val==pos3Val){
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
                // return;    //only when we write return then it will give output when player win the match it doesnot start again and return another winner ,it directly return who is first winner.
            }
        }
    }
    if(count ==9){
        showDraw();
    }
};
const showDraw = () =>{
    msg.innerText = "Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
