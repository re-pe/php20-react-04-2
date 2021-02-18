function makeMap(...args) {
    args.forEach((arg, index) => {
        if (!Array.isArray(arg)) {
            throw new Error(`Argument #${index} is not array!`)
        }
    });
    args.forEach((arg, index) => {
        if (arg.length !== 2) {
            throw new Error(`Length of argument #${index} is not equal 2!`)
        }
    });
    const result = new Map();
    args.forEach(arg => {
        result.set(arg[0], arg[1]);
    });
    return result;
}

export default function Test() {
    const contacts = makeMap(["Jessie", {phone: "213-555-1234", address: "123 N 1st Ave"}])
    console.log(contacts.has('Jessie'))// true
    console.log(contacts.get('Hilary')) // undefined
    console.log(contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"}))
    console.log(contacts.get('Jessie')) // {phone: "213-555-1234", address: "123 N 1st Ave"}
    console.log(contacts.delete('Raymond')) // false
    console.log(contacts.delete('Jessie')) // true
    console.log(contacts.size) // 1
}