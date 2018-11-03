const express = require('express');
const Character = require('../../models/Character')
const router = express.Router();

// router.get('/', (req, res) => res.json({message: "Welcome to Character route"}));

router.get('/', (req, res) => {
  Character.find()
    .then(characters => {
      res.json(characters)
    })
    .catch(err => console.log(err));
})

router.get('/:name', (req, res) => {
  const { name } = req.params;
  Character.findOne({ name })
    .then(character => {
      if(!character){
        return res.status(404).json({message: `Character: ${name} not found`})
      }

      res.json(character);
    })

    .catch(err => res.status(500).json({message: err}));
})

router.post('/', (req, res) => {
  const {name, password, charClass, titles} = req.body;

  const newCharacter = new Character({
    name,
    password,
    charClass,
    titles
  })

  newCharacter.save()
  .then(character => res.status(201).json(character))
  .catch(err => {
    res.status(500).json({message: err})
  });
});

router.delete('/:name', (req, res) => {
  // TODO: protected route ensure the character is the one deleting
  const { name } = req.params;
  Character.findOne({ name })
    .then(character => {
      if(!character){
        return res.status(404).json({message: `Character: ${name} not found`})
      }
      character.remove()
      .then(() => res.status(204).json({}))
      .catch(err => res.status(500).json(err));      
    })

    .catch(err => res.status(500).json({message: err}));
})

router.put('/:name', (req, res) => {
  // fix this
  // TODO: create a profile model with 5 items, first name, last name, email
  // findOne()
  // .then(character) => {
  //   findOneAndUpdate()
  // }

})

module.exports = router;