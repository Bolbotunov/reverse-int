module.exports = function reverse (n) {
            const module = Math.abs(n);
            const convertToString = module.toString();
            const eachElement = convertToString.split('');
            const rev = eachElement.reverse();
            const joinElements = rev.join('');
            return Number(joinElements)
          }

