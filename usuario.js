const apiEndpoint = "http://localhost:8080/usuario"; 

document.getElementById('sendDataBtn').addEventListener('click', function () {
    const nomeUsuario = document.getElementById('name').value;
    const emailUsuario = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    if (nomeUsuario && emailUsuario && password) {
        const payload = {
            nomeUsuario: nomeUsuario,
            emailUsuario: emailUsuario,
            password: password
        };

        fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao enviar dados: ${ response.status}`);
        }
                return response.json();
            })
            .then(data => {
                alert('Dados enviados com sucesso!');
                console.log('Resposta da API:', data);
            })
            .catch(error => {
                alert(`Erro: ${error.message}`)
        });
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});