
const name = process.argv[2]
console.log(name)
const myFunc = (name, callBack) => {
    const value = callBack(name);
    console.log(value);
}

myFunc(name , (name) => name.length)

