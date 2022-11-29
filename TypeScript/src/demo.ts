//TS gets converted to JS to make simpler code
//src is the conventional root folder and destination folder output folder in tsconfig.json file
//never touch the dist file
//noEmitOnError, if there is a problem, it won't create a JS file for it

// datatypes: str, int, bool, undefined, null, obj, NaN, array, function
// string is a "type of" anything inside of quotes
//let andrea = "andrea";
let andrea: string = "andrea" //new syntax with type
// int is a "type of" whole number
let age: number = 23;
// bool is "type of" true or false
let bool: boolean = true;
//cannot change types if defined beforehand
// in order to prevent errors, it's going to force it to be one type
let joe: any = "joe" //can receive any type except can't use 'const', using any kind of defeats the purpose of TS