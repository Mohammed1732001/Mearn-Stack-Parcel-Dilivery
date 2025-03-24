import conectDB from "../DB/conniction.js"

import corn from "node-cron"



const initApp = (express, app) => {

    app.use(express.json())

    // task SCheduler
        const run = () => {
        corn.schedule("* * *  * *", async () => {
            console.log("running a task every minute");

        })
    }

    run()







    // connect DB
    conectDB()


}


export default initApp