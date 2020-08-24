const express = require('express')
const router = express.Router()
const Kick = require('../models/kicks.js');

// Index
router.get('/', (req, res) => {
    Kick.find({}, (error, allKicks)=>{
        res.render('Index', {
          kicks: allKicks
        })
      })
  })

// New
router.get('/add', (req, res) => {
    res.render('New');
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
        res.render('/collection/Edit', {
          kicks: foundKick
        })
      }
    })
  })

  module.exports = router

