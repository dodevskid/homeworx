console.log("We are live!");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let table = document.getElementById("table");
let h1 = document.getElementsByTagName("h1")[0];
let btns = document.getElementsByTagName("button");



function showNextPageButton() {
    let next10btn = document.createElement("button");
    next10btn.setAttribute("id", "btn3");
    next10btn.innerHTML = `Next 10`;
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(next10btn);

};

function showPreviousBtn() {
    let prevBtn = document.createElement("button");
    prevBtn.setAttribute("id", "btn4");
    prevBtn.innerHTML = `Previous 10`;
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(prevBtn);
};

function getFirstPage() {

}
btn1.addEventListener("click", function() {
    $.ajax({
        url: "https://swapi.co/api/planets/?page=1",
        success: function(response) {
            console.log("SUCCESS from jquery!!!!!");
            console.log(response);
            table.innerHTML = "";

            function printTable(element) {
                for (let i = 0; i < 10; i++) {
                    element.innerHTML += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${response.results[i].name}</td>
                        <td>${response.results[i].population}</td>
                        <td>${response.results[i].climate}</td>
                        <td>${response.results[i].gravity}</td>
                    </tr>
                    `
                }
            }
            printTable(table);
            showNextPageButton();
            btn3.addEventListener("click", function() {
                $.ajax({
                    url: "https://swapi.co/api/planets/?page=2",
                    success: function(response) {
                        console.log("SUCCESS from jquery!!!!!");
                        console.log(response);
                        table.innerHTML = "";
                        btns[2].style.visibility = "hidden";

                        function printTable(element) {
                            for (let i = 0; i < 10; i++) {
                                element.innerHTML += `
                                <tr>
                                    <td>${i+11}</td>
                                    <td>${response.results[i].name}</td>
                                    <td>${response.results[i].population}</td>
                                    <td>${response.results[i].climate}</td>
                                    <td>${response.results[i].gravity}</td>
                                </tr>
                                `
                            }
                        }
                        printTable(table);

                        showPreviousBtn();
                        btn4.addEventListener("click", function() {
                            $.ajax({
                                url: "https://swapi.co/api/planets/?page=1",
                                success: function(response) {
                                    console.log("SUCCESS from jquery!!!!!");
                                    console.log(response);
                                    table.innerHTML = "";
                                    btns[2].style.visibility = "hidden";


                                    function printTable(element) {
                                        for (let i = 0; i < 10; i++) {
                                            element.innerHTML += `
                                            <tr>
                                                <td>${i+1}</td>
                                                <td>${response.results[i].name}</td>
                                                <td>${response.results[i].population}</td>
                                                <td>${response.results[i].climate}</td>
                                                <td>${response.results[i].gravity}</td>
                                            </tr>
                                            `
                                        }
                                    }
                                    printTable(table);
                                    btns[2]
                                },
                                error: function(response) {
                                    console.log("Something is not right!");
                                    console.log(response.responseText);
                                }
                            })
                        })
                    },
                    error: function(response) {
                        console.log("Something is not right!");
                        console.log(response.responseText);
                    }
                })
            })
        },
        error: function(response) {
            console.log("Something is not right!");
            console.log(response.responseText);
        }
    })
})
btn2.addEventListener("click", function() {
    h1.innerHTML = "Jquery AJAX call";
    table.innerHTML = "";
});