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
                let evenArr = data.filter((element) => { return element % 2 == 0 })
                output.innerHTML = `${evenArr} <br>`
                resolve(evenArr)
            },1000)
        })
    }).then((data)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                // let evenArr = data.filter((element) => {return element %2 == 0})
                let res = data.map( element => element*2)
                resolve(res)
            },2000)
        })
    })
}

manipulate(arr).then((data)=>{
    output.innerHTML += data;
}).catch((err)=>{
    console.log('Error ...')
})