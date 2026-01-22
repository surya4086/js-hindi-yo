const accountid =144553
let accountemail="surajkumark4086@gmail.com"
var accountpassword="12345"
accountcity="gujarat"
let accountstate

//acccountid=2//not allowed value change nahi hogi
// var ki kahani ye thi ki scope ko follow nahi karta hai so ham isse avoid kartehai

accountemail="suraj@.com"
accountpassword="21212121"
accountcity="roorkee"

console.log(accountid);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountid,accountemail,accountpassword,accountcity,accountstate])
