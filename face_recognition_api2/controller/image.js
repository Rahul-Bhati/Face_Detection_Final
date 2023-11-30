const handleImage = (req, res, db, bcrypt) => {
     const id = req.body.id;
     db('users').where('id', '=', id)
          .increment('entries', 1)
          .returning('entries')
          .then(entries => {
               if (entries.length) res.json(entries[0]);
               else res.status(400).json("unable to get entries!");
          })
          .catch(err => res.status(400).json("Error"));
}

module.exports = { handleImage }