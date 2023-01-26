function showAddress(address){
    for (const key in address) {
        console.log(key, address[key]);
    }
}

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
}

showAddress(address);