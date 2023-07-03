// Your solution goes here.
// Hints:
// -> Handle the onsubmit function using attribute or js event listener.
// -> Take the value of input, calculate the grade and update ui.
// -> Maximum number can be 100
// -> Clear the input field after value submission

let formSub = document.getElementById("iits-formSubmit");
let inp = document.getElementById("iits-inp");
let btn = document.getElementById("iits-btn");
let aCount = document.getElementById("iits-a_count");
let bpCount = document.getElementById("iits-bp_count");
let bCount = document.getElementById("iits-b_count");
let bmCount = document.getElementById("iits-bm_count");
let cCount = document.getElementById("iits-c_count");
let fCount = document.getElementById("iits-f_count");


formSub.addEventListener("submit", function(e){
    e.preventDefault();
    
    let inpp = parseInt(inp.value);
    
    
    if (inpp < 0){
        alert("Minimum number can be 0");
    }
    else if (inpp > 100){
        alert("Maximum number can be 100");
    }
    else if(inpp >=81 && inpp <=100){
        aCount.textContent = parseInt(aCount.textContent) + 1;
    }
    else if(inpp >=71 && inpp <=80){
        bpCount.textContent = parseInt(bpCount.textContent) + 1;
    }
    else if(inpp >=61 && inpp <=70){
        bCount.textContent = parseInt(bCount.textContent) + 1;
    }
    else if(inpp >=51 && inpp <=60){
        bmCount.textContent = parseInt(bmCount.textContent) + 1;
    }
    else if(inpp >=40 && inpp <=50){
        cCount.textContent = parseInt(cCount.textContent) + 1;
    }
    else{
        fCount.textContent = parseInt(fCount.textContent) + 1;
    }
    inp.value = '';
});








