function apiQuery(e){
  e.preventDefault();

  const name = document.getElementById("name");
  const user = name.value;
  const linkDefault = "https://api.github.com/users/";
  const consult = linkDefault + user;


  if(user == '' || user == Number(user)){
    alert('Verifique se digitou seu usuário corretamente');
    name.focus();
    return;
  }
  fetch(consult).then((response => {
  return response.json()
  })).then((collectedData) =>{

    const itens = {
      login: collectedData.login,
      id: collectedData.id,
      url: collectedData.url,
      avatar: collectedData.avatar_url,
    }

    return getData(itens)
  })
}


function getData(data) {

  const login = document.getElementById("login");
  const id = document.getElementById("id");
  const url = document.getElementById("url");
  const avatar = document.getElementById("avatar");
  const boxResponse = document.getElementById('box-response');
  console.log(avatar)
  boxResponse.style.display = 'flex';
  login.innerText = data.login;
  id.innerText = data.id;
  url.innerText = data.url;
  avatar.setAttribute('src', data.avatar)
  

  
}


const send = document.getElementById("send");
send.addEventListener("click", apiQuery);
