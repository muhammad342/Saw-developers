import mongoose from 'mongoose'

import dotenv from 'dotenv'

import connectDB from './Config/db.js'

import user from './data/users.js'

import User from './Model/userModel.js'

dotenv.config()

connectDB()

const importData=async () =>{
    try {
        await User.deleteMany()
        await User.insertMany(user)
        console.log('user created'
        )
        process.exit()
    } catch (error) {
        console.error( `${error}`)
        process.exit(1)

        
    }
  
}

importData()