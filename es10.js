// 1. Array.flat() и Array.flatMap()
const arr = [['a', 'b'], ['c', 'd', ['e']]];
const arrF = arr.flat(); // [ 'a', 'b', 'c', 'd', [ 'e' ] ]
const arrFI = arr.flat(Infinity); //[ 'a', 'b', 'c', 'd', 'e' ]

const arrFirst = ['a', 'b', 'c']
const arrSec = ['A', 'B', 'C']
const mapArr = arrFirst.map((el, i) => [el, arrSec[i]]) // [ [ 'a', 'A' ], [ 'b', 'B' ], [ 'c', 'C' ] ]
const mapArrAndFlat = arrFirst.flatMap((el, i) => [el, arrSec[i]]) //[ 'a', 'A', 'b', 'B', 'c', 'C' ]

// 2. Object.fromEntries()
const persone = {
    name: 'Alex',
    surname: 'Smidt',
    age: 30
}

const secPer = Object.entries(persone) // [ [ 'name', 'Alex' ], [ 'surname', 'Smidt' ], [ 'age', 30 ] ]
const backPer = Object.fromEntries(secPer) // { name: 'Alex', surname: 'Smidt', age: 30 }

// 3. String.prototype.matchAll
const regexp = /(?<av>av)/g;
const str = 'avsdav';
const array = [...str.matchAll(regexp)];
// [
//     [
//       'av',
//       'av',
//       index: 0,
//       input: 'avsdav',
//       groups: [Object: null prototype] { av: 'av' }
//     ],
//     [
//       'av',
//       'av',
//       index: 4,
//       input: 'avsdav',
//       groups: [Object: null prototype] { av: 'av' }
//     ]
//   ]

// 4. String.trimStart() and String.trimEnd()
const strAFter = '   a';
const strBefore = 'a    ';
console.log(strAFter.trimStart()) // a
console.log(strBefore.trimEnd())  //a


// 5. Symbol.Description
const sym = Symbol('symbol descr')
console.log(sym.description) // symbol descr

// 6. Необязательная привязка try/catch
//  catch без создания ненужной привязки(объект ошибки)

try{
    // ...code
} catch {
    console.log('action')
}

// 7. Динамический импорт
if(document.querySelector('#about_page')) {
    import('./modules/initVideoPlayer.js')
        .then(module => {
            module.initVideoPlayer('about__video_frame','.play', '.about__video', 'SETO1IMd1SA');
        })
        .catch(err => {
            console.log(err.message);
        });
}

(async function() {
    await import('https://...')
            .then(module => {
                module.initFunc(...arrgs);
            })
            .catch(err => {
                console.log(err.message);
            });
})();

// 8. Стандартизированный объект globalThis
// globalThis - глобальный объект Window
globalThis.v = 'a'
console.log(v) // a 