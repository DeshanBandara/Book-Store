import express, { request, response } from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors';

const app = express();

// middleware for passing request body
app.use(express.json());

//Middleware for handling cors policy
//Option 1: Allow All Origins with default of cors(*)
//app.use(cors());
//Option 2: Allow custom origins
//Send data from front end to data base
app.use(
    cors({
        origins: `http://localhost:3000`,
        methods: [`GET`, 'POST', 'PUT','DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`Welcome to Book Shop`)
});

app.use(`/books`, booksRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to database`);
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error) => {
        console.log(error);
    });