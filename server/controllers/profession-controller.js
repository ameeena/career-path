const configureDB = require('../config/arangoDB-config');
const db = configureDB();
const careerCollection = db.collection('career');

exports.getProfessionList = (req,res) =>{
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

exports.getProfessionById = (req,res) => {
  console.log(req);
}

exports.addProfession = (req,res) => {
    // TO DO : Add career values
  console.log(req);

};

exports.deleteProfession = (req,res) => {
  console.log(req);
}

exports.updateProfession = (req,res) => {
  console.log(req);
}
