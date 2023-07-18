const url = 'http://localhost:3000';
let foodList = document.getElementById('foodList');
let clotesList = document.getElementById('clothesList');
let screencareList = document.getElementById('screenCareList');
function save() {
    console.log(`hello`);
    const price = document.getElementById('price')
    const item = document.getElementById('item');
    const category = document.getElementById('category')
    const obj = {
        price: price.value,
        item: item.value,
        category: category.value
    };
    axios.post(`${url}/product`, obj)
        .then(result => {
            console.log(result);
            print(result.data)
        })
        .catch(err => console.log(err));
    price.value = ''
    item.value = ''
    category.value = ''
}
function removeDisplay(id) {
    console.log(id);
    document.getElementById(id).remove();
}
function remove(id) {
    removeDisplay(id);
    axios.delete(`${url}/product/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}
function print({ id, price, item, category }) {
    console.log(id, price, item, category);
    let ele = `
                    <div class="row-12" id="${id}">
                        <label for="price">Price:</label>
                        <label for="price">${price}</label>
                        <label for="item">  Item: </label>
                        <label for="item">${item}</label>
                        <label for="category">  Category: </label>
                        <label for="category">${category}</label>
                        <button type="button" onclick="remove(`+ `'${id}'` + `)">Delete</button>
                    </div>
            `;
    if (category == 'food')
        foodList.innerHTML += ele;
    else if (category == 'clothes')
        clotesList.innerHTML += ele;
    else
        screencareList.innerHTML += ele;
}
window.addEventListener('DOMContentLoaded', () => {

    axios.get(`${url}/product`)
        .then(resolve => {
            console.log(resolve.data);
            for (let i = 0; i < resolve.data.length; i++) {
                print(resolve.data[i]);

            }
        })
        .catch((err) => {
            console.log(err);
        })
});