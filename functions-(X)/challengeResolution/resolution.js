function createUser() {
    let name = ""
    let email = ""
    let password = ""

    name = prompt("Olá!! Qual seu nome ?")
    email = prompt("Qual o email deseja usar?")
    password = prompt("Qual senha deseja usar ?")

    const finalInformations = 
    `
    SUAS INFORMÇÕES FINAIS SÃO:
    NOME: ${name}
    EMAIL: ${email}
    SENHA: ${password}   
     `

    if(password <= "123456") {
        alert("    SENHA FRACA, TENTE NOVAMENTE")
    } else {
        alert("    USUÁRIO CRIADO COM SUCESSO")
        alert(finalInformations)
    }
   
};