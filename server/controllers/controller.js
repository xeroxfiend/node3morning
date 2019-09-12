module.exports = {
  getAllFirstNames: (req, res) => {
    const db = req.app.get("db");
    db.get_all_first_names()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(err));
  },

  addNew: (req, res) => {
    const db = req.app.get("db");
    const {first_name, last_name, left_side, right_side} = req.body;
    db.add_new({first_name, last_name, left_side, right_side}).then(result => {
      res.status(200).send(result);
    });
  },

  updateLastName: (req, res) => {
    const db = req.app.get("db");
    const {last_name} = req.body;
    const {id} = req.params;
    db.update_last_name([last_name, id]).then(result => {
      res.status(200).send(result);
    });
  },

  delete: (req, res) => {
    const db = req.app.get("db");
    const {id} = req.params;
    db.delete([id]).then(result => {
      res.status(200).send(result);
    });
  }
};
