import mongoose, { Schema } from 'mongoose';

const conferenceSchema = new Schema({
  titre: {
    type: String,
    required: true,
  },
  description: String,
  date: Date,
  logoUrl: String,
});

export default mongoose.model('Conference', conferenceSchema);
