console.log("We are live!");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let result = document.getElementById("result");
let h1 = document.getElementsByTagName("h1")[0];

btn1.addEventListener("click", function() {
    $.ajax({
        url: "https://swapi.co/api/people/1/?format=json",
        success: function(response) {
            console.log("SUCCESS from jquery!!!!!");
            console.log(response);
            h1.innerHTML = `${response.name}`;
            result.innerHTML = "";

            function printTable(element) {
                element.innerHTML += `
                    <tr>
                        <td>${response.height}</td>
                        <td>${response.mass}</td>
                        <td>${response.eye_color}</td>
                        <td>${response.hair_color}</td>
                    </tr>
                    `
            }
            printTable(result);
        },
        error: function(response) {
            console.log("Something is not right!");
            console.log(response.responseText);
        }
    })
})
btn2.addEventListener("click", function() {
    h1.innerHTML = "Jquery AJAX call";
    result.innerHTML = "";
})