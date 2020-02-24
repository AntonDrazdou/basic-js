module.exports = function countCats(backyard) {
  let count = 0;
  //console.log(backyard);
  for (let i = 0; i < backyard.length; i++){
    for (let m = 0; m < backyard[i].length; m++){
      if (backyard[i][m] === '^^'){
        count++;
      }
    }
  }
return count;
};
