module.exports = function createDreamTeam(members) {

 if (Array.isArray(members)){
  let result = [];
  
  members.forEach(element => {
    
    if (typeof element === 'string'){
      let res = element.trim().toUpperCase().split('');
      result.push(res[0])
    }else{
      return false;
    }
    
  });
  return result.sort().join('') 
 } else {
  return false;
 } 
};
