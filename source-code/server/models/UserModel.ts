import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      index: true
    },
    lastName: {
      type: String,
      index: true
    },
    password: {
      type: String,
      index: true
    },
    email:{
      type: String,
      index: true
    }
});

UserSchema.statics.findByEmail = async function(email: string) {
  let user = await this.findOne({
    email: email
  });
  return user;
}

const UserModel = mongoose.model('users',UserSchema);


export default UserModel;