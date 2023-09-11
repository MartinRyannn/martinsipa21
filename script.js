document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector(".startButton");
    const invisibleDiv = document.querySelector(".invisibleDiv");
    const nameForm = document.getElementById("nameForm");
    const outputDiv = document.getElementById("output");

    startButton.addEventListener("click", function () {
        if (invisibleDiv.style.opacity === "1") {
            invisibleDiv.style.opacity = "0";
            invisibleDiv.style.transform = "translate(-50%, 50%)";
        } else {
            invisibleDiv.style.opacity = "1";
            invisibleDiv.style.transform = "translate(-50%, -50%)";
        }
    });


    //forma

    nameForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        
        outputDiv.innerHTML = `Your Name is: ${firstName} ${lastName}`;
    });
});
