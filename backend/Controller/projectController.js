import asyncHandler from "express-async-handler";
import Project from "../Model/projectModel.js";

const addProject = asyncHandler(async (req, res) => {
  const projectImage = req.file ? req.file.filename : null;

  const { name, detail } = req.body;

  const project = new Project({
    name,
    detail,
    projectImage,
  });

  console.log(req.body);
  console.log(req.file);
  await project.save();
  res.status(200).json({ message: "Product Added Successfully" });
});

const updateProject = asyncHandler(async (req, res) => {
  const { name, detail } = req.body;

  const project = await Project.findById(req.params.id);
  if (project) {
    project.name = name;
    project.detail = detail;
    project.projectImage =
      (req.file && req.file.filename) || project.productImage;

    console.log(req.body);
    console.log(req.file);
    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error("Project not Found");
  }
});

const allProject = asyncHandler(async (req, res) => {
  const projects = await Project.find({});
  res.json(projects);
});

const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  console.log(req.params);
  if (project) {
    await project.remove();
    console.log("removed");
    res.json("Project has been removed");
  } else {
    console.log("not found");
    throw new Error("Project not Found");
  }
});
export { addProject, allProject, deleteProject, updateProject };
