const handleProfile = (req, res, db, bcrypt) => {
     const id = req.params.id;
     db.select('*').from('users').where({ id })
          .then(user => {
               if (user.length) res.json(user[0]);
               else res.status(400).json("User not found! ");
          })
          .catch(err => res.status(400).json("error"));

}

module.exports = { handleProfile }