

// App router

import conectDB from "../DB/conniction.js"
import authModel from "./modules/auth/auth.router.js"
import userModel from "./modules/user/user.router.js"
import parcelModel from "./modules/parcel/parcel.router.js"


const initApp = (app, express) => {
    app.use(express.json())

    app.use("/api/v1/auth", authModel)
    app.use("/api/v1/user", userModel)
    app.use("/api/v1/parcel", parcelModel)





    app.get("*", (req, res, next) => {
        res.json({ message: "ERROR 404 PAGE NOT FOUND" })
    })
    // connect DB
    conectDB()
}

export default initApp