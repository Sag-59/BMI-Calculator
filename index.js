const form = document.querySelector(".calculation")
const heightInput = document.querySelector("#height")
const weightInput = document.querySelector("#weight")
const button = document.querySelector(".calc")
const resultDiv = document.querySelector("#result")

function checkInputs(){
    const height = Number(heightInput.value)
    const weight = Number(weightInput.value)

    button.disabled = !(height > 0 && weight > 0)
}

heightInput.addEventListener("input", checkInputs)
weightInput.addEventListener("input", checkInputs)


form.addEventListener("submit", (event) => {
    event.preventDefault()

    const height = Number(heightInput.value)
    const weight = Number(weightInput.value)

    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert("Please enter valid height and weight");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);


    let category = ""
    if(bmi < 18.6){
        category = "Underweight"
    }
    else if(bmi <= 24.9){
        category = "Normal"
    }
    else{
        category = "Overweight"
    }


    const bmiText = document.createElement("p")
    const bmiSpan = document.createElement("span")
    bmiText.textContent = `Your BMI is `
    bmiSpan.textContent = `${bmi}.`
    bmiText.appendChild(bmiSpan)

    
    const categoryText = document.createElement("p")
    const categorySpan = document.createElement("span")
    categoryText.textContent = `Category: `
    categorySpan.textContent = `${category}.`
    categoryText.appendChild(categorySpan)

    resultDiv.appendChild(bmiText)
    resultDiv.appendChild(categoryText)


    requestAnimationFrame(() => {
        resultDiv.classList.add("show")
    })


    // resultDiv.innerHTML = 
    //     `Your BMI is <span>${bmi}</span>
    //     <br>
    //     Category: <span>${category}</span>`;


    // resultDiv.classList.add("show")


    // form.reset()
    // button.disabled = true;
})