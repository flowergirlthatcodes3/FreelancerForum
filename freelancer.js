const names = [ // names used for freelancers
    "Dr. Doolittle",
    "Dr. Floral",
    "Dr. Wonderful",
    "Dr. Goodyear",
    "Dr. Flinstones",
    "Dr. Forecast"
]
const occupations = [
    "Veterinarian",
    "Florist",
    "Web Developer",
    "Mechanic",
    "Party Planner",
    "Weather Agent"
]
const prices = [
"650",
"450",
"375",
"750",
"800",
"950"
]
//create a function that will generate random freelancers
function rndmFreelancer(){
    const nameNum = Math.floor(Math.random() * names.length)
    const occNum = Math.floor(Math.random() * occupations.length)
    const priceNum = Math.floor(Math.random() * prices.length)
//freelancers properties
const freelancers = {
    Name: names[nameNum],
    Occupation: occupations[occNum],
    Price: prices[priceNum]
}
  return freelancers
}
const rndmfreelancer1 = rndmFreelancer()
const rndmfreelancer2 = rndmFreelancer()
const rndmfreelancer3 = rndmFreelancer()
const rndmfreelancer4 = rndmFreelancer()
const freelancers = [rndmfreelancer1, rndmfreelancer2, rndmfreelancer3, rndmfreelancer4]
const freelancersContainer = document.querySelector("#freelancers")
const priceContainer = document.querySelector("#AvestrtPrice")
//const h2 = document.querySelector("h2")
//const ul = document.querySelector(".list")
// create a function to render freelance data

interval = setInterval(() => {
    const rnd = rndmFreelancer()
    freelancers.push(rnd)
    render()
    if(freelancers.length === 40){
        clearInterval(interval)
    }
}, 2000)

function render() {
    const html = freelancers.map((freelancers) => {
        return `<span> Name: </br>${freelancers.Name} </br>
        Occupation: </br> ${freelancers.Occupation} </br>
        Price: </br> ${freelancers.Price} <hr/></span>`
        //return `<li>Name: ${freelancers.Name} Occupation: ${freelancers.Occupation} Price: ${freelancers.Price}</li>`
    })
  freelancersContainer.innerHTML = html.join("")
//ul.innerHTML = html.join("")
console.log(html.join(""))
   
}
    const arr = [650,450,375,750,800,950]  
let average = arr.reduce((a,b) => a + b, 0) / arr.length
console.log(average)
priceContainer.replaceChildren(`The Average Freelancer Cost Is $${average}` , setInterval(average, 2000))
// tried to make the average update but didnt quite know how.    
    
    
    
    
    
   // -----> trying/practicing different options. 
    //let sum = 0
    //for (let i = 0; i < freelancers.length; i++) {
       // sum += freelancers[i]; 
        //let totalPrices = prices.reduce((sum, prices) => 
        //sum + freelancers.Price, 0)
      //const totalPrices = prices.reduce((sum, prices) =>
        //sum + freelancers.Price, 0)
    //const averagePrice = totalPrices / freelancers.length
    //return averagePrice
//let averagePrice = (sum / prices.length)
    //priceContainer.innerHTML = html.join("")
  
    /*const averagePriceSpan = document.querySelector("#averagePrice")
    averagePriceSpan.innerHTML = `${averagePrice.toFixed(2)}`
    return sum / prices.length*/
  
//const totalPrices = prices.reduce((sum, price) => sum + freelancers.Price, 0)
//const averagePrice = totalPrices / freelancers.length

//return sum / prices.length
//const ave = getAverage(prices);
//onsole.log(getAverage(prices))
   /*prices.forEach(function(item,index) {
total += item;
count++
})
return total/count
}
console.log(getAverage(total/count))*/