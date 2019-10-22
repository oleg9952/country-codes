// ------- DOM Elements -------
const content = document.querySelector('.content');
const search = document.querySelector('#search');

// ------- Fetch codes -------

let codes = [];

fetch('https://oleg9952.github.io/json-placeholders/country-codes.json')
    .then(resp => resp.json())
    .then(data => {
        codes = data;
        content.innerHTML = codes.map(item => {
            return `
                <div class="card">
                    <p class="country_name">${item.name}</p>
                    <p class="contry_code">${item.dial_code}</p>
                </div>
            `
        }).sort().join('')
    })
    .catch(err => console.error(err))

// ------- Search country code -------

search.addEventListener('input', e => {
    if(e.target.value.length !== 0) {
        content.innerHTML = codes.map(item => {
            if(item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
                return `
                    <div class="card">
                        <p class="country_name">${item.name}</p>
                        <p class="contry_code">${item.dial_code}</p>
                    </div>
                `
            }
        }).sort().join('')
    } else {
        content.innerHTML = codes.map(item => {
            return `
                <div class="card">
                    <p class="country_name">${item.name}</p>
                    <p class="contry_code">${item.dial_code}</p>
                </div>
            `
        }).sort().join('')
    }
})



