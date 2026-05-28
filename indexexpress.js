const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const PORT = 4005;
const app = express();


app.use(cors());
app.use(express.json()); 


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send("<h2>welcome to express</h2>");
});


app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let arr = [];

        
        try {
            const fdata = await fs.readFile('data.json', 'utf-8');
            arr = JSON.parse(fdata);
        } catch (err) {
            arr = []; 
        }

        
        const status = arr.find(ele => ele.email === email);

        if (status) {
            return res.json({ msg: "Already registered" });
        }

    
        arr.push({ name, email, password });

        await fs.writeFile('data.json', JSON.stringify(arr, null, 2));

        res.json({ msg: "Data inserted" });

    } catch (error) {
        res.json({ msg: "Error occurred" });
    }
});


app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        let arr = [];

        const fdata = await fs.readFile('data.json', 'utf-8');
        arr = JSON.parse(fdata);

        const status = arr.find(
            ele => ele.email === email && ele.password === password
        );

        if (status) {
            res.json({ msg: "success" });
        } else {
            res.json({ msg: "Invalid credentials" });
        }

    } catch (error) {
        res.json({ msg: "Error occurred" });
    }
});


app.listen(PORT, () => {
    console.log("Server is working on port: " + PORT);
});


