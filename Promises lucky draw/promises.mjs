function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
  luckyDraw(player)
   .then(function(Joe){
    console.log(Joe);
   })
   .then(function(Caroline){
    console.log(Caroline);
   })
   .then(function(Sabrine){
    console.log(Sabrine);
   })
   .catch((err)=>console.error(err)); 
   });

}
