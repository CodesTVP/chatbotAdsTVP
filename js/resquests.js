const fullHTML = []
const ulAds = document.querySelector('ul#ads')

db.collection('anunciantes').onSnapshot(data => {
    data.docs.map(doc => {
        fullHTML.push(generateHTML(doc.data()))
    })
    ulAds.innerHTML = fullHTML.join('')
})

function generateHTML(object) {
    return `
        <li>
            <h2>${object.name}</h2>
            <hr/>
            <img src="${object.imageURL}" alt="ad" width="500px" />
            <p><strong>E-mail:</strong> ${object.email}</p>
            <p><strong>Link:</strong> ${object.link}</p>
            <p><strong>Local:</strong> ${object.local}</p>
            <p><strong>Páginas:</strong> ${object.pages}</p>
        </li>
    `
}