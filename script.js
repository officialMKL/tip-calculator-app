const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Event', event);
    const formData = new FormData(event.target);

    let tipPercentage = +formData.get('tip');
    const bill = +formData.get('bill');
    const personCount = +formData.get('personCount');


    if (!tipPercentage) {
        tipPercentage = +formData.get('custom-tip') ?? 0;
    }

    console.log('Values: ', bill, tipPercentage, personCount);

    const tipAmount = (bill * tipPercentage) / 100;

    const tipPerPerson = tipAmount / personCount;
    const totalPerson = (bill + tipAmount) / personCount;

    document.getElementById('totalPerson').innerText = `$${totalPerson}`;
    document.getElementById('tipPerson').innerText = `$${tipPerPerson}`;
});

