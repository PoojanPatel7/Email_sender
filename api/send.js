const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { host, user, pass, to, subject, html } = req.body;

    // Validate inputs
    if (!host || !user || !pass || !to || !subject || !html) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        // Create Nodemailer transporter (equivalent to PHPMailer setup)
        const transporter = nodemailer.createTransport({
            host: host,
            port: 465,
            secure: true, // use SSL/TLS for port 465
            auth: {
                user: user,
                pass: pass
            }
        });

        // Send email
        const info = await transporter.sendMail({
            from: user, // Sender address
            to: to, // Receiver address
            subject: subject, // Subject line
            html: html // HTML body content
        });

        return res.status(200).json({ 
            success: true, 
            message: 'Email sent successfully!', 
            messageId: info.messageId 
        });
        
    } catch (error) {
        console.error("Nodemailer Error:", error);
        return res.status(500).json({ 
            success: false, 
            message: error.message || 'Failed to send email. Check credentials.' 
        });
    }
}
