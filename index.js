const app = "I don't do much."

var destructivelyAppendKitten = name => {

  kittens.push(name)
}

var destructivelyPrependKitten = name => {

  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = name => {

  kittens.pop(name)
}

var destructivelyRemoveFirstKitten = name => {

  kittens.shift(name)
}

var appendKitten = name => {

  [...kittens, name]
}
