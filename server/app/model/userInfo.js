// app/model/user.js
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: { type: String },
    id_number: { type: String },
  });

  return mongoose.model('UserInfo', UserSchema, 'userInfo');
};
