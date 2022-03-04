const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//? #1
// for(i = 0; i < ages.length; i++){
//   console.log(ages[i]);
// }

//? #3
// ages.forEach(function(i){
//   console.log(i);
// })

//? #5
// let newAges = ages.map(function(ageElement){
//   return ageElement + 5;
// })
// console.log(ages);
// console.log(newAges)

//? #7
// let evenNums = ages.filter(function(agesEl){
//     return (agesEl % 2) == 0
// })
// console.log(evenNums);

//? #8
// let newAges = ages.filter(function(agesEl){
//     return agesEl < 35;
// })
// console.log(newAges);

//? ## 10. Is there at least one value in the `ages` array that is equal to 21?

// let tOne = ages.some(function(oneEl){
//   return oneEl == 21;
// })
// console.log(tOne);

//? ## 11. Are there values in the `ages` array that are less than 14?

// let lessFtn = ages.some(function(ftEl){
//   return ftEl < 14;
// })
// console.log(lessFtn);


const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

//? #2
// for(i = 0; i < companies.length; i++){
//   console.log(companies[i].name);
// }

//? #4
// companies.forEach(function(i){
//   console.log(i.name);
// })

//? #6
// let newEnd = companies.map(function(company){
//   let newCompany = {...company}
//   newCompany.end = 2020
//   return newCompany
// })
// console.log(newEnd);
// console.log(companies);

//? #9
// let newCompanies = companies.filter(function(companiesEl){
//   return companiesEl.start > 1990;
// })
// console.log(newCompanies);

//? ## 12. Are there companies in the `company` list that started prior to 1990?

let newCo = companies.some(function(coEl){
  return coEl.start < 1990;
})
console.log(newCo);
