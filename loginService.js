document.getElementById("formLogin").addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let message = ''
    let alertype = ''

    if (email === "" || password === "") {
        alertype = "warning"
        message = "Por favor complete todos los campos"
    }
    else if (email === 'prueba@gmail.com' && password === '123456') {
        alertype = "success"
        message = "Bienvenido"
    }
    else {
        alertype = "danger"
        message = "Correo o contraseña incorrectas"
    }
    let alert = `
    <div class="alert alert-${alertype} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
    </div>
    `;

    document.getElementById("alert").innerHTML = alert;
});

function login(email, password) {
    let message = ''
    let alertype = ''
    fetch("htpps://reques.in/api/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then((data) => {
            alertype = "success"
            message = "Bienvenido"
            console.log('Melo Caramelo')

        })
        .catch((error) => {
            alertype = "danger"
            message = "Correo o contraseña incorrectas"
            console.error(error)
        })

    let alert = `
        <div class="alert alert-${alertype} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
        </div>
        `;

    document.getElementById("alert").innerHTML = alert;

}
