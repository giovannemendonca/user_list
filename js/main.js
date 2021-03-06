
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

    let data = dataJson;

    const tableUser = document.querySelector('.tableUser');
    const row = document.createElement('tr')

    let coll_id = document.createElement('th')
    coll_id.innerHTML = data.id;
    row.appendChild(coll_id);

    let coll_name = document.createElement('th')
    coll_name.innerHTML = data.name;
    row.appendChild(coll_name);

    let coll_username = document.createElement('th')
    coll_username.innerHTML = data.username;
    row.appendChild(coll_username);

    let coll_email = document.createElement('th')
    coll_email.innerHTML = data.email;
    row.appendChild(coll_email);

    let coll_adderss = document.createElement('th')
    coll_adderss.innerHTML = data.address.street;
    row.appendChild(coll_adderss);

    let coll_company = document.createElement('th')
    coll_company.innerHTML = data.company.name;
    row.appendChild(coll_company);

    tableUser.appendChild(row);
}

var fetchId = document.querySelector('#id-user');

fetchId.addEventListener('click', (event) => {
    event.preventDefault();

    var id = document.querySelector('#inputSearch').value;
    let result = document.querySelector('#result');


    const response = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
            result.innerHTML =
            `Nome: ${data.name}<br>
            Nome Usuário: ${data.username}<br>
            Email: ${data.email}<br>
            Endereço: ${data.address.street}<br>
            Empresa: ${data.company.name}`;
        })
        .catch((erro) => alert(`Erro ao localizar ID \nPor Favor tente Novamente!!! \n${erro}`))
})
