function basicTeenager(age) {
  if (age>=13 && age<=19) {
    return("You are a teenager!")
  }
}
///////////////////////////////
function teenager(age) {
  if (age>=13 && age<=19) {
    return("You are a teenager!")
}
else {
  return ("You are not a teenager")
}
}
////////////////////////////////
function ageChecker(age) {
  if (age<=12) {
    return("You are a kid")
  }
  else if (13>=age && age<=19) {
    return("You are a teenager!")
  }
  else if (age>19) {
    return("You are a grownup")
  }
}
///////////////////////////////
function ternaryTeenager(age) {
  if (age>=13 && age<=19) {
  return("You are a teenager")
}
else{
  return('You are not a teenager')
}
}
//////////////////////////////
function switchAge(age) {
if(switch (age)) {
  case 13, 14, 15, 16, 17, 18, 19:
      return ('You are a teenager');
  default:
      return('You have an age')
 }
}
