import conectDB from "../DB/conniction.js"
import authModel from "./modules/auth/auth.router.js"


const initApp = (app, express) => {
    app.use(express.json())

    app.use("/auth", authModel)






    app.get("*", (req, res, next) => {
        res.json({ message: "ERROR 404 PAGE NOT FOUND" })
    })
    // connect DB
    conectDB()
}

export default initApp