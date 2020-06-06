module.exports = function repeater(str, options) {
  let addition = "" + (typeof options.addition !== 'undefined' ? options.addition : "");
  let {
    repeatTimes = options.repeatTimes || 0,
    separator = options.separator || '+',
    additionSeparator = options.additionSeparator || '|',
    additionRepeatTimes = options.additionRepeatTimes || 0
  } = options;

  let result = [];

  for (i = 0; i < repeatTimes; i++) {
    let inArray = [];
    for (j = 0; j < additionRepeatTimes; j++) {
      inArray.push(addition);
    }
    if (inArray.length == 0 && addition != "") {
      inArray.push(addition);
    }

    result.push(str + inArray.join(additionSeparator));
  }
  return result.length != 0 ? result.join(separator) : str + addition;
};
