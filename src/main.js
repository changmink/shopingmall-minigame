
const getData = (target) => {
    fetch('../data/data.json')
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            const items = document.querySelector("ul")
            json.data.forEach(item => {
                newItem =   `<li>
                                <img class="${item.color} ${item.type} ${item.gender} ${item.size} image" src="${item.image}"/>
                                <span>${item.gender}, ${item.size} size</span>
                            </li>` 
                if(newItem.includes(target)) {
                    items.innerHTML += newItem
                }
                if(!target){
                    items.innerHTML += newItem
                }
            });
        });
}
const reset = ()  => {
    const items = document.querySelector("ul")
    items.innerHTML = ""
}
const tee = () => {
    reset()
    getData('tee')
}
const pants = () => {
    reset()
    getData('pants')
}
const skirt = () => {
    reset()
    getData('skirt')
}
const blue = () => {
    reset()
    getData('blue')
}
const yellow = () => {
    reset()
    getData('yellow')
}
const pink = () => {
    reset()
    getData('pink')
}
getData()
