
const pbkdf2 = require('pbkdf2'); //allows us to hash a string

const crypto = require('crypto'); //used ti create a salt

let password = "some user password";

let sale = crypto.RandomBytes(20).toString('hex');


/**
 * password
 * salt
 * number of iterations
 * 256
 * sha256 (512 is more secure but uses more memory)
 */

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256')

let hash = key.toString('hex')
// console.log(hash);

let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}`

//!---------------

let newLoginPassword = "some user password" //to compare to see if it matches

//retrieved pwd from db based on username
let pass_parts = stored_pass.split('*') // split produces an array [pbkdf2_sha256, 3600, salt, hash]

/**
 * password
 * salt
 * number of iterations
 * 256
 * sha256 (512 is more secure but uses more memory)
 */


//what happens is that we take the new password and use the same security encryption in order to match the values and see if they match

let newPassword = pbkdf2.pbkdf2Sync(newLoginPassword, pass_parts[2], parseInt(pass_parts[1]), 256, 'sha256')


let hasLoginPassword = newPassword.toString('hex') //this is what we're going to compare to our db (comparing the hash)

if(hashLoginPassword === pass_parts[3]){
    console.log('passwords match');
}
else{
    console.log('what are you doing');
}