const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/question1-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var howMany = req.session.data['how-many']
  
    // Check whether the variable matches a condition
    if (howMany == "ineligible"){
      // Send user to next page
      res.redirect('/ineligible')
    } else {
      // Send user to ineligible page
      res.redirect('/question1')
    }
  
  })



module.exports = router
