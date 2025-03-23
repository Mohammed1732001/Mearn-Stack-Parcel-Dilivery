import userModel from "../../../../DB/models/user.model.js"

// auth انا بقول اللي المفرزض اللي يشوف كل اليوزر الادمن فقط وبقول نعمل ال 


// تاني حاجه نعمل شررط لو هو ادمن من الرول يشوف المستخدمين  ويعمل الديليت 

export const getAllUser = async (req, res, next) => {
    try {
        const user = await userModel.find().sort({ createdAt: -1 })
        return res.status(200).json({ message: "Done", user })
    } catch (error) {
        return res.status(500).json({ message: "catch error", error })
    }
}
export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await userModel.findByIdAndDelete(id)
        return res.status(200).json({ message: "Deleted user" })

    } catch (error) {
        return res.status(500).json({ message: "catch error", error })
    }
}