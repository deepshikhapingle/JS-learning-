// fetch is async
// async method in JS retuen a promise
// promises are the container of a future value 
//Promise has states, pending, fullfilled - sucess or failure
const fetchPromise = fetch(

"https://github.com/incubyte/playbook/blob/page/roles-test-craftsperson/docs/handbook/Roles-at-Incubyte/Test-Craftsperson-Expertise-Levels-and-Guideli.md"
)

console.log(fetchPromise);

fetchPromise.then((response)=> {
console.log(fetchPromise);
console.log(`received response - status code ${response.status}`)
return response.json();
}
)
.then ((data)=> {

    console.log(data[0].name)
})
console.log(fetchPromise);