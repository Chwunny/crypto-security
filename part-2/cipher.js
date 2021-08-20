
let test = 'I love cryptography!'
// let test2 = `How are you? I'm doing well, thank you for asking`

const pairs = {
    "a" : "&",
    "b" : "f",
    "c" : "#",
    "d" : "a",
    "e" : "k",
    "f" : "z",
    "g" : "^",
    "h" : "u",
    "i" : "*",
    "j" : "@",
    "k" : ">",
    "l" : "e",
    "m" : ".",
    "n" : "<",
    "o" : "j",
    "p" : ",",
    "q" : ")",
    "r" : "8",
    "s" : "w",
    "t" : "?",
    "u" : "4",
    "v" : "s",
    "w" : "/",
    "x" : "c",
    "y" : `'`,
    "z" : `"`,
    " " : "y",
    "!" : "p",
    "?" : "i",
    "." : "3",
    "," : "x",
    "'" : "q"
}

const encrypt = (str, key) => {
    let encrypted = []
    let input = str.toLowerCase()
    console.log(input)

    for (let i = 0; i < input.length; i++){
        for (const prop in key){
            if (input[i] === prop){
                encrypted.push(key[prop])
            }
        }
    }
    return encrypted.join('')
}

let encryptedMessage = encrypt(test, pairs)

const decrypt = (str, key) => {
  let decrypted = []
  console.log(str)

  for (let i = 0; i < str.length; i++){
    for (const prop in key){
      if (str[i] === key[prop]){
        decrypted.push(prop)
      }
    }
  }
  return decrypted.join('')
}

console.log(decrypt(encryptedMessage, pairs))