module.exports = function toReadable (number) {
  const digits = {
      0: null,
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
    }
    let str = number.toString();
    let arr =[];
    let obj = {
      thousand: false,
      hundred: false,
      digit: false,
    }
    let result = null;
    for( let char in str) {
      console.log(str.length)
      if (str.length === 3 && !obj.thousand) {
        arr.push(`${digits[str[char]]} hundred`);
        obj.thousand = true;
        str = str.slice(-2,);
      }
      if (str.length === 2 && !obj.hundred) {
        if (str[char] === '0') {
          console.log(str.slice(-1,))
          str = str.slice(-1,);
          obj.hundred = true;
        } else {
          if (str <= 19) {
            console.log(str)
            arr.push(digits[str]);
            obj.hundred = true;
            str = '';
          } else {
            console.log(digits[`${str[char]}0`])
            arr.push(digits[`${str[char]}0`]);
            str = str.slice(-1,);
            obj.hundred = true;
          }
        }
      }
      if (str.length === 1 && !obj.digit) {
        if (str[char] === '0') {
          console.log(str.slice(-1,))
          str = '';
          obj.digit = true;
        } else {
          console.log(digits[`${str[char]}`])
          arr.push(digits[`${str[char]}`]);
          obj.digit = true;
        }
      }
    }
    result = number ? arr.join(' '): 'zero';
    return result;
}
