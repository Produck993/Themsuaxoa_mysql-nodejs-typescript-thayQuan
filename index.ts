import express, { Router } from 'express';
import fileUpload from "express-fileupload";
import bodyParser from 'body-parser';
import { routes } from './src/routes/routes';

const app =  express();
const PORT = 3000;
app.set("views", 'src/view/');
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended : true}));

app.use(fileUpload({
    createParentPath: true
}));
app.use('',routes)
app.listen(PORT,()=> {
    console.log(`Server is running on port http://localhost:3000`); 
});

