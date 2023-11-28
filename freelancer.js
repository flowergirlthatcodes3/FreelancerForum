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
"$650",
"$450",
"$375",
"$750",
"$800",
"$950"
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
const ul = document.querySelector(".list")
//const ul = document.querySelector(".list")
// create a function to render freelance data

const interval = setInterval(() => {
    const rnd = rndmFreelancer()
    freelancers.push(rnd)
    render()
    if(freelancers.length === 30){
        clearInterval(interval)
    }

}, 3000)
function render() {
    const html = freelancers.map((freelancers) => {
        return `<li> Name: </br>${freelancers.Name} </br>
        Occupation: </br> ${freelancers.Occupation} </br>
        Price: </br> ${freelancers.Price}</li>`
        //return `<li>Name: ${freelancers.Name} Occupation: ${freelancers.Occupation} Price: ${freelancers.Price}</li>`
    })

    ul.innerHTML = html.join("")
//ul.innerHTML = html.join("")
console.log(html.join(""))
}
const h2 = document.querySelector("h1")
setInterval(() => {
    h2.innerHTML = h2.innerHTML
} , 2000)


function getAverage(prices) {
    //const total = prices.reduce((acc,curr) => acc + curr, 0)
    //return total / prices.length

}
//const ave = getAverage(prices);
c//onsole.log(getAverage(prices))
   /*prices.forEach(function(item,index) {
total += item;
count++
})
return total/count
}
console.log(getAverage(total/count))*/
    