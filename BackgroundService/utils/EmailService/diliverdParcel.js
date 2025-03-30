import ejs from "ejs"
import sendMail from "../EmailService/sendEmail.js"
import parcelModel from "../../DB/models/parcel.model.js";

const SendParcelDeliveredEmail = async () => {
  const parcels = await parcelModel.find({ status: 2 });

  if (parcels.length > 0) {
    for (let parcel of parcels) {
      ejs.renderFile(
        "templates/deliveredparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientName,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: parcel.senderEmail,
            subject: "Your parcel has been delivered",
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
        "templates/deliveredparcel.ejs",
        {
            sendername: parcel.senderName,
            from: parcel.from,
            to: parcel.to,
            recipientname: parcel.recipientName,
            cost: parcel.cost,
            weight: parcel.wieght,
            note: parcel.note
        },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: parcel.recipientName,
            subject: "Your parcel has been delivered",
            html: data,
          };

          try {
            sendMail(messageoption);
            await parcelModel.findByIdAndUpdate(parcel._id, { $set: { status: 3} });
          } catch (error) {
            console.log(err);
          }
        }
      );
    }
  }
};


export default SendParcelDeliveredEmail






