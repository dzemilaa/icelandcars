document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput').value.trim();
        if (searchInput === '') {
            alert('Please enter a vehicle number.');
            return; // Interrupt execution if there is no input
        }
        fetchAndDisplayData(searchInput);
    });

    function fetchAndDisplayData(id) {
        const url = `https://65e61adcd7f0758a76e81e06.mockapi.io/api/car/CarNumber?number=${id}`;       
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('You have entered an incorrect registration number.');  }
                return response.json();  })
            .then(data => {
                if (data.length === 0) { // Check if the result is empty
                    throw new Error('Please enter the correct registration number.'); }
                const car = data[0]; 
                if (car.number !== id) { // Check if the entered number matches the whole number from the API
                    throw new Error('You have entered an incorrect registration number.'); }
                const resultsBody = document.getElementById('results-body');
                resultsBody.innerHTML = '';
                for (const key in car) {
                    if (car.hasOwnProperty(key)) {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td><strong>${key}</strong></td>
                            <td>${car[key]}</td>
                        `;
                        resultsBody.appendChild(row); } }  })
            .catch(error => {
                alert(error.message); 
            });
    }
});
