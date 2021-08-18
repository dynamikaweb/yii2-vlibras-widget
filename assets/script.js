document.addEventListener('DOMContentLoaded', async () => {
    const scriptElementVlibras = document.createElement('script');
    scriptElementVlibras.type = 'text/javascript';
    scriptElementVlibras.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    scriptElementVlibras.addEventListener('load', async () => {
        await new window.VLibras.Widget('https://vlibras.gov.br/app');
    });

    await document.body.insertAdjacentHTML('beforeend', `{main.html}`);
    await document.head.appendChild(scriptElementVlibras);
});