const firebaseConfig = {
    apiKey: "AIzaSyCUF5nWPW7NkCtz8WuNbpgnbq_7W5nwa2Q",
    authDomain: "register-your-ad.firebaseapp.com",
    projectId: "register-your-ad",
    storageBucket: "register-your-ad.appspot.com",
    messagingSenderId: "183527583427",
    appId: "1:183527583427:web:6534810ec7b729f352fc76"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

function writeRequest({ name, file, email, link, local, pages }) {
    const storageRef = firebase.storage().ref(`${name}/` + 'elemMedia')
    console.log(document.querySelector(file))
    const fileVar = document.querySelector(file).files[0]
    const task = storageRef.put(fileVar)

    document.querySelector('.loading').classList.remove('hidden')
    
    task.on('state_changed',
    function progress(snapshot) {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        document.querySelector('#progress-upload').setAttribute('value', `${percentage}`)
        document.querySelector('.percentage').innerHTML = `${Math.floor(percentage)}% Carregado.`
    },
    function error(err) {
        alert('Um erro ocorreu enquanto o elemento de mídia era carregado. Tente novamente. ' + err)
        document.querySelector('.loading').classList.add('hidden')
    },
    function complete() {
        document.querySelector('.loading').classList.add('hidden')
            task.snapshot.ref.getDownloadURL().then(function (imageURL) {
                db.collection('anunciantes').doc(name)
                    .set({ name, imageURL, email, link, local, pages, checked: false })
                alert('Inserido com sucesso!')
            })
        }
    )
}