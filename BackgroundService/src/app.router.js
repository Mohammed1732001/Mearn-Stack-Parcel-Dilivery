import conectDB from "../DB/conniction.js"

import corn from "node-cron"
import sendWelcomeEmail from "../utils/EmailService/welcomEmail.js"




const initApp = (express, app) => {

    app.use(express.json())

    // task SCheduler
        const run = () => {
        corn.schedule("* * * * * *", async () => {
            sendWelcomeEmail()
            console.log("running a task every minute");
        })
    }

    // run()







    // connect DB
    conectDB()


}


export default initApp