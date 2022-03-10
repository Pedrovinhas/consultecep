const cepInput = document.querySelector("#cep");
const search = document.querySelector("#search");
const cepNumber = document.querySelector(".cep-number");
const log = document.querySelector(".logradouro");
const bairro = document.querySelector(".bairro");
const localidade = document.querySelector(".localidade");
const uf = document.querySelector(".uf");
const ddd = document.querySelector(".ddd");

search.addEventListener("click", () => {
  getCep();
});

function getCep() {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://viacep.com.br/ws/${cepInput.value}/json/`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    )
    .then((response) => {
      const cep = response.data;

      
      
      log.textContent = `${cep.logradouro}`;
      cepNumber.textContent = `${cep.logradouro}`;
      bairro.textContent = `${cep.bairro}`;
      uf.textContent = `${cep.uf}`;
      ddd.textContent = `${cep.ddd}`;
      localidade.textContent = `${cep.localidade}`;

    
      console.log(cep);
    })
    .catch((error) => console.log(error));
}
