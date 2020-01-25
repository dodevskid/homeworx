console.log("We are live!");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let result = document.getElementById("result");
let h1 = document.getElementsByTagName("h1")[0];
let luke = document.getElementById("luke");

function ajaxCallSwapi(){
    $.ajax({
        url: "https://swapi.co/api/people/1/",
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

}
function clearPage (){
    h1.innerHTML = "Jquery AJAX call";
    result.innerHTML = "";
}


luke.addEventListener("click", ajaxCallSwapi);
btn2.addEventListener("click", clearPage);
//use "for each" to cycle thru the array in the api object and show the names of the swapi in the dropdown menu