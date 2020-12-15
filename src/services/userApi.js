export default class UserApi {

  createUserFetch(user){
    return fetch("http://localhost:3000/auth/",{
      "method": "POST",
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      "body": JSON.stringify({
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
        confirm_success_url: '#'
      })
      })
      .then(response => response.json())
      .catch(err => {
        console.log(err);
    });
  }  
  
  createSessionFetch(user){
    return fetch("http://localhost:3000/auth/",{
    "method": "PUT",
    "body": JSON.stringify({
      email: user.email,
      password: user.password
    })
    })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
  }

  /*userTokenSave(token){
    localStorage.setItem('token', token)
  }

  userTokenPresent(){
    return localStorage.getItem('token')
  }

  deleteSession(){
    localStorage.removeItem('token')
  }*/
}