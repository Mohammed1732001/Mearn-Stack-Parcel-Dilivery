import ejs from "ejs"
import sendMail from "../EmailService/sendEmail.js"
import parcelModel from "../../DB/models/parcel.model.js";


const sendParcelPandingEmail = async () => {
    const parcels = await parcelModel.find({ status: 0 });
    if (parcels.length > 0) {
        for (let parcel of parcels) {
            ejs.renderFile(
                "templates/pendingparcel.ejs",
                {
                    sendername: parcel.sendername,
                    from: parcel.from,
                    to: parcel.to,
                    recipientname: parcel.recipientName,
                    cost: parcel.cost,
                    weight: parcel.wieght,
                    note: parcel.note,
                },
                async (err, data) => {
                    let messageoption = {
                        from: process.env.EMAIL,
                        to: parcel.sendMail,
                        subject: "You've got a parcel",
                        html: data,
                    };

                    try {
                        sendMail(messageoption);

                    } catch (error) {
                        console.log(err);
                    }
                }
            );

            ejs.renderFile(
                "templates/pendingparcel.ejs",
                {
                    sendername: parcel.sendername,
                    from: parcel.from,
                    to: parcel.to,
                    recipientname: parcel.recipientname,
                    cost: parcel.cost,
                    weight: parcel.weight,
                    note: parcel.note,
                },
                async (err, data) => {
                    let messageoption = {
                        from: process.env.EMAIL,
                        to: parcel.recipientemail,
                        subject: "You've got a parcel",
                        html: data,
                    };

                    try {
                        sendMail(messageoption);
                        await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 1 } });
                    } catch (error) {
                        console.log(err);
                    }
                }
            );
        }
    }
};





export default sendParcelPandingEmail