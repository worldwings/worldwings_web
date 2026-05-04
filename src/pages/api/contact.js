import nodemailer from "nodemailer";

const handler = async (req, res) => {
  try {
    const { body } = req;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        pass: process.env.EMAIL_PASS,
        user: process.env.EMAIL_USER,
      },
    });

    const isContact = body.type == "Contact";

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      replyTo: body.email, // important fix
      to: process.env.EMAIL_USER,
      subject: isContact
        ? `New contact submission from ${body.name}`
        : `New enquiry from ${body.name}`,
      html: `
        <h2>New Travel Enquiry</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.phoneNumber}</p>
        <p><b>City:</b> ${body.city}</p>
        ${
          isContact
            ? `<p><b>Message:</b> ${body.message}</p>`
            : `<p><b>Destination:</b> ${body.destination}</p>
        <p><b>Date of Travel:</b> ${body.dateOfTravel}</p>`
        }
        <p><b>Type:</b> ${body.type}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      isContact,
      body,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
    });
  }
};

export default handler;
