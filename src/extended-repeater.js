module.exports = function repeater(str, options) {
    const { 
        repeatTimes = 1, 
        separator = '+', 
        addition, 
        additionRepeatTimes = 1, 
        additionSeparator  = '|'
    } = options;

    let additionStr = `${addition}${additionSeparator}`.repeat(additionRepeatTimes);
    additionStr = additionStr.substring(0, additionStr.length - additionSeparator.length)

    
    if (additionStr === 'undefined') additionStr = ''

    const result = `${str}${additionStr}${separator}`.repeat(repeatTimes)

    return result.substring(0, result.length - separator.length)


};
  