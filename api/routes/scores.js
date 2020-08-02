const scores = require('../../models/scores');
const mongoose = require('mongoose');

module.exports = function (router) {
  // GET
  router.get('/scores', function (req, res) {
    scores
      .find()
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res.status(500).json({ message: 'Error finding scores', error: err })
      );
  });

  // POST
  router.post('/scores', function (req, res) {
    let note = new scores(req.body);
    note.save(function (err, member) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(member);
    });
  });
  // };
  // router.post('/scores', (req, res) => {
  //   console.log(req.body);
  //   let note = new scores(req.body);
  //   note.save(req.body, (err, data) => {
  //     if (err) return console.log(err);
  //     res.send('saved to db: ' + data);
  //   });
  // });
};
