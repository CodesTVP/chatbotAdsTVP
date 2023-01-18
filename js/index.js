const dataAd = {
    name: '',
    file: '',
    email: '',
    link: '',
    local: '',
    pages: ''
}

function writeBot(title, message, callback) {
    const talk = document.querySelector('#talk').lastElementChild
    talk.insertAdjacentHTML("afterend", `<div class="question"><p>bot:</p><h3>${title}:</h3><hr/><p>${message}</p></div>`)
    callback(title)
    scrollBottom()
}

function writeUser(title) {
    const talk = document.querySelector('#talk').lastElementChild
    if (title === 'Nome') {
        talk.insertAdjacentHTML("afterend", `<div class="resp"><p>Você:</p><input type="text" id="name-ad" placeholder="Nome" /><button id="send-name">Enviar
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" viewBox="0,0,256,256">
            <g fill="#000001" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(10.66667,10.66667)"><path d="M21.4473,11.1055l-18,-9c-0.36182,-0.18102 -0.79706,-0.12619 -1.10269,0.1389c-0.30562,0.2651 -0.4214,0.68823 -0.29331,1.072l2.8945,8.6836l-2.8945,8.6836c-0.12808,0.38377 -0.01231,0.8069 0.29331,1.072c0.30562,0.2651 0.74087,0.31993 1.10269,0.1389l18,-9c0.33886,-0.16936 0.55293,-0.51567 0.55293,-0.8945c0,-0.37883 -0.21407,-0.72514 -0.55293,-0.8945zM4.7119,19.0264l2.0089,-6.0264h5.2792c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1h-5.2792l-2.0089,-6.0264l14.0523,7.0264z">
            </path></g></g></svg></button></div>`)
        addOnclickEvent('name', 'send-name')
        scrollBottom()
    } else if (title === 'Mídia') {
        talk.insertAdjacentHTML("afterend", `<div class="resp"><p>Você:</p><input type="file" id="midia-ad" /><button id="send-midia">Enviar
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" viewBox="0,0,256,256">
            <g fill="#000001" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(10.66667,10.66667)"><path d="M21.4473,11.1055l-18,-9c-0.36182,-0.18102 -0.79706,-0.12619 -1.10269,0.1389c-0.30562,0.2651 -0.4214,0.68823 -0.29331,1.072l2.8945,8.6836l-2.8945,8.6836c-0.12808,0.38377 -0.01231,0.8069 0.29331,1.072c0.30562,0.2651 0.74087,0.31993 1.10269,0.1389l18,-9c0.33886,-0.16936 0.55293,-0.51567 0.55293,-0.8945c0,-0.37883 -0.21407,-0.72514 -0.55293,-0.8945zM4.7119,19.0264l2.0089,-6.0264h5.2792c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1h-5.2792l-2.0089,-6.0264l14.0523,7.0264z">
            </path></g></g></svg></button></div>`)
        addOnclickEvent('midia', 'send-midia')
        scrollBottom()
    } else if (title === 'Email') {
        talk.insertAdjacentHTML("afterend", `<div class="resp"><p>Você:</p><input type="email" id="email-ad" placeholder="Email" /><button id="send-mail">Enviar
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" viewBox="0,0,256,256">
            <g fill="#000001" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(10.66667,10.66667)"><path d="M21.4473,11.1055l-18,-9c-0.36182,-0.18102 -0.79706,-0.12619 -1.10269,0.1389c-0.30562,0.2651 -0.4214,0.68823 -0.29331,1.072l2.8945,8.6836l-2.8945,8.6836c-0.12808,0.38377 -0.01231,0.8069 0.29331,1.072c0.30562,0.2651 0.74087,0.31993 1.10269,0.1389l18,-9c0.33886,-0.16936 0.55293,-0.51567 0.55293,-0.8945c0,-0.37883 -0.21407,-0.72514 -0.55293,-0.8945zM4.7119,19.0264l2.0089,-6.0264h5.2792c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1h-5.2792l-2.0089,-6.0264l14.0523,7.0264z">
            </path></g></g></svg></button></div>`)
        addOnclickEvent('email', 'send-mail')
        scrollBottom()
    } else if (title === 'Link') {
        talk.insertAdjacentHTML("afterend", `<div class="resp"><p>Você:</p><input type="url" id="link-ad" placeholder="Link" /><button id="send-link">Enviar
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" viewBox="0,0,256,256">
            <g fill="#000001" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(10.66667,10.66667)"><path d="M21.4473,11.1055l-18,-9c-0.36182,-0.18102 -0.79706,-0.12619 -1.10269,0.1389c-0.30562,0.2651 -0.4214,0.68823 -0.29331,1.072l2.8945,8.6836l-2.8945,8.6836c-0.12808,0.38377 -0.01231,0.8069 0.29331,1.072c0.30562,0.2651 0.74087,0.31993 1.10269,0.1389l18,-9c0.33886,-0.16936 0.55293,-0.51567 0.55293,-0.8945c0,-0.37883 -0.21407,-0.72514 -0.55293,-0.8945zM4.7119,19.0264l2.0089,-6.0264h5.2792c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1h-5.2792l-2.0089,-6.0264l14.0523,7.0264z">
            </path></g></g></svg></button></div>`)
        addOnclickEvent('link', 'send-link')
        scrollBottom()
    } else if (title === 'Local') {
        talk.insertAdjacentHTML("afterend", `<div class="resp"><p>Você:</p><select id="local-ad">
            <option value="header">Depois do cabeçalho</option>
            <option value="main">No feed ou conteúdo</option>
            <option value="aside">Na lateral direita (landscape)</option>
            <option value="footer">Antes Rodapé</option>
            <option value="anchor">Âncora (fixo)</option>
            <option value="float">Flutuante (fixo - 1:1)</option>
            <option value="private">Depois do feed (1:1)</option>
            </select><button id="send-local">Enviar
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" viewBox="0,0,256,256">
            <g fill="#000001" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(10.66667,10.66667)"><path d="M21.4473,11.1055l-18,-9c-0.36182,-0.18102 -0.79706,-0.12619 -1.10269,0.1389c-0.30562,0.2651 -0.4214,0.68823 -0.29331,1.072l2.8945,8.6836l-2.8945,8.6836c-0.12808,0.38377 -0.01231,0.8069 0.29331,1.072c0.30562,0.2651 0.74087,0.31993 1.10269,0.1389l18,-9c0.33886,-0.16936 0.55293,-0.51567 0.55293,-0.8945c0,-0.37883 -0.21407,-0.72514 -0.55293,-0.8945zM4.7119,19.0264l2.0089,-6.0264h5.2792c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1h-5.2792l-2.0089,-6.0264l14.0523,7.0264z">
            </path></g></g></svg></button></div>`)
        addOnclickEvent('local', 'send-local')
        scrollBottom()
    } else if (title === 'Páginas') {
        talk.insertAdjacentHTML("afterend", `<div class="resp"><p>Você:</p><select id="pages-ad">
            <option value="home">Somente na página inicial</option>
            <option value="post">Somente nas matérias</option>
            <option value="home-post">Na página inicial e nas matérias</option>
            </select><button id="send-pages">Enviar
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" viewBox="0,0,256,256">
            <g fill="#000001" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(10.66667,10.66667)"><path d="M21.4473,11.1055l-18,-9c-0.36182,-0.18102 -0.79706,-0.12619 -1.10269,0.1389c-0.30562,0.2651 -0.4214,0.68823 -0.29331,1.072l2.8945,8.6836l-2.8945,8.6836c-0.12808,0.38377 -0.01231,0.8069 0.29331,1.072c0.30562,0.2651 0.74087,0.31993 1.10269,0.1389l18,-9c0.33886,-0.16936 0.55293,-0.51567 0.55293,-0.8945c0,-0.37883 -0.21407,-0.72514 -0.55293,-0.8945zM4.7119,19.0264l2.0089,-6.0264h5.2792c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1h-5.2792l-2.0089,-6.0264l14.0523,7.0264z">
            </path></g></g></svg></button></div>`)
        addOnclickEvent('pages', 'send-pages')
        scrollBottom()
    }
}

