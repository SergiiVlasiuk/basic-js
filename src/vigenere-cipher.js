const verify = (mess, key) => {
  if (!mess || !key) throw Error('Missing parameters');
}
const prepareKey = (mess, key) => key.repeat(Math.ceil(mess.length / key.length)).slice(0, mess.length).toUpperCase();
const encryptOperation = (mess, key, i, j) => String.fromCharCode((mess.charCodeAt(i) + key.charCodeAt(j)) % 26 + 65);
const decryptOperation = (mess, key, i, j) => String.fromCharCode((mess.charCodeAt(i) + 26 - key.charCodeAt(j)) % 26 + 65);
const processMessage = (mess, key, operation, isDirect) => {
  verify(mess, key);
  key = prepareKey(mess, key);
  mess = mess.toUpperCase();
  let result = '';
  let j = -1;

  for (let i = 0; i < mess.length; i++) {
    if (mess[i] != ' ')
      j++
      result += (mess[i].charCodeAt(0) > 64 && mess[i].charCodeAt(0) < 91) ? operation(mess, key, i, j) : mess[i]
  }
  return (isDirect) ? result : result.split('').reverse().join('');
}

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return processMessage(message, key, encryptOperation, this.isDirect);
  }

  decrypt(encryptedMessage, key) {
    return processMessage(encryptedMessage, key, decryptOperation, this.isDirect);
  }
}

module.exports = VigenereCipheringMachine;
