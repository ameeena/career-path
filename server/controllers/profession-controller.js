const configureDB = require("../config/arangoDB-config");
const db = configureDB();
const careerCollection = db.collection("career");

exports.getProfessionList = (req, res) => {
  careerCollection
    .all()
    .then(response => {
      // console.log(response)
      return res.status(200).json(response._result);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
};

exports.getProfessionById = (req, res) => {
  console.log(req);
};

exports.addProfession = (req, res) => {
  // TO DO : Add career values
  careerCollection
    .save(req.body)
    .then(response => res.status(200).json(response))
    .catch(error => {
      return res.status(500).json(error);
    });
};

exports.deleteProfession = (req, res) => {
  console.log(req);
};

exports.updateProfession = (req, res) => {
  let key = req.body._key;
  careerCollection
    .update(key, req.body)
    .then(response => res.status(200).json(response))
    .catch(error => {
      return res.status(500).json(error);
    });
};
