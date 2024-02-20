// const seats = document.getElementById('A1')


// console.log(seats)

const seatse = document.querySelectorAll('.seat')
// console.log(seatse)
for (let setlist = 0; setlist < seatse.length; setlist++) {
    const setid = seatse[setlist];
    // console.log(setid)
  setid.addEventListener("click" , function(){
    // console.log("sethfdh")

    const se = setid.querySelector(".name")
    // console.log(se.innerText)
  })
}

/* count palas */
const countPlas = document.querySelectorAll('.seat')
// console.log(countPlas)
let countMainas = 0;
for (const count of countPlas){
  count.addEventListener("click" , function(){
    countMainas = countMainas + 1;
    innertextPlas("seatCount",countMainas)
    
    })
}

let countPlase = 0;
for (const count of countPlas){
  count.addEventListener("click" , function(){
    countPlase = countPlase + 1;
    innerText("count",countPlase)
    
    })
}

/* countMainas */
// const countMaina = document.querySelectorAll("seatCounts")
// console.log(countMainas)

function innerText(id, valu){
  document.getElementById(id).innerText = valu;
}

function innertextPlas(id , valu){
  document.getElementById(id).innerText = id -valu;
}

// console.log(document.getElementById(seatCount));