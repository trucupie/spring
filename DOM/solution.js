document.addEventListener("DOMContentLoaded", function ()
{
    document.getElementById('task1').innerText = "Changed using 'innerText'.";

    document.getElementById('task2').innerHTML = '<button>submit</button>';

    //task 3
    document.body.style.backgroundColor = '#232323';

    // task 4
    document.querySelectorAll('.item').forEach(element => {
        element.style.border = '2px solid green';
    });

    // task 5
    document.getElementById('task5').setAttribute('href', 'https://www.springboard.com/');

    //task 6
    document.getElementById('task6').value = 'DOM Master';

    //task 7
    document.getElementById('task7').classList.add('new-class');

    //task 8
    const button = document.createElement('button');
    button.innerText = 'New Button';
    document.getElementById('task8').append(button);

    // task 9
	const task9Element = document.getElementById("task9");
	task9Element.parentNode.removeChild(task9Element);
});