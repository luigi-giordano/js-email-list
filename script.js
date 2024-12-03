const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const listEmail = document.getElementById('email-list')




for(let i = 0; i < 10; i++){
  axios.get(endPoint)
  .then(response => {
    if (response.data.success === true){
      const ul = document.createElement('ul')
      console.log(ul)
      ul.innerHTML = response.data.response
      
    }

  })
  .catch(error => {
    console.log(error)

  })
}























function printlistEmail(list) {
  listEmail.innerHTML += list
}


// function generateEmails() {
//   const emails = []

//   for(let i = 0; i < 10; i++){
//     axios.get(endPoint)
//       .then(response => {
//   // il corpo della risposta è sempre dentro response.data
//       emails.push(response.data.response);
  

// })

// .catch(error => {
//   console.log(error)
// });

//   }
// }

// generateEmails()