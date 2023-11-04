/*1.
1 11 12 2 13 15
microTaske Queue ի մեջ կմտնի նախ առաջին Պրոմիսի call backը,ապա երկրորդինը
կտպի 1 հետո 11 հետո քանի որ կգտնվի երկրորդ Պրոմիսի 3րդ տողում  microTaske Queue կգցի 12 տպող  հետո արդեն 2 տպող call backները, (catch չկատարվեղ բլոկը առաջին Պրոմիսին հետ կգցի հերթից,դրա համար էլ սկզում 12 ապա 2 )
և հերթականությամբ կկատարի դրանք,առաջին Պրոմիսում կգտնվի սխալ որը չի բռնվի իսկ երկրորդի մնացած գործողությունները հերթով կկատարվեն:

Promise.resolve()     երբ առանց առանց արժեքի resolve է լինում,միևնույն է խոստում համարվում է կատարված  և հաջորդին խոստմանը փոխանցվելիք  արժեքը կլինի undefined,   աշխատելու է then բլոկը
  .then(() => console.log(1))       ///// 1 և կվերադարձնի undefined  արժեքը,որը կանցնի հաջորդ thenին:
  .catch(() => console.log(3))     ///// կանտեսվի
  .then(() => {
    console.log(2);               ///// 2
    throw new Error();           /// այս տողից հետո գտնվող thenերը չեն աշխատի,կաշխատեր catch բլոկը և հետո նրանից վերադարձրած արժեքներով այլ thenերը,քանի որ գտնվել է error:
  })
  .then(() => console.log(4))   /// կանտեսվի
  .then(() => console.log(4)); /// կանտեսվի
   Promise.resolve()          /// երբ առանց առանց արժեքի resolve է լինում,միևնույն է խոստում համարվում է կատարված  և հաջորդին խոստմանը փոխանցվելիք  արժեքը կլինի undefined,   աշխատելու է then բլոկը
  .then(() => console.log(11)) // 11 հաջորդին փոխանցում է undefined :
  .then(() => {
    console.log(12); // 12
    throw new Error();        // այս տողը տալիս է error և այն պետք է կառավարել բռնել  catch ի միջոցով:
  })
  .catch(() => console.log(13))    // քանի որ վերևում կար error կաշատի  catchի բլոկը կտպի  13 և հաջորդին կփոխանցի  undefined որը եռռոռ չէ
  .catch(() => console.log(14))   //կանտեսվի չկա error
  .then(() => console.log(15));  // կկատարվի 15





2. Promise.resolve() նույնը ինչ գրված է նախորդ դեպքերում:
.then(data => {
throw new Error('Api Error'); /// գտնելով error հաջորդ  then երը կանտեսվեն մինչև catch
return 1;
})
.then(data => console.log('ok')) // կանտեսվի
.catch(error => {
console.log(error.message); /// errorը կբռնվի Api Error
return "2"; և կփոխանցի հաջորդ խոստմանը "2" արժեքը
})
.then(data => {
console.log(data);  ///data==="2"  կտպի քանի որ catch բլոկը փոխանցեց "2"
})








3.  1,6-  կոնսոլներում ունենք  և նրանք գտնվում են գլոբալ execution context ում հետևաբար առաջինը կմտնեն call stack և կկատարվեն 1  6
    3- Promisների callbackները մտնում են  microtaske queue ունեն առաջնահերթություն task queue գտնվող callback ից
    undefined,5-
    1-
    2- վերջում  task queue դուրս կգա և կկատարվի  setTimeout ի  callbackը


 console.log(1)
setTimeout(() => {   // կմտնի task queue և կսպասի իր հերթին
console.log(2)
}, 20)
Promise.resolve()
.then(() => {      // կմտնի microtaske queue և իր call backը կկատարվի քանի որ ունի առաջնահերթություն  task queue գտնվող callback ից
console.log(3)    // 3
return 1         // հաջորդ պռոմիսին փոխանցում է 1 արժեքը
})
.catch(e => console.log(e, 4))        ///չի կատարվի չկա եռռոռ կամ մերժում
.finally(res => console.log(res, 5)) // undefined,5 ///այս բլոկը չի վերցնում նախորդի արժեքը
.then((res) => console.log(res))    // 1 վերջին պռոմիսի վերադարձրած արժեքը եղել է 1
console.log(6)



4.   5  25  'final result ', undefined 25
let a = 5;
setTimeout(() => { // կգնա task queue սպասելով իր հերթին
console.log(a);    // 4.վերջում այս callbackը կգցի call stackի մեջ և կտպի 25
a = 10;
}, 0);
let p = new Promise((resolve, reject) => {
console.log(a);    //// 1.սինխրոն աշխատելով կտի 5
a = 25;           ////արժեքը կփոխի դարձնելով այն 25
resolve();        pն կվերադարձնի մի պրոմիս որի արժեքն է undefined
});
p.then(res => {
console.log('final result ', res)  ///3.ունենալով առաջնահերթություն  task queue տտնվող արժեքի նկատմամբ Microtask queue ից կաշխատի thenի callbackը կտպի 'final result ', undefined
});
console.log(a)      //// 2.25
*/
