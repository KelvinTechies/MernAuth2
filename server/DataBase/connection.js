import mongoose from "mongoose"
import {MongoMemoryServer} from 'mongodb-memory-server'


async function connectDb(){
    const mongod = await MongoMemoryServer.create()

    const getUri = mongod.getUri()

    const db= await mongoose.connect(getUri)
    console.log('db Connected');
    return db
    
}

export default connectDb