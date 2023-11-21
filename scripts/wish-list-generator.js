const wishForm = document.querySelector('.wish-form');
const wishInput = document.querySelector('.wish-input');
const wishItemsList = document.querySelector('.wish-items');

let wishes = [];

getFromLocalStorage();

wishForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addWish(wishInput.value);
});

function addWish(item) {
    if (item !== '') {
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
    wishItemsList.innerHTML = '';

    wishes.forEach(function (item) {
        const checked = item.completed ? 'checked' : null;

        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        if (item.completed === true) {
            li.classList.add('checked');
        }

        li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>${item.name}<button class="delete-button">X</button>`;
        wishItemsList.append(li);
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