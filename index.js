require(test/index-test.js)

const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name) 
  return kittens
}