
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

    let coll_id = document.createElement('th')
    coll_id.innerHTML = data.id;

    let coll_name = document.createElement('th')
    coll_name.innerHTML = data.name;

    let coll_username = document.createElement('th')
    coll_username.innerHTML = data.username;

    let coll_email = document.createElement('th')
    coll_email.innerHTML = data.email;

    let coll_adderss = document.createElement('th')
    coll_adderss.innerHTML = data.address.street;

    let coll_company = document.createElement('th')
    coll_company.innerHTML = data.company.name;

    row.appendChild(coll_id);
    row.appendChild(coll_name);
    row.appendChild(coll_username);
    row.appendChild(coll_email);
    row.appendChild(coll_adderss);
    row.appendChild(coll_company);

    tableUser.appendChild(row);

}



// teste