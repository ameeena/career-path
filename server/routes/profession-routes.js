const professionController = require("../controllers/profession-controller");

module.exports = function(app) {
  app.get("/api/professions", professionController.getProfessionList);
  app.get("/api/professions/:id", professionController.getProfessionById);
  app.post("/api/professions", professionController.addProfession);
  app.put("/api/professions/:id", professionController.updateProfession);
  app.delete("/api/professions/:id", professionController.deleteProfession);
};
