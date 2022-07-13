
const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
    .then(response => response.json())
    .then(dataJson => {
        dataJson.forEach(element => {
            insertElements(element)
        });
    })
    .catch(erro => console.log(`Deu erro \n${erro}`));



function insertElements(dataJson) {

    const tableUser = document.querySelector('.tableUser');
    let data = dataJson;

    const row = document.createElement('tr')

    let coll_1 = document.createElement('th')
    coll_1.innerHTML = data.id;

    let coll_2 = document.createElement('th')
    coll_2.innerHTML = data.name;

    let coll_3 = document.createElement('th')
    coll_3.innerHTML = data.username;

    let coll_4 = document.createElement('th')
    coll_4.innerHTML = data.email;

    let coll_5 = document.createElement('th')
    coll_5.innerHTML = data.address.street;

    let coll_6 = document.createElement('th')
    coll_6.innerHTML = data.company.name;

    row.appendChild(coll_1);
    row.appendChild(coll_2);
    row.appendChild(coll_3);
    row.appendChild(coll_4);
    row.appendChild(coll_5);
    row.appendChild(coll_6);

    tableUser.appendChild(row);

}
