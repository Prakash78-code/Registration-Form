const form=document.querySelector("#form")

const name=document.querySelector("#name")
const father=document.querySelector("#father")
const college=document.querySelector("#college")
const sex=document.querySelector("#sex")
const dob=document.querySelector("#dob")
const phone=document.querySelector("#phone")
const email=document.querySelector("#email")
const village=document.querySelector("#village")
const city=document.querySelector("#city")
const state=document.querySelector("#state")
const password=document.querySelector("#password")

const table=document.querySelector("#userTable")
const search=document.querySelector("#search")
const strengthBar=document.querySelector("#strengthBar")

let users=JSON.parse(localStorage.getItem("users")) || []

renderUsers()

form.addEventListener("submit",function(e){

e.preventDefault()

const user={
name:name.value,
father:father.value,
college:college.value,
sex:sex.value,
dob:dob.value,
phone:phone.value,
email:email.value,
village:village.value,
city:city.value,
state:state.value
}

users.push(user)

localStorage.setItem("users",JSON.stringify(users))

renderUsers()

form.reset()

strengthBar.style.width="0%"

})

function renderUsers(){

table.innerHTML=""

users.forEach((u,index)=>{

table.innerHTML+=`
<tr>
<td>${u.name}</td>
<td>${u.father}</td>
<td>${u.college}</td>
<td>${u.sex}</td>
<td>${u.dob}</td>
<td>${u.phone}</td>
<td>${u.email}</td>
<td>${u.village}</td>
<td>${u.city}</td>
<td>${u.state}</td>
<td><button onclick="deleteUser(${index})">Delete</button></td>
</tr>
`

})

}

function deleteUser(index){

users.splice(index,1)

localStorage.setItem("users",JSON.stringify(users))

renderUsers()

}

password.addEventListener("input",function(){

let pass=password.value
let strength=0

if(pass.length>5) strength++
if(/[A-Z]/.test(pass)) strength++
if(/[0-9]/.test(pass)) strength++

if(strength==1){
strengthBar.style.width="33%"
strengthBar.style.background="red"
}
else if(strength==2){
strengthBar.style.width="66%"
strengthBar.style.background="orange"
}
else if(strength==3){
strengthBar.style.width="100%"
strengthBar.style.background="green"
}

})

function togglePassword(){

if(password.type==="password"){
password.type="text"
}else{
password.type="password"
}

}

search.addEventListener("input",function(){

let value=search.value.toLowerCase()

let rows=document.querySelectorAll("tbody tr")

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value) ? "" : "none"

})

})