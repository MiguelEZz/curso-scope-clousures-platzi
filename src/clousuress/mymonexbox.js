// function moneybox(coins){
//     let savecoins = 0;
//     savecoins += coins;
//     console.log("monexbox :"+savecoins)
// }

// moneybox(50)
// moneybox(60)


function monexbox(){
    let savecoins=0;
    function countCoins(coins){
        savecoins += coins;
        console.log(`monexbox$${savecoins}`)
    }
    return countCoins;
}

const myMoneyBox = monexbox();
myMonexbox(5)
myMonexbox(20)
myMonexbox(20)


// PROYECTO PLATZI

// export function createPetList() {
//     let petLiit = [];
//     function concat(mascota) {
//       petList.push(mascota)
//     }
//     return concat;
//   }
  
//https://docs.google.com/document/d/1MZSJFW-EaiYefZEOcv_DBY7Bghg5GWkF/edit?usp=sharing&ouid=112608808974869308187&rtpof=true&sd=true