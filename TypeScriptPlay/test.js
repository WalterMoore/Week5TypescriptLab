function greeter(n) {
    return "Hi my name is " + n.getFullName() + " and my age is " + n.age.toString();
}
var n = {
    firstName: 'Matt',
    lastName: 'Landers',
    jobTitle: 'BossMan',
    age: 36,
    getFullName: function getFullName() {
        return this.firstName + " " + this.lastName;
    }
};
