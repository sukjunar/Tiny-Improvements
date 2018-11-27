const registerUser = function () {
    const username = $('#newUsername').val().trim();
    const password = $('#newPassword').val().trim();
    $('#newUsername').val("");
    $('#newPassword').val("");
    const newUserInfo = {
        username: username, password: password
    };
    console.log(newUserInfo);

    $.post('/api/user', newUserInfo)
        .then(function (data) {
            console.log(data);
        })
}
$('#registerButton').on('click', registerUser);

const loginUser = function () {
    const username = $('#username').val().trim();
    const password = $('#password').val().trim();
    $('#username').val("");
    $('#password').val("");

    $.post('/api/session', { username: username, password: password })
        .then(function (data) {
            sessionStorage.setItem('token', data[0]._id);
            $('#fromUsername').attr("value", data[0]._id);
            $('#fromUsername').val(data[0].username);
            console.log(data[0]._id)
            console.log("Logged In!")
        })
        .catch(function (err) {
            console.log("Invalid Login Info")
        })
}
$('#loginButton').on('click', loginUser);