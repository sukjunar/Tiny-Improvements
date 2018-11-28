const registerUser = function () {
    const username = $('#newUsername').val().trim();
    const password = $('#newPassword').val().trim();
    $('#newUsername').val("");
    $('#newPassword').val("");
    const newUserInfo = {
        username: username, password: password
    };

    $.post('/api/user', newUserInfo)
        .then(function (data) {
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
            sessionStorage.setItem('username', data[0].username);
        })
        .catch(function (err) {
        })
}
$('#loginButton').on('click', loginUser);

const sessionUser = function () {
    const userId = sessionStorage.getItem('token');
    const username = sessionStorage.getItem('username');

    if(username) {
        // $('#alert').text(`Welcome, ${username}!`);
        $('#alert').html(`
        <div class="center alert alert-success" role="alert">
            <h5 id="welcome">
                Welcome, ${username}!
            </h5>
        </div>
        `);
        $('#fromUsername').attr("value", userId);
        $('#fromUsername').val(username);
    }
}

sessionUser();
$('#loginButton').on('click', sessionUser);