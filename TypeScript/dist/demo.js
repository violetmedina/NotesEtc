"use strict";
//TS gets converted to JS to make simpler code
//src is the conventional root folder and destination folder output folder in tsconfig.json file
//never touch the dist file
//noEmitOnError, if there is a problem, it won't create a JS file for it
// datatypes: str, int, bool, undefined, null, obj, NaN, array, function
// string is a "type of" anything inside of quotes
//let andrea = "andrea"; is what JS looks like after conversion and is also considered 'inferred'
//let andrea: string = "andrea"; is what TS looks like
let andrea = "andrea";
// int is a "type of" whole number
let age = 23;
// bool is "type of" true or false
let bool = true;
//cannot change types if defined beforehand
// in order to prevent errors, it's going to force it to be one type
