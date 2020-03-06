
const careerController = require('../controllers/career-controller');

module.exports = function(app){
    app.get('/api/getcareerlist', careerController.getCareerList);
    app.post('/api/addcareer',careerController.addCareer);
    app.put('/api/updatecareer/:id', careerController.updateCareer);
    app.delete('/api/deletecareer/:id',careerController.deleteCareer);
}