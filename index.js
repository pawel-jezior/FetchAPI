console.log("Hello");

fetch("https://api.github.com/users/pawel-jezior/repos")
  .then(resp => resp.json())
  .then(resp => {
    for (let repo of resp){
        const {name, html_url} = repo;
        const repositoryList = document.querySelector('.list--js');
        const myTemplate = 
        `<li>
        ${name} <a href="${html_url}" title="link do repozytorium ${name} na githubie">link od githuba</a>
        </li>`;
        repositoryList.innerHTML += myTemplate;
    }
  })
  .catch(error => {
      console.log('nie można wyświetlić rezytoriów')
  });

  
