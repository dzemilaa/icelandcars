document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput').value.trim();
        if (searchInput === '') {
            alert('Molimo vas unesite broj vozila.');
            return; // Prekida izvršenje ako nema unosa
        }
        fetchAndDisplayData(searchInput);
    });

    function fetchAndDisplayData(id) {
        const url = `https://65e61adcd7f0758a76e81e06.mockapi.io/api/car/CarNumber?number=${id}`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Uneseli ste pogrešan registracioni broj.');
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) { // Proverava da li je rezultat prazan
                    throw new Error('Molimo vas unesite tačan registracioni broj.');
                }

                const car = data[0]; 
                
                if (car.number !== id) { // Proverava da li se uneti broj podudara sa celim brojem iz API-ja
                    throw new Error('Uneseli ste pogrešan registracioni broj.');
                }

                const resultsBody = document.getElementById('results-body');
                resultsBody.innerHTML = '';

                for (const key in car) {
                    if (car.hasOwnProperty(key)) {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td><strong>${key}</strong></td>
                            <td>${car[key]}</td>
                        `;
                        resultsBody.appendChild(row);
                    }
                }
            })
            .catch(error => {
                alert(error.message); 
            });
    }
});

