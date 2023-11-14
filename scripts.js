function skaiciuoti(){
  let lentosIlgis = parseInt(document.getElementById('lentosIlgis').value)
  let lentosPlotis = parseInt(document.getElementById('lentosPlotis').value)
  let lentosGylis = parseInt(document.getElementById('lentosGylis').value)
  let lentosSkaicius = parseInt(document.getElementById('lentosSkaicius').value)

  console.log(`Lentos ilgis: ${lentosIlgis} , lentos plotis: ${lentosPlotis}, lentos gylis: ${lentosGylis}, lentų skaičius: ${lentosSkaicius}
  (${lentosIlgis} * ${lentosPlotis} * ${lentosGylis}) * ${lentosSkaicius} = ${(lentosIlgis * lentosPlotis * lentosGylis) * lentosSkaicius} kubatura`)

   document.querySelector('.results ').innerHTML = `<p>Lentos ilgis: ${lentosIlgis} , lentos plotis: ${lentosPlotis}, lentos gylis: ${lentosGylis}, lentų skaičius: ${lentosSkaicius}
   <br>
   (${lentosIlgis} * ${lentosPlotis} * ${lentosGylis}) * ${lentosSkaicius} = ${(lentosIlgis * lentosPlotis * lentosGylis) * lentosSkaicius} kubatura <br>
   1m3 = 2Eur <br>
   Kaina = 2Eur * ${(lentosIlgis * lentosPlotis * lentosGylis) * lentosSkaicius} = ${((lentosIlgis * lentosPlotis * lentosGylis) * lentosSkaicius) * 2}Eur</p>`


  // galejau kintamaji kaina ar viska kita pasidaryti, bet norejau taip bandyti.
  
}



document.getElementById('lentosIlgis').addEventListener('keyup', function(event){
let inputValue = event.target.valueAsNumber
if(inputValue < 0){
event.target.classList.add('error')
event.target.nextElementSibling.classList.add('show')
} else {
  event.target.classList.remove('error')
  event.target.nextElementSibling.classList.remove('show')
}
})


document.getElementById('lentosPlotis').addEventListener('keyup', function(event){
  let inputValue = event.target.valueAsNumber
  if(inputValue < 0){
  event.target.classList.add('error')
  event.target.nextElementSibling.classList.add('show')
  } else {
    event.target.classList.remove('error')
    event.target.nextElementSibling.classList.remove('show')
  }
  })
  
  document.getElementById('lentosGylis').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0){
    event.target.classList.add('error')
    event.target.nextElementSibling.classList.add('show')
    } else {
      event.target.classList.remove('error')
      event.target.nextElementSibling.classList.remove('show')
    }
    })

    document.getElementById('lentosSkaicius').addEventListener('keyup', function(event){
      let inputValue = event.target.valueAsNumber
      if(inputValue < 0){
      event.target.classList.add('error')
      event.target.nextElementSibling.classList.add('show')
      } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
      }
      })
      
    


function reset(){
  document.getElementById('lentosIlgis').valueAsNumber = 0
  document.getElementById('lentosPlotis').valueAsNumber = 0
  document.getElementById('lentosGylis').valueAsNumber = 0
  document.getElementById('lentosSkaicius').valueAsNumber = 0
  document.querySelector('.results').innerHTML = `<p>Pasirinkite norimus kiekius lentų.</p>`
}
