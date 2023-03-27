//your JS code here. If required.
let arr = [1, 2, 3, 4];
const output = document.querySelector('#output');

function manipulate(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000)
    }).then((data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                output.innerText = data.filter((element) => { return element % 2 != 0 })
                resolve(data)
            },1000)
        })
    }).then((data)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                let evenArr = data.filter((element) => {return element %2 == 0})
                // evenArr = evenArr.map( element => element*2)
                resolve(evenArr)
            },2000)
        })
    })
}

manipulate(arr).then((data)=>{
    output.innerText = data;
}).catch((err)=>{
    console.log('Error ...')
})