import app from "./index.js";
import connectDB from "./config/db.js";

connectDB();
app.listen(5000, () => console.log("Server running"));
