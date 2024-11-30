import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import sequelize from "./models/index";

const PORT = process.env.PORT || 3000;

const  startserver = async () => {
    try{
        await sequelize.authenticate();
        console.log("Database conected");
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch (err){
        console.error("Unable to connect to database", err);
    }
}

startserver();