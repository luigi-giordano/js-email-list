const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

function generateEmails() {
  const emails = []

  for(let i = 0; i < 10; i++){
    axios.get(endpoint)
      .then(response => {
  // il corpo della risposta è sempre dentro response.data
      emails.push(response.data.response);
  
  

})
.catch(error => {
  console.log(error)
});

  }
}
