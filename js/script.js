
const ul = document.querySelector(".list");

for (let i = 1; i <= 100; i++) {

    const newLi = document.createElement('li');

    // console.log(newLi);
    newLi.innerHTML = `${i}`;
    ul.append(newLi);

    if (i % 3 == 0 && i % 5 == 0) {
        newLi.style.backgroundColor = 'lightcoral';
        newLi.innerHTML = 'FizzBuzz'
        newLi.style.color = 'black';
    }

    else if (i % 3 == 0) {
        newLi.style.backgroundColor = 'lightgreen';
        newLi.innerHTML = 'Fizz';
        newLi.style.color = 'black';
    }
    
    else if (i % 5 == 0) {
        newLi.style.backgroundColor = 'gold';
        newLi.innerHTML = 'Buzz';
        newLi.style.color = 'black';
    } 
    
}
    