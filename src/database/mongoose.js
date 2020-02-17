import mongoose from "mongoose"
import "dotenv/config"

var a = process.env.DATABASE_URL

console.log("Trying to connect to: ", process.env.DATABASE_URL)
mongoose.connect(`${process.env.DATABASE_URL}`,{ useNewUrlParser: true } )
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {console.log("Connected to DB")});

export default db;