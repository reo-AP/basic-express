var express = require('express');
var router = express.Router();
let testimonial = require('../controllers/testimonial.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  return testimonial.getTestimonials(req,res);
});
router.get('/:id', function(req, res, next) {
  return testimonial.getTestimonialById(req,res);
});
router.post('/create', function(req, res, next) {
  return testimonial.postTestimonial(req,res);
});
router.put('/update/:id', function(req, res, next) {
  return testimonial.updateTestimonial(req,res);
});
router.delete('/delete/:id', function(req, res, next) {
  return testimonial.deleteTestimonial(req,res);
});

module.exports = router;
