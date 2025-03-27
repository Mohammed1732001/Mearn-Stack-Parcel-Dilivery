
import ejs from "ejs"
import sendMail from "../EmailService/sendEmail.js"
import CryptoJs from "crypto-js"
import userModel from "../../DB/models/user.model.js";


const sendWelcomeEmail = async () => {
  const users = await userModel.find({ status: 0 });

  // console.log(users);
  if (users.length > 0) {
    for (let user of users) {
      const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS);
      const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
      ejs.renderFile(
        "templates/welcome.ejs",
        { fullname: user.fullName, password: originalPassword, email: user.email },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "Welcome to SendIT",
            html: data,
          };

          try {
            sendMail(messageoption);
            await userModel.findByIdAndUpdate(user._id, { $set: { status: 1 } });
          } catch (error) {
            console.log(err);
          }


        })
    }

  }

}
export default sendWelcomeEmail;
