# Consulta via CEP

<div align="center">
    <img src="./design/design-desktop.png" width='100%'>
</div>

## Informações
Esse projeto consome a **API [viaCEP](https://viacep.com.br/)** e permite ao usuário consultar o CEP completo com Bairro, Rua, UF etc. após digitá-lo. Além disso, foi feito também a validação do input, caso não siga a formatação desejada ou busque um CEP inexistente. Na parte do Design utilizei o conceito de glassmorphism e tentei deixar o menos poluído possível.

## 💻 Tecnologias

- HTML5
- SCSS
- Javascript 

### Dependências
- Axios
- CORS

## 🧱 Implementações

- [X] AXIOS para buscar dados da API
- [X] Resolução do conflito com CORS usando ``headers``
- [X] Resolução do número limitado de chamadas para API
- [X] Tratar validação do CPF no ``input`` com ``RegExp``
- [X] Tratar erros para CPFs inválidos.
- [X] Pop-up para mensagem de erro em tela 
- [X] Adicionar ícone de fechar nas informações do card
- [ ] Construir o README
- [ ] Refatoração do código
<<<<<<< HEAD

## Como usar

Para clonar e executar este aplicativo, você precisará do [Git] (https://git-scm.com). Digite no seu terminal:

```bash
# Clone este repositório
$ git clone https://github.com/pedrovinhas/consultecep

# Vá para o repositório
$ cd consultecep

# Abra no navegador ou Live-server
```
---
> Feito por Pedro Henrique Vinhas 🪐
=======
>>>>>>> 1c35bddcc9023f8e289c45387545e99878225ee3
