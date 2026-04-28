import nodemailer from "nodemailer";
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // // Validate required fields
    // if (!name || !email || !message) {
    //   return res.status(400).json({ 
    //     message: 'Missing required fields: name, email, and message are required' 
    //   });
    // }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 's.rajarathinam1999@gmail.com',
        pass: 'uvgt esqn qzor uero', // app password
      },
    });

    const result = await transporter.sendMail({

      from: "s.rajarathinam1999@gmail.com",
      to: "yora8807@gmail.com",
      subject: `Contact from test..`,
      text: "Test mail from NOD",
    });

    return res.status(200).json({
      result,
      message: 'Message sent successfully. We\'ll get back to you soon!',
      data: {
        name,
        email,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    res.status(500).json({
      message: 'Internal server error. Please try again later.'
    });
  }
}
