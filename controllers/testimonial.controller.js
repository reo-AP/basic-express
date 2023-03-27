const Testimonial = require('../models/testimonial')

let getTestimonials = async  (req,res) => {
    let result = await Testimonial.findAll();
    res.send(result);
}

let postTestimonial = async (req, res) => {
    let body = req.body;
    let data = {name:body.name, post: body.post, active: body.active, testimonial_description: body.testimonial_description}
    let result = await Testimonial.create(data);
    res.send(result)
}

let getTestimonialById = async  (req,res) => {
    let id = req.params.id;
    let result = await Testimonial.findByPk(id);
    res.send(result);
}

let updateTestimonial = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let data = {name:body.name, post: body.post, active: body.active, testimonial_description: body.testimonial_description}
    let result = await Testimonial.update(data,{where: {id: id}});
    res.send(result);
}

let deleteTestimonial = async (req,res) => {
    let id = req.params.id;
    let result = await Testimonial.update({active: 0},{where: {id: id}})
    res.send(result)
}

module.exports = {getTestimonials, getTestimonialById, postTestimonial, deleteTestimonial, updateTestimonial}