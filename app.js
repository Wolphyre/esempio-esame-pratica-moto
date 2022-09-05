fetch('https://628b2f157886bbbb37b20caa.mockapi.io/moto')
    .then(resp => resp.json().then(resp => displaybike(resp)))

function displaybike(bikes) {
    const container = document.getElementById('container')
    for (const bike of bikes) {
        console.log(bike);
        const bikeDiv = document.createElement('div')
        bikeDiv.classList.add('bike')

        const bikeModel = document.createElement('h2')
        bikeModel.innerText = 'Modello: ' + bike.model
        bikeDiv.appendChild(bikeModel)

        const bikeConstructor = document.createElement('h4')
        bikeConstructor.innerText = 'Costruttore: ' + bike.constructor
        bikeDiv.appendChild(bikeConstructor)

        const bikeCilinder = document.createElement('h4')
        bikeCilinder.innerText = 'CC: ' + bike.cilinder
        bikeDiv.appendChild(bikeCilinder)

        const bikeOptionals = document.createElement('ul')
        for (const optional of bike.optional) {
            const optionalLi = document.createElement('li')
            optionalLi.innerText = 'Optional: ' + optional
            bikeOptionals.appendChild(optionalLi)
        }
        bikeDiv.appendChild(bikeOptionals)

        const bikeYop = document.createElement('h4')
        bikeYop.innerText = 'Year of Production: ' + bike.yop
        bikeDiv.appendChild(bikeYop)

        const bikeAvailability = document.createElement('div')
        function itsAvailable() {
            if (bike.available === true) {
                return "It's Available? YES"
            } else {
                return "It's Available? NO"
            }
        }
        bikeAvailability.innerText = itsAvailable();
        bikeDiv.appendChild(bikeAvailability);

        const bikeColor = document.createElement('ul')
        for (const color of bike.colors) {
            const colorLi = document.createElement('li')
            colorLi.style.backgroundColor = color
            bikeColor.appendChild(colorLi)
        }
        bikeDiv.appendChild(bikeColor);

        const bikeClass = document.createElement('h4')
        bikeClass.innerText = 'Classe: ' + bike.class
        bikeDiv.appendChild(bikeClass)



        container.appendChild(bikeDiv)
    }

}


