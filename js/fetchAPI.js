const cepInput = document.querySelector("#cep");
const search = document.querySelector("#search");
const cepNumber = document.querySelector(".cep-number");
const log = document.querySelector(".logradouro");
const bairro = document.querySelector(".bairro");
const localidade = document.querySelector(".localidade");
const uf = document.querySelector(".uf");
const ddd = document.querySelector(".ddd");
const closeIcon = document.querySelector("#icon");
const cepCard = document.querySelector(".cep-result");
const error = document.querySelector(".error");

cepInput.addEventListener("input", () => {
  const regExp = /(\d{3})(\d{3})(\d{3})(\d{2})/g
  
  if(cepInput.value.length == 2) {
    cepInput.value += '.';
  } else if(cepInput.value.length == 6) {
    cepInput.value += '-'
  }
  
  if (cepInput.value.match(regExp)) {
    error.style.display = "flex";
  }
});

search.addEventListener("click", () => {
  const empty = document.querySelector(".empty-input");
  
  if (cepInput.value === "") {
    empty.style.display = "flex";
  } else {
    empty.style.display = "none";
    
    cepInput.value = cepInput.value.replace(/(\.|\/|\-)/g,"");
    console.log(cepInput.value)
    getCep();
  }
});

const getCep = () => {
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
    

      if (cep.hasOwnProperty("erro")) {
        error.style.display = "flex";
        cepCard.style.visibility = "hidden";
      } else {
       // console.log(response.status);
        
        error.style.display = "none";
        cepCard.style.visibility = "visible";
        cepNumber.textContent = `${cep.cep}`;
        log.textContent = `${cep.logradouro}`;
        bairro.textContent = `${cep.bairro}`;
        uf.textContent = `${cep.uf}`;
        ddd.textContent = `${cep.ddd}`;
        localidade.textContent = `${cep.localidade}`;
      }

    
    })
    .catch((error) => console.log(error));
};

closeIcon.addEventListener("click", () => {
  cepCard.style.visibility = "hidden";
  cepInput.value = "";
});
