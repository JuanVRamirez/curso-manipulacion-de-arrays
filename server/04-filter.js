const word = ["spray", "limit", "elite", "exuberant"]

const newArray = []
for (let index = 0; index < word.length; index++) {
    const item = word[index];
    if (item.length >= 6){
        newArray.push(item)
    }
}

const rta = word.filter(item => item.length >=6)

console.log("newArray", newArray)
console.log("rta", rta)
console.log("original", word)

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const rta3 = orders.filter(item => item.delivered && item.total >= 100)

  console.log(rta3, "rta3")

  const search = (query) => {
    return orders.filter(item => {
      return item.customerName.includes(query)
    })
  }

  console.log(search("Nico"))