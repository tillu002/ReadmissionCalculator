import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.json({msg: "Backend for readmission handling"});
})

app.post('/calculate', (req, res) => {
    const { totalDischarges, readmissions } = req.body;

    if (!totalDischarges || !readmissions || totalDischarges <= 0) {
        return res.json({ error: "Invalid input. Total discharges must be greater than 0." });
    }

    const readmissionRate = (readmissions / totalDischarges) * 100;
    res.json({ readmissionRate });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
