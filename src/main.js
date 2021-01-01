const loadItems = () => {
    return fetch('../data/data.json')
        .then((response) => response.json())
        .then((json) => json.data)
}

const distplayItems = (items) => {
    const container = document.querySelector(".items")
    console.log(container)
    container.innerHTML = items.map(item => createHTMLString(item)).join('')
}

const createHTMLString = (item) => {
    return `<li class="item">
        <img class="${item.color} ${item.type} ${item.gender} ${item.size} image" src="${item.image}"/>
        <span>${item.gender}, ${item.size} size</span>
    </li>`
}

const setEventListeners = (items) => {
    const logo = document.querySelector('.logo')
    const buttons = document.querySelector('.menu')
    logo.addEventListener('click', () => distplayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

const onButtonClick = (event, items) => {
    const dataset = event.target.dataset
    const key = dataset.key;
    const value = dataset.value;

    if(key == null || value == null) {
        return
    }

    distplayItems(items.filter(item => item[key] == value))
}

loadItems()
    .then(items => {
        distplayItems(items);
        setEventListeners(items);
    })
    .catch(console.log)
