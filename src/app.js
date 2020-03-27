document.querySelector('.get-jokes')
    .addEventListener('click', getJokes);

function getJokes(e) {

    const xhr = new XMLHttpRequest();

    const number = document.querySelector('#number').value;
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {

            let output = '';
            const response = JSON.parse(this.responseText);

            if(response.type === 'success') {
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += `Something went wrong`;
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    };
    xhr.send();
    e.preventDefault();
}