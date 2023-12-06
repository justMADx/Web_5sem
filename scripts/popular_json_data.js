document.addEventListener('DOMContentLoaded', async  function(){
    const loader = document.getElementById('loader');

    let flag = true;
    document.getElementById('refreshButton').addEventListener('click', function(){
        flag =!flag;
        update(loader, flag);
    })
    await update(loader, flag);
})


async function update(loader, flag){
    let url = 'https://jsonplaceholder.typicode.com/albums/1/photos';

    if(flag){
        url+='?id_lte=16';
    }
    else
    {
        url+='?id_gte=17&&id_lte=32';
    }

    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('Response was not ok');
        }
        const items = await response.json();
        loader.style.display = 'none';
        render(items);
    } catch (error){
        alert("Проблемы с подключением к серверу. \n Обновите страницу");
        console.error('Error while receiving data:', error);
        loader.style.display = 'none';
    }
}
function render(items){
    const itemListElement = document.getElementById('photoGrid');
    itemListElement.innerHTML = '';
    const template = document.getElementById('shop-item-template');

    items.forEach(item =>{
        const itemElement = document.importNode(template.content, true);
        itemElement.querySelector('.image-item').src = item.thumbnailUrl;
        itemElement.querySelector('.image-item').alt = item.title.substr(1,9);
        itemElement.querySelector('.shop-item_name').textContent = item.title.substr(1,9);
        itemListElement.appendChild(itemElement);
    })
}
