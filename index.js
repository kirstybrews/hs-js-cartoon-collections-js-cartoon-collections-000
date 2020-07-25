function dwarfRollCall(dwarves) {
  var array2 = []
  for (let i = 0; i < dwarves.length; i++) {
   array2.push(`${[i + 1]}. ${dwarves[i]} `);
  } return array2.join("")
} 

function summonCaptainPlanet(planeteerCalls) {
  var array = [];
  for (let i = 0; i <planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i]}!`.toUpperCase());
  } return array;
}  
function longPlaneteerCalls(words) {
    if (words.find(i => i.length > 4)) {
      return true;
    } else {
      return false
    }
}

function findTheCheese (foods) {
  if (foods.find(i => i == "cheddar", "gouda", "camembert")) {
    return foods.find(i => i == "cheddar", "gouda", "camembert");
  } else {
    return 'no cheese!'
  }
}
