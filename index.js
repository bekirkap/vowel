//--selectors--//
const textarea = document.getElementById("text")
const button = document.getElementById("button")
const result = document.getElementById("result")

button.addEventListener("click", () => {
    let text = textarea.value
    let letters = text.split("")
    let counter = 0
 
    letters.forEach((e) => {
        if(e == "a" || e == "e" || e == "i" || e == "o" || e == "u"){
            counter++
        }
    });
    if(counter === 0){
        result.innerHTML = `There is no vowels in ${text}`
    } 
    else if(counter === 1){
        result.textContent = `There is ${counter} vowels in ${text}`
    }
    else{
        
        result.textContent = `There are ${counter} vowels in ${text}`
    }
})

