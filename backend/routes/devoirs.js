var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aurelien:gadblet@projetweb.cpa0x.mongodb.net/projetWEB?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})

var Schema = mongoose.Schema;
var userDataSchema = new Schema({
    date: {
      jour:{type: String, required: true},
      mois:{type: String, required: true},
      annee:{type: String, required: true}
    },
    titre: {type: String, required: true},
    description: {type: String, required: true},
    matiere: {type: String, required: true},
    type: {type: String, required: true, enum: ['Devoir', 'Projet', 'Examen']},
}, {versionKey: false});

var UserData = mongoose.model('devoirs', userDataSchema);

// Méthodes Get / put / update / delete, inspiré du code de mschwarzmueller 


router.get('/liste', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.json(doc);
      });
});

router.get('/liste/projet', function(req, res, next) {
  UserData.find({type:"Projet"})
      .then(function(doc) {
        res.json(doc);
      });
});

router.get('/liste/devoir', function(req, res, next) {
  UserData.find({type:"Devoir"})
      .then(function(doc) {
        res.json(doc);
      });
});

router.get('/liste/examen', function(req, res, next) {
  UserData.find({type:"Examen"})
      .then(function(doc) {
        res.json(doc);
      });
});


router.post('/ajout', function(req, res, next) {
  var item = {
    date:{
      jour: req.body.jour,
      mois: req.body.mois,
      annee: req.body.annee,
    },    
    titre: req.body.titre,
    description: req.body.description,
    matiere: req.body.matiere,
    type: req.body.type,
  };

  var data = new UserData(item);
  data.save();
  res.redirect('/');
});



router.post('/modifier',function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.date.jour= req.body.jour;
    doc.date.mois= req.body.mois;
    doc.date.annee= req.body.annee;
    doc.titre= req.body.titre;
    doc.description= req.body.description;
    doc.matiere= req.body.matiere;
    doc.type= req.body.type;
    doc.save();
  })
  res.redirect('/');
});

router.post('/supprimer', function(req, res, next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/');
});

module.exports = router;
