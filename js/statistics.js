const firebaseConfig = {
    apiKey: "AIzaSyA2UrVcfcR3_co-0SRvggAfritNB832t-4",
    authDomain: "send-mail-news.firebaseapp.com",
    projectId: "send-mail-news",
    storageBucket: "send-mail-news.appspot.com",
    messagingSenderId: "735458348101",
    appId: "1:735458348101:web:9448e2b6fd09b61efee72c"
}


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

$('[data-login]').click(() => {
    auth.signInWithRedirect(provider)
})

function logout() {
    $('[btn-add]').addClass('disabled').attr('disabled', '')
    firebase.auth().signOut().then(function () {
        $('[user-img]').attr('src', './assets/user.png')
        $('[user-name]').html('User')
        $('[user-email]').html('exmail@gmail.com')
        $('[data-logout]').addClass('disabled').attr('disabled', '')
        $('[data-login]').removeClass('disabled').removeAttr('disabled')
        window.localStorage.setItem('userId', 'no-id')
    }, function (error) {
        console.error('Sign Out Error', error);
    })
        .then(() => window.location.reload(true))
}

$('[data-logout]').click(function () {
    logout()
})

firebase.auth().onAuthStateChanged(async user => {
    $('.loader-main').css('display', 'none')
    if (user) {
        $('[user-img]').attr('src', user.photoURL)
        $('[user-name]').html(user.displayName)
        $('[user-email]').html(user.email)
        $('[data-login]').addClass('disabled').attr('disabled', '')
        $('[data-logout]').removeClass('disabled').removeAttr('disabled')
        this.userEmail = user.email
        window.localStorage.setItem('userId', this.userId)

        db.collection('anunciantes').get().then(data => {
            let adsThisUser = []
            data.docs.map(doc => {
                if (doc.data().mail === this.userEmail) {
                    adsThisUser.push(doc.data())
                }
            })
            console.log(adsThisUser)
            if (adsThisUser.length > 0) {
                document.querySelector('main h2').remove()
                document.querySelector('main a').remove()
                adsThisUser.forEach(doc => {
                    let statistics = []
                    db.collection('statistics').doc(doc.id).get().then(thisDoc => {
                        statistics = thisDoc.data()
                        $('main ul').append(`
                            <li>
                                <h2>${doc.name}</h2>
                                <hr />
                                <h2>Dados</h2>
                                <p><strong>Mídia:</strong></p>
                                <img src="${doc.image}" alt="Mídia do anúncio" width="500px" />
                                <p><strong>Email:</strong> ${doc.mail}</p>
                                <p><strong>Preço:</strong> ${doc.price}</p>
                                <p><strong>Validade:</strong> ${new Date(doc.contractValid).toLocaleDateString()}</p>
                                <p><strong>Link:</strong> ${doc.url}</p>
                                <p><strong>Local:</strong> ${doc.local}</p>
                                <p><strong>Páginas:</strong> ${doc.showPages}</p>
                                <p><strong>Formato:</strong> ${doc.format}</p>
                                <hr />
                                <h2>Estatísticas</h2>
                                <p><strong>Cliques:</strong> ${statistics.clicks}</p>
                                <p><strong>Impressões:</strong> ${statistics.prints}</p>
                                <p><strong>Visualizações:</strong> ${statistics.views}</p>
                            </li>
                        `)
                    })
                })
            }
        })
    }
})