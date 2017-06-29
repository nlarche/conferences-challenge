import mongoose, { Schema } from 'mongoose';

const conferenceSchema = new Schema({
  titre: String,
  description: String,
  date: Date,
  logoUrl: String,
});

export default mongoose.model('Conference', conferenceSchema);
