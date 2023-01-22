const rollDice = document.getElementById('rollDice').addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const id = document.getElementById('id');
            const advice = document.getElementById('advice');

            id.textContent = data.slip.id
            advice.textContent = data.slip.advice

        })
        .catch(err => console.log(err))
})

