let ourProm = new Promise((resolve, reject)=>{
    let rand = Math.random();
    if(rand>0.5){
        resolve(`${rand} wins`)
    }else{
        reject(rand)
    }
})

ourProm 
  .then((val)=>console.log(val))
  .catch((error)=>console.log(error))