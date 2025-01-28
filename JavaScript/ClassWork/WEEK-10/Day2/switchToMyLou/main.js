/******************************/
//Your Code Here 
function dayOfWeek(day){
switch(day){
  case 1: return 'Monday'
  break;
  case 2: return 'Tuesday'
  break;
  case 3: return 'Wednesday'
  break;
  case 4: return 'Thursday'
  break;
  case 5: return 'Friday'
  break;
  case 6: return 'Saturday'
  break;
  case 7: return 'Sunday'
  break;
  default: return false
}
}
console.log(dayOfWeek(8))



/****************************/
// Our code here. Don't touch!
if (typeof dayOfWeek === 'undefined') {
    dayOfWeek = undefined
  }
  
  if (typeof identifySeason === 'undefined') {
    identifySeason = undefined
  }
  
  if (typeof menuSelection === 'undefined') {
    menuSelection = undefined
  }

  
  
  module.exports = {
    dayOfWeek, 
    identifySeason, 
    menuSelection
  }
  