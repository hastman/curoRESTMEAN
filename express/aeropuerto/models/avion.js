var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aereopuerto');

var Schema = mongoose.Schema;


var avionSchema = new Schema({
  company: String,
  origin: {type:String, required:true},
  destination : {type:String, required:true},
  departTime : Number,
  delayed : Number
});


// creamos el modelo a partir de nuestro esquema
var Avion = mongoose.model('Avion', avionSchema);

module.exports = Avion;