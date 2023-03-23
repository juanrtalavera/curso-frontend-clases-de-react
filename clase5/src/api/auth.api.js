const usuariosDB = [
    {email: 'admin@medialist.com', pass: '1234'},
    {email: 'admin1@medialist.com', pass: '12345'},
]


export function login(email, pwd){
    const userMatch = usuariosDB.find(u=>u.email == emailForm && u.pass == passForm)

if(userMatch){
    return userMatch
}
else {
    return null
}
}