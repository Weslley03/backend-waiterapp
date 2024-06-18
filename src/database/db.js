import mongoose from "mongoose";

const conectDatabase = () => {
    mongoose.connect
    ('mongodb+srv://oweslley03:BancoMongo03Weslley@cluster0.btani6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {console.log('banco OK')})
    .catch((err) => console.log(`banco não OK ${err}`))
}

export default conectDatabase;