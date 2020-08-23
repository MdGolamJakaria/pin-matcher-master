
/// Generating 4 digit Numbers.

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function(){
    const showNum = document.getElementById("show-num");
    showNum.value = Math.floor(1000 + Math.random() * 9000);
})

///Numbering work

function number(event){
    const numbers = document.getElementById("show-input");
    // console.log(event.target.innerText);
    numbers.value += event.target.innerText;


}

// all clear.
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function(){
    const numbers = document.getElementById("show-input");
    numbers.value = "";
})

///back btn

const backBtn = document.getElementById("back");
backBtn.addEventListener("click", function(){
    const numbers = document.getElementById("show-input");
    sliceLastNumber = numbers.value.slice(0,-1);
    
    numbers.value=sliceLastNumber;

})

/// submit button 
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(){
    const showNum = document.getElementById("show-num");
    const generatedNumber = showNum.value;

    const numbers = document.getElementById("show-input");
    const userInput = numbers.value;

    if(generatedNumber==userInput){
        const successText = document.getElementById("success");
        successText.style.display = "block";
    }else{
        const failedText = document.getElementById("failed");
        failedText.style.display = "block";
    }
});
