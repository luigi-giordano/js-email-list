// Definisco una costante endPoint che contiene l'URL dell'API da cui verranno ottenute le email casuali.
const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
// Seleziono l'elemento HTML con l'id "email-list" e lo assegno alla variabile listEmail.
//Questo elemento sarà usato per mostrare le email ottenute.
const listEmail = document.getElementById('email-list')
// Inizo un ciclo for che si ripeterà 10 volte (da 0 a 9). Serve per fare 10 richieste API e ottenere 10 email.
for(let i = 0; i < 10; i++){
  // Uso il metodo axios.get per fare una richiesta HTTP GET all'endpoint definito prima (endPoint), cioè l'API.
  axios.get(endPoint)
  // Definisco una funzione che verrà eseguita quando la richiesta sarà completata con successo.
  //L'oggetto ritornato dall'API viene passato come argomento (object).
  .then(res => {
  // Controlli se la proprietà success della risposta API è true:
  // Se sì, estrai l'email (object.data.response) e la formatti come un elemento HTML <li>.
  // Passi questa stringa HTML alla funzione printlistEmail per aggiungerla alla lista.
    if (res.data.success === true){
      let email = `<li>${res.data.response}</li>`
      printlistEmail(email)
    }
    console.log(res)
  })
  // Gestisco eventuali errori che si verificano durante la richiesta
  // Mostro un messaggio d'errore all'utente con un alert che contiene i dettagli dell'errore.
  .catch(error => {
    alert(error)
  })
}
// Definisco la funzione printlistEmail:
// Prendo come parametro list, che rappresenta una stringa HTML (<li>...</li>).
// Aggiungo questa stringa al contenuto HTML dell'elemento listEmail utilizzando innerHTML concatenandola con +=.
function printlistEmail(list) {
  listEmail.innerHTML += list
}