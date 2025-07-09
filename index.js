
import { v4 as uuidv4 } from 'uuid';


async function main() {

   console.log("hello world")
}

async function mint(address, pk) {
    console.log('mint... ')

    let i = 0
    const loop=getRandomInt(6,9)
    for(i=0;i<1;i++){
   

    }

}


async function swap(address, pk) {
   const url='https://localhost:1234'
   const response=await axios()
}

function getTs(){
    const ts=Date.now()
    // console.log(ts)
    return ts
}
// getTs()
main().then(r => console.log(new Date()))
