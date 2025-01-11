document.addEventListener('DOMContentLoaded', function(){
    const boxContainer = document.getElementById('box-container');
    const newBoxButton = document.getElementById('new-box-button');
    const colorForm = document.getElementById('color-form');
    const colorInput = document.getElementById('color-input');

    let boxColor = null;
    let boxIDCounter = 0;

    const isBox = (element) =>  element.classList.contains('box');

    function onSetColorFormSubmitted(event){
        event.preventDefault();

        boxColor = colorInput.value.trim();
        if (boxColor === '') {
            alert('Please enter a background color');
            return;
        }
        colorInput.value = '';

        document.querySelectorAll('.box').forEach(function(box){
            box.style.backgroundColor = boxColor;
        });
    }

    function createNewBox() {
        const newBoxId = boxIDCounter;
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.textContent = `Box ${boxIDCounter}`;
        newBox.style.backgroundColor = boxColor;
        newBox.setAttribute('data-box-id', newBoxId);

        boxContainer.appendChild(newBox);

        boxIDCounter++;
    }

    function onBoxContainerDoubleClick(event) {
        const target = event.target;
        if (isBox(target)) {
            target.parentNode.removeChild(target);
        }
    }

    function onBoxContainerMouseOver(event) {
        const target = event.target;
        if (isBox(target)) {
            target.innerText = `X: ${event.clientX}, Y: ${event.clientY}`;
        }
    }

    function onBoxContainerMouseOut(event) {
        const target = event.target;
        if (isBox(target)) {
            target.innerText = `Box ${target.getAttribute('data-box-id')}`;
        }
    }

    function onKeyDown(event) {
        if(event.target.id === 'color-input') {
            return;
        }

        if(event.key === 'N' || event.key === 'n') {
            createNewBox();
        }
    }

    colorForm.addEventListener('submit', onSetColorFormSubmitted);

    newBoxButton.addEventListener('click', createNewBox);

    boxContainer.addEventListener('dblclick', onBoxContainerDoubleClick);

    boxContainer.addEventListener('mouseover', onBoxContainerMouseOver);

    boxContainer.addEventListener('mouseout', onBoxContainerMouseOut);

    document.addEventListener('keydown', onKeyDown);
});