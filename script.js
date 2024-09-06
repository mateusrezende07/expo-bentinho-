document.addEventListener('DOMContentLoaded', () => {
    const ipAddressElement = document.getElementById('ip-address');

    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddressElement.textContent = data.ip;
        })
        .catch(error => {
            ipAddressElement.textContent = 'Erro ao obter o IP';
            console.error('Erro ao buscar IP:', error);
        });
});