import { Schema, model } from "mongoose";
const MediaSchema = Schema({
  serial: {
    type: String,
    required: true,
    unique: true,
  },

  title: {
    type: String,
    required: true,
  },
  synopsis:{
    type: String,
    required: true,
  },
  // url:{
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // photo: {
  //   type: String,
  //   required: true,
  // },
  // dateCreated:{
  //   type: Date,
  //   default: Date.now
  // },
  // dateUpdated:{
  //   type: Date,
  //   default: Date.now
  // },
  // ReleaseYear:{
  //   type: Number,
  //   required: true,
  // },
  // MainGenre:{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Genre',
  //   required: true,
  // },
  // Director:{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Director',
  //   required: true,
  // },
  // Producer:{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Producer',
  //   required: true,
  // },
  // Type:{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Type',
  //   required: true,
  // }
  
});

export default model("Media", MediaSchema);
