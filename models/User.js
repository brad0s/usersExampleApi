import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

//.model(name_of_model_in_db, the_schema)
const User = mongoose.model('User', userSchema);
export default User;
