const rendersKudos = function (data) {
    $('#kudos').empty();
    for (let i = 0; i < data.length; i++) {
        $('#kudos').prepend(
            `<div class="border rounded-3 p-3"><div class="row"><div class="col-6">To: ${data[i].to[0].username}</div><div class="col-6">From: ${data[i].from[0].username}</div></div><br /><h5>${data[i].title}</h5><p>${data[i].message}</p></div><br />`
        )
    }
}

const rendersUsers = function (data) {
    $('#dropdownUsers').empty();
    for (let i = 0; i < data.length; i++) {
        $('#toUsername').append(`<option id="toUser ${data[i].username}" value="${data[i]._id}">${data[i].username}</option>`)
    }
}

const getKudos = function () {
    $.get('/api/kudo/')
        .then(function (data) {
            rendersKudos(data)
        });
};

const getUsers = function () {
    $.get('/api/user/')
        .then(function (data) {
            rendersUsers(data);
        });
}

getKudos();
getUsers();

const postKudo = function () {
    const toUser = $('#toUsername').val().trim();
    const fromUser = sessionStorage.getItem('token');
    const kudoTitle = $('#kudoTitle').val().trim();
    const kudoMessage = $('#kudoMessage').val().trim();
    $('#kudoTitle').val('');
    $('#kudoMessage').val('');

    $.post('/api/kudo', { to: toUser, from: fromUser, title: kudoTitle, message: kudoMessage })
        .then(function (data) {
            getKudos();
        })
}
$('#kudoButton').on('click', postKudo);