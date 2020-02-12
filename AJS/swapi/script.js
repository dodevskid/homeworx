let input = document.getElementById("charID");
let btn1 = document.getElementById("btn1");
let inputID = 0;
let dataSpecies;

btn1.addEventListener("click", function() {
    inputID = parseInt(input.value);
    getData(`https://swapi.co/people/${inputID}`).then((data) =>{
        console.log(data);
        return  dataSpecies = data.species;
    })
});

async function getData(url) {

    let initialData = await fetch(url);
    let realJSONData = await initialData.json();
    let homeworld = await fetch(realJSONData.homeworld);
    let homeworldJSON = await homeworld.json();


    return [realJSONData,homeworldJSON];
}




// getData(`https://swapi.co/people/${inputID}`).then((data) =>{
//     return  dataSpecies = data.species;
// }).then()


//     printPeople().then((chars) => {
//             console.log("The server responded OK!");
//             console.log(`Name: ${chars.results[inputID].name}`);
//             console.log(`Height: ${chars.results[inputID].height}`);
//             console.log(`Weight: ${chars.results[inputID].mass}`);
//             console.log(`Hair color: ${chars.results[inputID].hair_color}`);

//             return new Promise((resolve, reject) => {
//                 $.ajax({
//                     url: chars.results[inputID].homeworld,
//                     success: (response) => {
//                         resolve(response);
//                     },
//                     error: (error) => {
//                         reject(error);
//                     }
//                 })
//             })

//         })
//         .then((homeworld) => {
//             console.log(`Planet name: ${homeworld.name}`);
//             console.log(`Planet Gravity: ${homeworld.gravity}`);
//             console.log(`Planet Population: ${homeworld.population}`);
//         })

//     printPeople().then((data) => {
//             return new Promise((resolve, reject) => {
//                 $.ajax({
//                     url: data.results[inputID].species,
//                     success: (response) => {
//                         resolve(response);
//                     },
//                     error: (error) => {
//                         reject(error);
//                     }
//                 })
//             })
//         }).then((data) => {
//             console.log(`Species Name:${data.name}`);
//             console.log(`Species Designation:${data.designation}`);
//             console.log(`Species Language:${data.language}`);
//             console.log(`Average Lifespan:${data.average_lifespan}`);
//         })
//         .catch((error) => console.log(error));
// })


// function printPeople() {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: `https://swapi.co/api/people/${inputID}`,
//             success: (response) => {
//                 resolve(response);

//             },
//             error: (error) => {
//                 reject(error);
//             }
//         })
//     })
// };