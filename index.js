function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (2500 < feet) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
   let checkCity = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return checkCity;

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}