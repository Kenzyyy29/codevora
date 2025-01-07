import {s} from "motion/react-client";

const form = async (req, res) => {
 const {name, email, tel, subject, message, checkbox} = req.body;
 const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
   user: process.env.MY_APP_EMAIL,
   pass: process.env.MY_APP_PASSWORD,
  },
 });

 try {
  await transporter.sendMail({
   from: email,
   to: process.env.MY_EMAIL_RECEIVER,
   replaTo: email,
   subject: `Anda mendapatkan pesan dari ${name}`,
   html: `<p>Anda mendapatkan pesan dari : ${name}</p><br>
    <p>Dengan Email : ${email}</p><br>
    <p>No. Handphone : ${tel}</p><br>
    <p>Subjek : ${subject}</p><br>
    <p>Pesan : ${message}</p><br>`,
  });
 } catch (error) {
    return res.status(500).json({error: error.message || error.toString()});
 }

 return res.status(200).json({message: "Pesan terkirim"});
};

export default form;
