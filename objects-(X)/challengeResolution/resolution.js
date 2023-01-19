const myObject = {
    "email":"Kaueribeiro125@gmail.com",
    "password":"123456789",
    "token":"17122002"
 }

  console.log(myObject.email)

  const condicao = myObject.password.length > 8 ? "A senha é forte :)" : "A senha digitada é muito fraca :("

  console.log(condicao)

  console.log("VALOR DO TOKEN ANTES DA MUDANÇA:")
  console.log(myObject.token)
 
  console.log("VALOR DO TOKEN DEPOIS DA MUDANÇA:")
  myObject.token = "10203040"
  console.log(myObject.token)