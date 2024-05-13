const accountId=1727;
let accountEmail= "moeeziqbalmughal@gmail.com";
var accountPassword= "Hcl123";
accountCity="Lahore";   //It will reserve nmemory but it is not preferred to use variable without declaring
let accountState;

// accountId="173273"  It will not change because keyword const is used

accountEmail="moixiqbakmughal@gmail.com"; 
accountPassword="12345";
accountCity="Islamabad";

/* It is Preferred to not use var 
beacuse of the issue of block 
and functional scope*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
