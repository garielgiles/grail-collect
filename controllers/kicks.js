const express = require('express')
const router = express.Router()
const Kick = require('../models/kicks.js');

// Index
router.get('/', (req, res) => {
    Kick.find({}, (error, allKicks)=>{
        res.render('Index', {
          kicks: allKicks,
          // currentUser: req.session.currentUser
        })
      })
  })

// New
router.get('/add', (req, res) => {
    res.render('New', {
  // currentUser: req.session.currentUser
    });
});

// Delete
router.delete("/:id", (req, res) => {
  // Delete document from collection
  Kick.findByIdAndRemove(req.params.id, (err, kick) => {
    res.redirect("/collection");
  });
});


/* Update */
router.put('/:id', (req, res)=>{
    if(req.body.worn === 'on'){
      req.body.worn = true
    } else {
      req.body.worn = false
    }
    Kick.findByIdAndUpdate(req.params.id, req.body, (error, foundKick)=>{
      if(error){
        res.status(500).send({
          error: error.message
        })
      }else{
        res.redirect('/collection')
      }
    })
  })

  // Create
router.post("/", (req, res) => {
    if(req.body.worn === 'on'){
        req.body.worn = true
      } else {
        req.body.worn = false
      }
    // Use Model to create KICKS Document
    Kick.create(req.body, (error, createdKicks) => {
        
      // Once created - respond to client
      console.log(createdKicks);
      
      res.redirect("/collection");
    });
  });

  /* Edit */
router.get('/:id/edit', (req, res)=>{
    Kick.findById(req.params.id, (error, foundKick)=>{
      if(error){
        res.status(500).send({
          error: error.message
        })
      } else {
        res.render('Edit', {
          kicks: foundKick,
          // currentUser: req.session.currentUser
        })
      }
    })
  })

  // Show
router.get("/:id", (req, res)=>{
  Kick.findById(req.params.id, (error, showKick)=>{
      console.log(req.params.id)
      res.render('Show', {
          kicks: showKick,
          // currentUser: req.session.currentUser
      });
  });
});

  module.exports = router

