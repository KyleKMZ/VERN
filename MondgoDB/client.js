/*
 * This file contains examples for client requests to the server
 * At the moment, they concern the storage, retrieval, and editing of a user object
 * I am using a cool prompt library for testing right now, you have to run: 
 * "npm install prompt"
 * to use it too.
 */

//If server file is outside the MondgoDB directory, change it to './MondgoDB/testClient'
const methods = require('./testClient');
const prompt = require('prompt');
const user = require('./userInfo/allUsers.json');
const uname = require('./uname');

// Example of create user method call

var s = "Kyle";
uname.set_username(s);
uname.get_username(function (result) {
    console.log(result);
});

var name = {
    username: "Man7"
};
uname.get_username(function (result) {
    name.username = result;
});
var userData;
methods.get_user(name, function (result) {
    console.log(result);
});

//console.log(userData);
/*
const data = {
    username: "Duh",
    email: "new email23",
    password: "huh",
    genre: "duh",
    color: "duh",
    bio: "duh",
    token: "duh",
    songID: "duh",
    isLocalArtist: true,
    isLocalBusiness: false,
    refreshToken: "AQCzVfJhvvDF8KvxRKP6ANQ_hfmYbqDdsVQ7XR0FlLlA4soBz6CnmK1HUIas6c9hQHpQ2sV_dDkfYApzJlVkoFMeyjsnVj7Kgdzzd4jG8OwUAbKvzPiVaM5ijhxRhkrdeLU"
};

//methods.create_user(function (result) {
//    console.log(result);
//}, data);

methods.top_songs(function (result) {
    console.log(result);
}, data);

*/
// End create user


// Example of get user
/*
const name = {
    username: "Man7"
};

methods.get_user(function (result) {
    console.log(result);
}, name);

// End getUser
*/
// Example of edit user

prompt.start();
prompt.get(['name', 'nname', 'genres', 'color', 'bio', 'songID'], function (err, result) {
    //
    // Log the results.
    //

    const data2 = {};
    data2.current_username = result.name;
    data2.new_username = result.nname;
    data2.genre = result.genres;
    data2.color = result.color;
    data2.bio = result.bio;
    data2.songID = result.songID;

    methods.edit_user(function (result) {
        console.log(result);
    }, data2);
});
// End editUser
/*
// Add Song
const data = {
    songID: "random p ID",
    title: "Song1",
    artist: "Variable Artist",
    length: 260
};

methods.store_song(function (result) {
    console.log(result);
}, data);

// End add song

// Find Song

const id = {
    songID: "random ID"
};

methods.get_song(function (result) {
    console.log(result);
}, id);

// End find song
*/