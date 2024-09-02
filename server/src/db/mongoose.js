const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pratyushksk:H6CEEzmgsP7AMDoU@cluster0.bvmxb.mongodb.net/movie?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
