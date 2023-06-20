items = document.querySelectorAll(".list-items__item .card .item__images img")
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {})
imageOfModal = document.querySelector('#exampleModal .modal-body img')

console.log(imageOfModal.src);

items.forEach(item => {
    item.addEventListener('click', () => {
        
        imageOfModal.src = item.src;
        
        myModal.show();
    })
})


heart= document.getElementsByClassName('heart')
heart[0].className = "fa-solid fa-heart";
console.log(heart[0])