console.log("We are live!");

let btn1 = document.getElementById("btn1");
let wrapper = document.getElementById("wrapper");
let wrapperElements = wrapper.children;
console.log(wrapperElements);

btn1.addEventListener("click", function() {
    wrapperElements[0].innerHTML = "";
    wrapperElements[1].innerHTML = "";
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        console.log("We got a response!");
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("We successfully got our stuff!");
            let response = JSON.parse(xhr.response);
            console.log(response.name);
            wrapperElements[0].innerHTML = response.name;
            wrapperElements[1].innerHTML += `<li>Height: ${response.height} cm</li>`;
            wrapperElements[1].innerHTML += `<li>Weight: ${response.mass} kg</li>`;
            wrapperElements[1].innerHTML += `<li>Eye color: ${response.eye_color} </li>`;
            wrapperElements[1].innerHTML += `<li>Hair color: ${response.hair_color}</li>`;
            console.log(response.lenght);
        } else {
            console.log("Something went wrong!");
            console.log(xhr.responseText);
        }
    }
    xhr.open("GET", "https://swapi.co/api/people/1/?format=json");
    xhr.send();
})