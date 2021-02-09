const counteries = document.querySelector(".result");
const getCounteryData = (country) => {
    
};



var button = document.querySelector("button");
var screen = document.querySelector("input");

button.addEventListener('click',function(){
    var screenValue = screen.value;
    const request = new XMLHttpRequest();
    request.open('GET',`https://restcountries.eu/rest/v2/name/${screenValue}`);
    request.send();
    request.addEventListener("load",function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);

       const html = `
       <div class="country1">
                <img src="${data.flag}" alt="">
                <h1 id="country-name1" class="country-name" >${data.name}</h1>
                <h3>${data.region}</h3>
                <h1 id="population" >👫  <span>${(data.population /1000000).toFixed(3) +"  "+"M peoples"}</span></h1>
                <h1 id="coin" >🥇 <span>${data.currencies[0].name}</span></h1>
                <h1 id="language" > 🗣️ <span>${data.languages[0].name}</span></h1>
                
            </div>`

            counteries.insertAdjacentHTML("beforeend",html);
            counteries.style.opacity = 1;
    });
})


// button.addEventListener("click",function(){
//     var iner = Event;
//     console.log(iner)
// })









