function makeid(l) {
  // write your code here
	let res="";
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let len=characters.length;
	for(let i=0;i<l;i++){
		res+=characters.charAt(Math.floor(Math.random()*len))
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
