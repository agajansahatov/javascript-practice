//Factory Function
function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}

//Constructor Function
function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipCode = zipcode;
}

let address1 = createAddress('a', 'b', 'c');
console.log(address1);

let address2 = new Address('a', 'b', 'c');
console.log(address2);