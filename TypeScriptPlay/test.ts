interface Name{
	firstName: string;
	lastName: string;
	jobTitle?: string;
	age?: number;
	getFullName(): string;
}

function greeter(n: Name){
	
	return "Hi my name is "+ n.getFullName() + " and my age is " + n.age.toString();
}


var n: Name ={
firstName:'Matt',
lastName: 'Landers',
jobTitle: 'BossMan',
age: 36,
getFullName: function getFullName(): string{
	return this.firstName + " " + this.lastName;
}
};