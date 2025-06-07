// constant variable or locked variable
const accountId = 3825
let accountEmail = "ajax@gmail.com"
var accountPassword = "12342"
accountCity = "Jaipur"

// accountId = 2 !NOT ALLOWED

accountEmail = "olsen@gmail.com"
accountPassword = "1212121"
accountCity = "Bengaluru"
let accountState

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Do Not use var: Since it has issues in block scope and functional scope

*/