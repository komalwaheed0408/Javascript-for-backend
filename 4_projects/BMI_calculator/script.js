const form = document.querySelector('form');
//this usecase will give you an empty form therefor we will access the values from inputs after clicking on a button, therefore we will use 'submit' event:
//e.g;
//const height = parseInt(document.querySelector('#height').value);
//the above line can give you an empty value, since we are not accessing it after clicking the button


//Now, let's use an eventListener:
form.addEventListener('submit', function (e) {
    e.preventDefault();    //this prevents to send the value to server

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results'); //here we don't use parseInt because because this is div and it is already getting value in form of integer.

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    } 

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //in this same scope right after calculating the bmi value, we need to show the result too:

        results.innerHTML = `<span>${bmi}</span>`


    }




});