import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    projectImage: {
      type: String,
      required: true,
    },
    // imageUrl: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
