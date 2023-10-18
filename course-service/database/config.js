const mongoose = require('mongoose');
mongoose
  .connect(process.env.DB_URL || 'mongodb://127.0.0.1/school-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      `MongoDb Connection :: Connected to ${
        process.env.DB_URL || 'mongodb://127.0.0.1/school-management'
      }`
    )
  )
  .catch((err) =>
    console.log(
      `MongoDb Connection Error:: ${
        process.env.DB_URL || 'mongodb://127.0.0.1/school-management'
      } :: ${err}`
    )
  );
