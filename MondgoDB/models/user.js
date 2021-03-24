/*
 * This is a basic JSON structure that I made just to test
 * database connection. It is very subject to change.
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    spotifyTokenID: {
        type: String,
        required: true
    },
    spotifyTokenSecret: {
        type: String,
        required: true
    },
    songID: {
        type: String,
        required: false
    },
    isLocalArtist: {
        type: Boolean,
        required: true
    },
    isLocalBusiness: {
        type: Boolean,
        required: true
    },
    refreshToken: {
        type: String,
        required: false
    }
},  { timestamps: true });

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
