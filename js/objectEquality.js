function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    this.isSame = function(another){
        return this === another;
    };
    this.isEqual = function(another){
        if (this === another)
            return true;
        return this.street === another.street &&
            this.city === another.city &&
            this.zipCode === another.zipCode;
    }
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

console.log(address1.isSame(address2));
console.log(address1.isSame(address3));

console.log(address1.isEqual(address2));
console.log(address1.isEqual(address3));