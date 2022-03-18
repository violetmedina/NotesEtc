
let cityFetch = city => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9361bd03ec7175e9eea92fdf7a717518`)
    .then(result=>result.json())
    .then(data=> {
        console.log(data)

        let kelvin = data.main.temp; 
        //convert to cel 
        let degC = kelvin - 273.15; 
        //convert cel to far 
        // (C * 1.8) + 32

        let degF = Math.floor(degC * 1.8) + 32;

        console.log(degF)

        let div1 = document.querySelector('.javascript1');
        let div2 = document.querySelector('.javascript2');
        let title = document.querySelector('h2')

        div1.innerHTML =    `<h2>${city}</h2>
                            <p>Current Temperature ${degF}º</p>

        `

        // jsDiv2.innerHTML = `<i class="fa-solid fa-sun"></i>
        // <p>Current Conditions: ${conditions}</p>
        // <p>Current Temperature: ${degF}°</p>
        // <i class="fa-solid fa-sun-bright fa-3x"></i>'
    })
}