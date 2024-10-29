// Exemplo de como armazenar dados do cadastro no localStorage
document.getElementById('professional-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obtém os dados do formulário
    const nome = document.getElementById('nome').value;
    const especialidade = document.getElementById('especialidade').value;
    const experiencia = document.getElementById('experiencia').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const foto = document.getElementById('foto').files[0];
    
    const fotoUrl = foto ? URL.createObjectURL(foto) : '';

    // Cria um objeto com os dados do cadastro
    const dadosCadastro = {
        nome: nome,
        especialidade: especialidade,
        experiencia: experiencia,
        email: email,
        telefone: telefone,
        cidade: cidade,
        fotoUrl: fotoUrl
    };

    // Armazena o objeto no localStorage em formato JSON
    localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));

    // Redireciona para a página de perfil após o cadastro
    window.location.href = "profile.html"; // Redireciona para a página de perfil
});
