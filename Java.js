window.addEventListener("load", function () {
  //Animação
  var modal = document.getElementById("modal")
  modal.classList.add("visible")
  setTimeout(function () {
    modal.classList.add("hidden")
  }, 5000)
  setTimeout(function () {
    modal.classList.add("hidden2")
  }, 5900)

  //Variáveis definidas pelo Id

  //botões
  const soma = document.getElementById("butao1")
  const sub = document.getElementById("butao2")
  const div = document.getElementById("butao3")
  const mult = document.getElementById("butao4")
  const modu = document.getElementById("butao5")
  const exp = document.getElementById("butao6")
  const inc = document.getElementById("butao7")
  const afirm = document.getElementById("butao8")

  //tags
  const resposta = document.getElementById("resposta")
  const alerta = document.getElementById("alert")
  var texto = document.getElementById("para")
  var delay = 3000
  var btn = 1000

  //CSS
  var g = "green"
  var r = "red"

  //Botões desabilitados inicialmente
  sub.disabled = true;
  div.disabled = true;
  mult.disabled = true;
  modu.disabled = true
  exp.disabled = true;
  inc.disabled = true;
  afirm.disabled = true;

  //soma
  soma.addEventListener("click", function () {
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    if (!isNaN(n1) && !isNaN(n2)) {

      //exibe a resposta da soma
      resposta.innerText = (n1 + n2)

      if (sub.disabled) {
        //Habilita o botão da subtração
        sub.disabled = !true;
        mod.classList.add("visible")
        mod.style.backgroundColor = g
        para.innerText = "Botão da subtração habilitado"
        setTimeout(function () {
          mod.classList.add("hidden")
        }, 2000)
        mod.classList.remove("hidden")
        setTimeout(function () {
          mod.classList.add("hidden2")
        }, 2900)
        mod.classList.remove("hidden2")
      }

    } else {
      //Variáveis
      let message = "você deve escrever "
      let timeoutId;

      //Mensagem de erro
      if (isNaN(n1) && isNaN(n2)) {
        message += "nos dois campos."
      } else if (isNaN(n1)) {
        message += "no primeiro campo também."
      } else if (isNaN(n2)) {
        message += "no segundo campo também."
      }

      //Configurações do aviso
      mod.classList.add("visible")
      texto.innerText = message
      mod.style.backgroundColor = r
      soma.disabled = true

      //Temporizador das configurações
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        mod.classList.add("hidden")
      }, 3000)
      mod.classList.remove("hidden")
      timeoutId2 = setTimeout(function () {
        mod.classList.add("hidden2")
        soma.disabled = !true
      }, 3900)
      mod.classList.remove("hidden2")
    }
  })

  //subtração
  sub.addEventListener("click", function () {
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    if (!isNaN(n1) && !isNaN(n2)) {
      //Exibe a resposta da subtração
      resposta.innerText = (n1 - n2)

      //Ativa o botão da divisão
      if (div.disabled) {
        div.disabled = !true

        //Avisa sobre a ativação
        mod.classList.add("visible")
        mod.style.backgroundColor = g
        para.innerText = "Botão da divisão habilitado"
        setTimeout(function () {
          mod.classList.add("hidden")
        }, 2900)
        mod.classList.remove("hidden")
        setTimeout(function () {
          mod.classList.add("hidden2")
        }, 3900)
        mod.classList.remove("hidden2")

        //Aviso de progresso do teste
        setTimeout(function () {
          overlar.classList.add("visible")
          modelo.classList.add("visible")
        }, 3900)
        setTimeout(function () {
          afirm.disabled = !true
        }, 5900)
        afirm.addEventListener("click", function () {
          overlar.classList.add("hidden")
          modelo.classList.add("hidden")
          setTimeout(function () {
            overlar.classList.remove("visible")
            modelo.classList.remove("visible")
          }, 900)
        })
      }
    } else {

      //Variáveis
      let message = "Você deve escrever "
      let timeoutId;
      //Aviso dos erros
      if (isNaN(n1) && isNaN(n2)) {
        message += "nos dois campos."
      } else if (isNaN(n1)) {
        message += "no primeiro campo também."
      } else if (isNaN(n2)) {
        message += "no segundo campo também."
      }

      //Configurações do aviso
      mod.classList.add("visible")
      mod.style.backgroundColor = r
      texto.innerText = message
      sub.disabled = true

      //Temporizador das configurações
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        mod.classList.add("hidden")
      }, 3000)
      mod.classList.remove("hidden")
      timeoutId2 = setTimeout(function () {
        mod.classList.add("hidden2")
        sub.disabled = !true
      }, 3900)
      mod.classList.remove("hidden2")
    }
  })

  //Divisão
  div.addEventListener("click", function () {
  })
})
