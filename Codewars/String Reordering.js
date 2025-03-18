// function sentence(arrayOfObjects) {
//   // your code
//   array = []
//   for(ele of arrayOfObjects){
//     keyPair = Object.entries(ele)[0]
//     console.log(parseInt(keyPair[0]))
//     array.splice(parseInt(keyPair[0]),0,keyPair[1])
//     // console.log(parseInt(keyPair))
//     // console.log(array)
//     // array[Number(parseInt(keyPair[0]))] = keyPair[1]

//   }
//   console.log(array)
//   return array.join('').trim();
// }

// console.log(sentence([ {'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'} ]))
// console.log(sentence([{"-813":"HOWTphcUzDVAbWrC"},{"-577":"TxFTWJlJusTufaUacrV"}]))

// function sentence(arrayOfObjects) {
//   for (let i = 0; i < arrayOfObjects.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (
//         Number(Object.keys(arrayOfObjects[j])[0]) >
//         Number(Object.keys(arrayOfObjects[j + 1])[0])
//       ) {
//         temp = arrayOfObjects[j];
//         arrayOfObjects[j] = arrayOfObjects[j + 1];
//         arrayOfObjects[j + 1] = temp;
//         console.log(Object.keys(arrayOfObjects[j])[0],Object.keys(arrayOfObjects[j+1])[0])
//       }
//     }
//   }
//   //   console.log(arrayOfObjects)
// }


function sentence(arrayOfObjects) {
    arrayOfObjects.sort((first,second)=>{
        if (parseInt(Object.keys(first)[0]) > parseInt(Object.keys(second)[0])){
            return -1
        }
        else if (parseInt(Object.keys(first)[0]) > parseInt(Object.keys(second)[0])){
            return 1
        }
        return 0
    })
    return arrayOfObjects.reverse().map((ele)=>Object.values(ele)[0]).join(' ')

}

// console.log('2'> '1')

// console.log(sentence([{ 3: "vatsan!" }, { 2: "love" }, { 1: "I" }]).reverse())
// console.log(sentence([{'1': 'dog' }, {'2': 'took'}, {'4': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}]))
console.log(sentence([{'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}]))
// console.log(sentence([{'1': 'dog' }, {'2': 'took'}, {'4': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}]))
// console.log(parseInt('12')>parseInt('6'))