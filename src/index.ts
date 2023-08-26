import express from 'express';
import { config } from 'dotenv';
import 'reflect-metadata';
import Database from './db/conecction';

config();

const app = express();

console.log('holiii')


const conectarDB = async() => {
  try {
        
    await Database.createDataSource().initialize().then(() => console.log('conectado a la base de datos'))
  
  } catch (error) {
  
    console.error("Error connecting to database:", error);
  
  }
}

conectarDB();

app.listen(process.env.APP_PORT, () => {
  console.log(`server running on port ${process.env.APP_PORT}`);
});