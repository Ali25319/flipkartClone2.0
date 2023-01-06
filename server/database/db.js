

import mongoose from "mongoose";

export const Connection = async(username, password) => {

    const URL = `mongodb://${username}:${password}@ac-umoeova-shard-00-00.x2tk6qh.mongodb.net:27017,ac-umoeova-shard-00-01.x2tk6qh.mongodb.net:27017,ac-umoeova-shard-00-02.x2tk6qh.mongodb.net:27017/ECOMMERCE-WEB?ssl=true&replicaSet=atlas-d97qbm-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected Successfully");

    }catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;