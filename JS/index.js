import { currency } from "./valautas.mjs";
const convertFromBtn = document.querySelector(".c-from-btn");
const convertTOBtn =document.querySelector(".c-to-btn");
const convertFromDiv = document.querySelector(".c-from");
const convertToDiv = document.querySelector(".c-to");


 function convertCurrency(toCurr, fromCurr, amount) {
    const fromCurrency = currency.find(item => item.valuta === fromCurr);
    const toCurrency = currency.find(item => item.valuta === toCurr);

    if (fromCurrency && toCurrency) {
        
        const nokAmount = amount / fromCurrency.value;
        
        const convertedAmount = nokAmount * toCurrency.value;

        return convertedAmount;
    } else {
        return "Currency not found";
    }
}




const fromCurrency = ""
const toCurrency = ""

const amountInUSD = 500;

let inValue = "USD";
let outValue = "NOK";

const convertedAmountInWantedValue = convertCurrency(inValue, outValue, 100);
console.log(convertedAmountInWantedValue);



const arrayOfValuta = [];

for(let i = 0; i < currency.length; i++){
    arrayOfValuta.push(currency[i].valuta);
}







console.log(arrayOfValuta)



const fromBtns = [];
const toBtns = [];

function renderValutasInDiv() {
    let activeFromButton = null;
    let activeToButton = null;
    for (let i = 0; i < arrayOfValuta.length; i++) {
        const buttonFrom = document.createElement("button");
        buttonFrom.id=`from-btn${i}`;
        buttonFrom.classList.add("fromButton");
        buttonFrom.textContent = arrayOfValuta[i];
        const buttonTo = document.createElement("button");
        buttonTo.id=`to-btn${i}`;
        buttonTo.classList.add("toButton");
        buttonTo.textContent = arrayOfValuta[i];
        convertFromDiv.append(buttonFrom);
        convertToDiv.append(buttonTo);
        buttonFrom.addEventListener('click', ()=> {
            inValue = arrayOfValuta[i];
            if(activeFromButton){
                activeFromButton.classList.remove('active');
            }
            buttonFrom.classList.add('active');
            console.log(arrayOfValuta[i]);
            activeFromButton = buttonFrom;
        })
        buttonTo.addEventListener('click', ()=> {
            if(activeToButton){
                activeToButton.classList.remove('active');
            }
            buttonTo.classList.add('active')
            outValue = arrayOfValuta[i];
            console.log(arrayOfValuta[i]);
            activeToButton = buttonTo;
        })

        
    }
};
renderValutasInDiv();

const buttonFrom = document.querySelectorAll(".fromButton");

// console.log(buttonFrom);


const newButton = buttonFrom.forEach(()=> {
    inValue = arrayOfValuta;
})

console.log(inValue);
// console.log(newButton)


// convertFromBtn.addEventListener('click', )

// for(let i = 0; i<arrayOfValuta.length; i++){
//     const button{i}
// }

