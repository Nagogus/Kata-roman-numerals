
function convert(number) {
  var result = [],
      arabicPoints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      romanPoints = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
      arabicPointsLength = arabicPoints.length;

  if (number === 0 ) {
    return 'nulla';
  }

  while(number) {
    for(var i = 0; i < arabicPointsLength; i++) {
      if (number >= arabicPoints[i]) {
        number -= arabicPoints[i];
        result.push(romanPoints[i]);
        break;
      }
    }
  }

  return result.join('');
}
