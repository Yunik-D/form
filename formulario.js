
    function validarFormulario() {
      const senha = document.getElementById('senha').value;
      const confirmar = document.getElementById('confirmar').value;

      if (senha !== confirmar) {
        alert("As senhas não coincidem!");
        return false;
      }

      alert("Cadastro enviado com sucesso!");
      return true;
    }
 