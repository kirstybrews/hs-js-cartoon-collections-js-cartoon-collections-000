function dwarfRollCall(dwarves) {
  var array2 = [];
  for (let i = dwarves.length / 2; i < dwarves.length; i++) {
   array2.push(`${[i + 1]}. ${dwarves[i]} `);
  } return array2.join("");
} 

function summonCaptainPlanet(planeteerCalls) {
  var array = [];
  for (let i = 0; i <planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i]}!`.toUpperCase());
  } return array;
}  
function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  if (foods.find(i => i == "cheddar", "gouda", "camembert", "swiss")) {
    return foods.find(i => i == "cheddar", "gouda", "camembert", "swiss");
  } else {
    return 'no cheese!';
  }
}

function wordsWithB (words) {
  var array = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].charAt(0).toLowerCase() == "b") {
    array.push(words[i])
    }
  } return array;
}