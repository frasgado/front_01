const $forms = document.querySelectorAll(".signup-form")
console.log($forms)

// document.getElementById
const sendEmailToApi = (address, template) => {
    fetch(`https://bedu-email-sender-api.herokuapp.com/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                address: address,
                template: template,
            }),
        })
        .then((results) => {
            console.log(results.status == 200)
            if (results.status == 200)
                console.log(results);
            document.getElementById("email").value = ""
            alert("E-mail send!!!")
        })
        .catch((error) => {
            console.error(error);
            document.getElementById("email").value = ""
            alert("Send failed")
        });
};

const getTemplate = () => {
    return fetch("./template.html")
        .then((response) => response.text())
}

function sendEmail(miVariable) {
    miVariable.preventDefault()
    const email = miVariable.target.querySelector("input").value
    getTemplate()
        .then((response) => {
            // console.log(response);
            sendEmailToApi(email, template);

        })
        .catch((error) => {
            console.log(error, "error al obtener el templete");
        })
}



//arrow function
// const sendEmail = (miVariable) => {
//     miVariable.preventDefault()
//     console.log(miVariable)
// }

// for (let i=0; i<$forms.length;i++) {
for (let i = 0; i < $forms.length; i++) {
    console.log(i)
    $forms[i].addEventListener("submit", sendEmail);
}