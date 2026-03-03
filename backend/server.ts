import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as any);

const visitSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

const Visit = mongoose.model("Visit", visitSchema);

app.post("/api/visit", async (req, res) => {
  let visitData = await Visit.findOne();
  if (!visitData) {
    visitData = new Visit({ count: 1 });
  } else {
    visitData.count += 1;
  }
  await visitData.save();
  res.json({ count: visitData.count });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
