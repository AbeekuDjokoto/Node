let increase = document.getElementById('increase')
let reduce = document.getElementById('reduce')
let grow = document.getElementById('grow')
let delay = document.getElementById('delay')
let div = document.getElementById('random')
let round = document.getElementById('round')



function delayExpand(){
    setTimeout(()=>{
        div.style.width += increase.value.concat('px')
    }, Number(delay.value) * 1000)
}


function delayShrink(){
    setTimeout(()=>{
        div.style.width =  increase.value.concat('px')
    }, Number(delay.value) * 1000)
}

function delayRoundBorder(){
    setTimeout(()=>{
        div.style.borderRadius = increase.value.concat('px')
    }, Number(delay.value) * 1000)
}

function callback(){
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = "aqua";
}

grow.addEventListener('click',  delayExpand)
reduce.addEventListener('click', delayShrink)
round.addEventListener('click', delayRoundBorder)


// Promises
let p = new Promise((resolve, reject)=>{
    let a = 1 + 2;
    if(a == 3){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is the then ' + message)
}).catch((message) =>{
    console.log('This is the catch' + message)
})