const renderItems = data=>{
    data.forEach(element => {
        // console.log(element)
    });
}

fetch('https://test-dostavka-edy-default-rtdb.firebaseio.com/db/partners.json')
.then(response=>response.json())
.then(data=>{
    renderItems(data)
})
// метод обрабатывает ошибку. Если произойдет ошибка. то мы можем чтото тут сделать
.catch((error)=>{ 
    console.log(error)
})