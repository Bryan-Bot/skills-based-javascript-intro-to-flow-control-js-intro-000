
function basicTeenager(age) {
  if (13>=age && age<=19) {
    return("You are a teenager!")
  }
}

function teenager(age) {
  if (age>=13 && age<=19) {
    return("You are a teenager!")
}
else {
  return ("You are not a teenager")
}
}

function ageChecker(age) {
  if (13>=age && age<=19) {
    return("You are a teenager!")
  }
  else if (age<=12) {
    return("You are a kid")
  }
  else {
    return("You are a grownup")
  }
}










function ternaryTeenager(age) {
  return("You are a teenager")

  if (13>=19 && 13<=19) {
    return('You are not a teenager')
  }
}

function switchAge(age) {
  switch (age) {
    case 13, 14, 15, 16,17, 18, 19:
        return ('You are a teenager')
        break;
    default:
      return('You are a teenager')
}
}
