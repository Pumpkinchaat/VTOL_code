if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT , () => {
    console.log(`[INFO] Server is now running on PORT ${PORT}`);
})