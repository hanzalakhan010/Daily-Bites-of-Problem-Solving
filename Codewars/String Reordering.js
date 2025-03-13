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
    for (let i = 0;i<arrayOfObjects.length;i++){
        for (let j=0;j<i;j++){
            console.log(Object.entries(arrayOfObjects[j])[0][0])
            if (Number(Object.keys(arrayOfObjects[j])[0])>Number(Object.entries(arrayOfObjects[j+1])[0])){
                temp = arrayOfObjects[j]
                arrayOfObjects[j] = arrayOfObjects[j+1]
                arrayOfObjects[j+1]  = temp
            }

        }
    }
    console.log(arrayOfObjects)

}

// console.log('2'> '1')

console.log(sentence([{ 3: "vatsan!" }, { 2: "love" }, { 1: "I" }]));

console.log([{ 3: "vatsan!" }, { 2: "love" }, { 1: "I" }])