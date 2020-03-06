const configureDB = require('../config/arangoDB-config');
const db = configureDB();
const careerCollection = db.collection('career');

exports.getCareerList = (req,res) =>{
  careerCollection
  .all()
  .then((response) => {
    console.log(response)
    return res.status(200).json(response._result);
  })
  .catch((ex)=>{
    return res.status(500).json(error);
  });
};

exports.addCareer = (req,res) => {
    // TO DO : Add career values
};

exports.deleteCareer = (req,res) => {

}

exports.updateCareer = (req,res) => {

}
