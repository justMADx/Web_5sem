const wishForm = document.querySelector('.wish-form');
const wishInput = document.querySelector('.wish-input');
const wishItemsList = document.querySelector('.wish-items');

let wishes = [];

getFromLocalStorage();

wishForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addWish(wishInput.value);
});


function isNotBlank(input) {
    return input.trim().length > 0;
}

function addWish(item) {
    if (isNotBlank(item)) {
        const wish = {
            id: Date.now(),
            name: item,
            completed: false
        };

        wishes.push(wish);
        addToLocalStorage(wishes);
        wishInput.value = '';
    }
}

function renderWishes(wishes) {
    const patternToReplaceName = 'WishTemplate';
    const checkBoxValue = 'checkboxvalue';
    let template = document.querySelector('#wish-template');
    wishItemsList.innerHTML = '';

    wishes.forEach(function (item) {
        let checked = item.completed ? 'checked' : null;
        let liElem = document.createElement('li');
        liElem.setAttribute('class', 'item');
        liElem.setAttribute('data-key', item.id);

        if (item.completed === true) {
            liElem.innerHTML = liElem.innerHTML.replace(checkBoxValue, checked);
            liElem.classList.add('checked');
        }
        liElem.append(template.content.cloneNode(true));
        liElem.innerHTML = liElem.innerHTML.replace(patternToReplaceName, item.name);

        wishItemsList.prepend(liElem);
    });
}

function addToLocalStorage(wishes) {
    localStorage.setItem('wishes', JSON.stringify(wishes));
    renderWishes(wishes);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('wishes');
    if (reference) {
        wishes = JSON.parse(reference);
        renderWishes(wishes);
    }
}

function toggle(id) {
    wishes.forEach(function (item) {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(wishes);
}

function deleteWish(id) {
    wishes = wishes.filter(function (item) {
        return item.id != id;
    });
    addToLocalStorage(wishes);
}

wishItemsList.addEventListener('click', function (event) {
    if (event.target.type === 'checkbox') {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }

    if (event.target.classList.contains('delete-button')) {
        deleteWish(event.target.parentElement.getAttribute('data-key'));
    }
});