function whatWrite(name) {
    if (name === 'name') {
        writeBot('Nome', 'Qual o nome que identificará o seu anúncio?', (title) => {
            writeUser(title)
        })
    } else if (name === 'midia') {
        writeBot('Mídia', 'Carregue o elemento de mídia que será exibido.', (title) => {
            writeUser(title)
        })
    } else if (name === 'email') {
        writeBot('Email', 'Em qual e-mail você deseja receber as atualizações do andamento da avaliação?', (title) => {
            writeUser(title)
        })
    } else if (name === 'link') {
        writeBot('Link', 'Para onde o usuário será enviado (site/URL) ao clicar no seu anúncio?', (title) => {
            writeUser(title)
        })
    } else if (name === 'local') {
        writeBot('Local', 'Onde você quer que seu anúncio seja exibido?', (title) => {
            writeUser(title)
        })
    } else if (name === 'pages') {
        writeBot('Páginas', 'Em quais páginas do site você deseja que seu anúncio seja exibido?', (title) => {
            writeUser(title)
        })
    }
}

function buttonClicked(name) {
    if (name === 'name') {
        dataAd.name = document.getElementById('name-ad').value
        whatWrite('midia')
    } else if (name === 'midia') {
        dataAd.file = '#midia-ad'
        whatWrite('email')
    } else if (name === 'email') {
        dataAd.email = document.getElementById('email-ad').value
        whatWrite('link')
    } else if (name === 'link') {
        dataAd.link = document.getElementById('link-ad').value
        whatWrite('local')
    } else if (name === 'local') {
        dataAd.local = document.getElementById('local-ad').value
        whatWrite('pages')
    } else if (name === 'pages') {
        dataAd.pages = document.getElementById('pages-ad').value
        writeBot('Obrigado', `Muito obrigado por utilizar nosso serviço, em breve entraremos em contato com você pelo e-mail informado.`, () => { })
        writeRequest(dataAd)
    }
}

function addOnclickEvent(name, id) {
    document.getElementById(id).addEventListener('click', () => {
        buttonClicked(name)
        document.getElementById(id).disabled = 'disabled'
    })
}

function scrollBottom() {
    const objScrDiv = document.getElementById('talk')
    objScrDiv.scrollTop = objScrDiv.scrollHeight
}

whatWrite('name')