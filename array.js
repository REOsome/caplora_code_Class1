let food = ['çhapati', 'burger', 'pizza'];
 

for (let index = 0; index < food.length; index++) {
    if (index<2) {
        
    console.log(food[index], index);
    }else{
        break;
    } 
}

food.map(
    (value, i) => {
        console.log(i, value);
    }
)
food.forEach(element => { 
    console.log(element);
});

let house = {
    primaryColor: 'órange',
    gate: 'metalic',
    bedrooms: 4,
    ceailing: 'wooden'
}
 
console.log( house.gate);
for (const key in house) {
  console.log (key, house[key])
}
// for (const iterator of house) {
    
//   console.log (iterator, house[key])
// }

//  cd todo
//npm start