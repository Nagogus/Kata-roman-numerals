describe('convert number to roman numeral', function () {
  it('should return nulla if number is 0', function() {
    expect(convert(0)).toBe('nulla');
  });

  it('should return I if number is 1', function() {
    expect(convert(1)).toBe('I');
  });

  it('should return II if number is 2', function () {
    expect(convert(2)).toBe('II');
  });

  it('should return III if number is 3', function () {
    expect(convert(3)).toBe('III');
  });

  it('should return IV if number is 4', function () {
    expect(convert(4)).toBe('IV');
  });

  it('should return V if number is 5', function () {
    expect(convert(5)).toBe('V');
  });

  it('should return VI if number is 6', function () {
    expect(convert(6)).toBe('VI');
  });

  it('should return VII if number is 7', function () {
    expect(convert(7)).toBe('VII');
  });

  it('should return VIII if number is 8', function () {
    expect(convert(8)).toBe('VIII');
  });

  it('should return IX if number is 9', function () {
    expect(convert(9)).toBe('IX');
  });

  it('should return X if number is 10', function () {
    expect(convert(10)).toBe('X');
  });

  it('should return XI if number is 11', function () {
    expect(convert(11)).toBe('XI');
  });

  it('should return XII if number is 12', function () {
    expect(convert(12)).toBe('XII');
  });

  it('should return XIII if number is 13', function () {
    expect(convert(13)).toBe('XIII');
  });

  it('should return XIV if number is 14', function () {
    expect(convert(14)).toBe('XIV');
  });

  it('should return XXXIV if number is 34', function () {
    expect(convert(34)).toBe('XXXIV');
  });

  it('should return XL if number is 40', function () {
    expect(convert(40)).toBe('XL');
  });

  it('should return L if number is 50', function () {
    expect(convert(50)).toBe('L');
  });

  it('should return LX if number is 60', function () {
    expect(convert(60)).toBe('LX');
  });

  it('should return LXXXIX if number is 89', function () {
    expect(convert(89)).toBe('LXXXIX');
  });

  it('should return XC if number is 90', function () {
    expect(convert(90)).toBe('XC');
  });

  it('should return DCCCXI if number is 811', function () {
    expect(convert(811)).toBe('DCCCXI');
  });

  it('should return MDLXXXIX if number is 1589', function () {
    expect(convert(1589)).toBe('MDLXXXIX');
  });

});
