const formSubmit = document.getElementById('jokeForm');

formSubmit.addEventListener('submit' , (e) => {
    e.preventDefault();
    getJoke();
});

async function getJoke(){
    await fetch('https://icanhazdadjoke.com/slack')
        .then(data => data.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('joke');
    
            jokeElement.innerHTML = jokeText;
        });
};