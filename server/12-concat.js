const elements = [1,1,2,2]
const otherElements = [3,2,5,3]

const newArray = [...elements]
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element) 
}

console.log("for", newArray)

const rta = elements.concat (otherElements)
const rta2 = [...elements, ...otherElements]

console.log("concat", rta)
console.log("spreed Operator: ", rta2)