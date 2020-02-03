console.log("We are live!");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let table = document.getElementById("table");
let h1 = document.getElementsByTagName("h1")[0];
let btns = document.getElementsByTagName("button");
let result = true;
let next, previous;
btns[2].style.visibility = "hidden";
btns[3].style.visibility = "hidden";
// let nextBtn = showNextPageButton(); 


function printTable(planets) {
    for (const planet of planets) {
        table.innerHTML += `
        <tr>
            <td>${planet.name}</td>
            <td>${planet.gravity}</td>
            <td>${planet.climate}</td>
            <td>${planet.population}</td>
        </tr>
        `
    }
}


btn1.addEventListener("click", function () {
    $.ajax({
        url: "https://swapi.co/api/planets/?page=1",
        success: function (response) {
            next = response.next
            previous = response.previous
            console.log("SUCCESS from jquery!!!!!");
            table.innerHTML = "";
            printTable(response.results);
            btns[2].style.visibility = "visible";
            
        },

        error: function (response) {
            console.log("Something is not right!");
            console.log(response.responseText);
        }
    })
})


btn2.addEventListener("click", function () {
    h1.innerHTML = "Jquery AJAX call";
    table.innerHTML = "";
});


btn3.addEventListener("click", function () {
    $.ajax({
        url: "https://swapi.co/api/planets/?page=2",
        success: function (response) {
            btns[2].style.visibility = "hidden";
            console.log("SUCCESS from jquery!!!!!");
            table.innerHTML = "";
            printTable(response.results);
            btns[3].style.visibility = "visible";
            btn1=btns[3];
         },
         error: function (response) {
             console.log("Something is not right!");
             console.log(response.responseText);
         }
        })
    });

    btn4.addEventListener("click", function () {
        $.ajax({
            url: "https://swapi.co/api/planets/?page=1",
            success: function (response) {
                next = response.next
                previous = response.previous
                console.log("SUCCESS from jquery!!!!!");
                table.innerHTML = "";
                printTable(response.results);
                btns[3].style.visibility = "hidden";
                btns[2].style.visibility = "visible";
                
            },
    
            error: function (response) {
                console.log("Something is not right!");
                console.log(response.responseText);
            }
        })
    })