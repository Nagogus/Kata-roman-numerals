
function convert(number) {
  var result = [];

  if (number === 0 ) {
    return 'nulla';
  }

  var arabicPoints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanPoints = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  while(number > 0) {
    for(var i = 0; i < arabicPoints.length; i++) {
      if (number >= arabicPoints[i]) {
        number -= arabicPoints[i];
        result.push(romanPoints[i]);
        break;
      }
    }
  }

  return result.join('');
}
