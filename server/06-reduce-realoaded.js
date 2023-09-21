const items = [1,3,2,3]

const rta = items.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item]+1;
    }
    return obj
}, {})

console.log(rta)

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const rta2 = data.map(item => item.level)
  .reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1
    }else{
        obj[item]++
    }
    return obj
  }, {}
  )
  console.log(rta2)

  const number = [1,3,4,2,5,6,3,5,2,8,9,10,8,5,3,4,2,1,3,6,7,5,5]

  const rta3= number.reduce((obj, item) => {
    if (item <= 5) {
        obj["1-5"]++
    }
    else if (item <= 8){
        obj["6-8"]++
    } else {
        obj["9-10"]++
    }
    return obj
  }, 
  {
    '1-5': 0,
    "6-8": 0,
    "9-10": 0,
  })

  console.log(rta3)