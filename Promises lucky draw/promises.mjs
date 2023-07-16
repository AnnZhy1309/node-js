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
   .then(function(val){
    console.log(val);
   })
   .then(function(Caroline){
    return luckyDraw(Caroline);
   })
   .then(function(val){
    console.log(val);
   })
   .then(function(Sabrine){
    return luckyDraw(Sabrine);
   })
   .then(function(val){
    console.log(val);
   })
   .catch((err)=>console.error(err)); 
  }) };

  console.log(luckyDraw());