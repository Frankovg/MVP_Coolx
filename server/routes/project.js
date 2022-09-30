var express = require("express");
const projectControllers = require("../controllers/projectControllers");
var router = express.Router();
const multer = require("../middleware/multer");
const multerSingle = require("../middleware/multerSingle");
const verify = require("../middleware/verify");

// Crear nuevo proyecto
// localhost:4000/project/newProject/:user_id
router.post(
  "/newProject/:user_id",
  multer("images"),
  projectControllers.createNewProject
);

// Editar proyecto
// localhost:4000/project/editProject/:project_id
router.put("/editProject/:project_id", projectControllers.editProject);

//Editar status de proyecto
//localhost:4000/project/editStatusProject/:project_id
router.put("/editStatusProject/:project_id", projectControllers.editStatusProject);

// Mostrar la infomación de un proyecto
// localhost:4000/project/:project_id
router.get("/:project_id", projectControllers.getProject);

//mostrar la informacion de un proyecto (pago)
//localhost:4000/project/:project_id/info
router.get("/:project_id/info", projectControllers.getProjectInfo);

// Eliminar un proyecto
// localhost:4000/project/deleteProject/:project_id
router.delete("/deleteProject/:project_id", projectControllers.deleteProject);

// Cambiar usuario de un proyecto
// localhost:4000/project/changeUser/:project_id
router.post("/changeUser/:project_id", projectControllers.changeUser);

// Generar PDF con información de un proyecto (pago)
//localhost:4000/project/:project_id/pdf
router.get("/:project_id/pdf", projectControllers.getProjectPdf);

module.exports = router;
