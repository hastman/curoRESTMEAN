var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: {type:String, required:true,unique:true},
  pass: String    
});


// creamos el modelo a partir de nuestro esquema
var User = mongoose.model('Users', userSchema);

//lo hacemos publico para el resto de componentes
module.exports = User;