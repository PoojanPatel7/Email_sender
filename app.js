// Pre-defined Email Templates
const templates = {
    zenith_dark: {
        subject: "Elevate Your Brand with ZENITH",
        body: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: auto; background: #0a0a0a; border-radius: 16px; overflow: hidden; color: #e5e5e5; border: 1px solid #222;">
    <!-- Header -->
    <div style="padding: 50px 30px; text-align: center; border-bottom: 1px solid #222; background: #000 url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop') center/cover; position: relative;">
        <div style="position: absolute; top:0;left:0;right:0;bottom:0; background: rgba(0,0,0,0.7);"></div>
        <div style="position: relative; z-index: 1;">
            <img src="{{LOGO_URL}}" alt="ZENITH Logo" style="max-height: 80px; margin-bottom: 20px; border-radius: 8px;" />
            <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 900; letter-spacing: 4px;">ZENITH</h1>
            <p style="color: #3b82f6; margin: 12px 0 0 0; font-size: 13px; text-transform: uppercase; font-weight: bold; letter-spacing: 3px;">Next-Gen Digital Solutions</p>
        </div>
    </div>
    <!-- Body -->
    <div style="padding: 40px 35px;">
        <p style="font-size: 18px; color: #ffffff; margin-top: 0;">Hi,</p>
        <p style="line-height: 1.8; color: #d4d4d8;">I'm reaching out from <strong>ZENITH</strong>. We are a premier digital agency specializing in modern, high-performance website development and cinematic video editing.</p>
        
        <!-- Cards -->
        <div style="margin: 35px 0;">
            <div style="background: #111111; border: 1px solid #222222; padding: 25px; border-radius: 12px; margin-bottom: 15px; border-left: 4px solid #3b82f6;">
                <h3 style="margin: 0 0 10px 0; color: #ffffff;">🌐 Web Development</h3>
                <p style="margin: 0; color: #a1a1aa; font-size: 14px; line-height: 1.6;">Modern, ultra-fast, and responsive websites that convert visitors into customers.</p>
            </div>
            <div style="background: #111111; border: 1px solid #222222; padding: 25px; border-radius: 12px; border-left: 4px solid #8b5cf6;">
                <h3 style="margin: 0 0 10px 0; color: #ffffff;">🎬 Video Editing</h3>
                <p style="margin: 0; color: #a1a1aa; font-size: 14px; line-height: 1.6;">Engaging promotional videos, social media reels, and cinematic ads that elevate your brand.</p>
            </div>
        </div>

        <p style="line-height: 1.8; color: #d4d4d8;">To see what we can do for you, check out our latest demo platform:</p>
        
        <div style="text-align: center; margin: 45px 0;">
            <a href="https://academy-web-mu.vercel.app/" style="background: linear-gradient(135deg, #3b82f6, #6366f1); color: #ffffff; padding: 18px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4); text-transform: uppercase; letter-spacing: 1px;">Explore Live Demo</a>
        </div>
        
        <p style="line-height: 1.8; color: #d4d4d8;">We'd love to learn more about your business. Reply to this email and let's build something extraordinary together.</p>
    </div>
    <!-- Footer -->
    <div style="background: #050505; padding: 30px; text-align: center; border-top: 1px solid #222;">
        <p style="margin: 0; color: #71717a; font-size: 14px;">&copy; 2026 ZENITH Agency. All rights reserved.</p>
        <p style="margin: 10px 0 0 0; color: #52525b; font-size: 12px;">You are receiving this email because we identified you as an industry leader.</p>
    </div>
</div>`
    },
    zenith_pitch: {
        subject: "Transform Your Digital Presence with ZENITH",
        body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    <div style="background: #000000; padding: 30px 20px; text-align: center;">
        <img src="{{LOGO_URL}}" alt="ZENITH Logo" style="max-height: 60px; margin-bottom: 15px;" />
        <h1 style="color: #ffffff; margin: 0; letter-spacing: 3px; font-size: 28px;">ZENITH</h1>
        <p style="color: #aaaaaa; margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Creative & Digital Solutions</p>
    </div>
    <div style="padding: 40px 30px; color: #333333; line-height: 1.7; font-size: 15px;">
        <p style="margin-top: 0;">Hi,</p>
        <p>I hope you're doing well!</p>
        <p>I'm reaching out from <strong style="color: #000000;">ZENITH</strong>, a creative and digital solutions agency specializing in modern website development and professional video editing.</p>
        
        <p style="margin-top: 25px; font-weight: bold;">We help businesses build a strong online presence through:</p>
        <ul style="padding-left: 20px; color: #444444; margin-bottom: 25px;">
            <li style="margin-bottom: 12px;"><strong style="color: #000000;">Website Development:</strong> Modern, responsive, and user-friendly websites tailored to your business and brand.</li>
            <li><strong style="color: #000000;">Video Editing:</strong> Engaging promotional videos, social media reels, advertisements, and other content to help your brand communicate effectively.</li>
        </ul>
        
        <div style="background: #f8f9fa; padding: 25px; border-left: 4px solid #3b82f6; border-radius: 0 8px 8px 0; margin: 30px 0; text-align: center;">
            <p style="margin: 0 0 15px 0; color: #555;">To give you an idea of our capabilities, please explore our demo website:</p>
            <a href="https://academy-web-mu.vercel.app/" style="display: inline-block; background: #3b82f6; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 6px; font-weight: bold; letter-spacing: 0.5px;">View Demo Website</a>
        </div>
        
        <p>We'd love to learn more about your business and discuss how we could support your requirements.</p>
        <p>If you're interested, feel free to reply to this email. We'd be happy to discuss your ideas, requirements, and potential collaboration.</p>
        
        <p>Thank you for your time. Looking forward to hearing from you!</p>
        
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 30px 0;">
        
        <p style="margin: 0; font-weight: bold; font-size: 16px;">Best regards,</p>
        <p style="margin: 4px 0 0 0; color: #777777;">Team ZENITH</p>
    </div>
</div>`
    },
    newsletter: {
        subject: "What's new this month? 🚀",
        body: `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80" alt="Tech News" style="width: 100%; height: 260px; object-fit: cover; display: block;" />
    
    <div style="padding: 40px 35px;">
        <div style="text-align: center; margin-bottom: 25px;">
            <img src="{{LOGO_URL}}" alt="Logo" style="max-height: 40px; margin-bottom: 15px;" />
            <br>
            <span style="background: #ecfdf5; color: #059669; padding: 6px 14px; border-radius: 50px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Monthly Update</span>
        </div>
        
        <h2 style="color: #0f172a; font-size: 32px; margin: 0 0 15px 0; letter-spacing: -0.5px; text-align: center;">What's new this month?</h2>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.7; margin-bottom: 35px; text-align: center;">We've been hard at work building new features to help you succeed. Check out our latest product updates, community highlights, and tips for getting the most out of your experience.</p>
        
        <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
            <tr>
                <td width="65" valign="top"><div style="width: 50px; height: 50px; background: #eff6ff; border-radius: 12px; text-align: center; line-height: 50px; font-size: 24px;">🚀</div></td>
                <td>
                    <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 18px;">Lightning Fast Loading</h4>
                    <p style="margin: 0; color: #64748b; font-size: 15px; line-height: 1.6;">We optimized our core engine. Things are now 3x faster across the board.</p>
                </td>
            </tr>
            <tr><td colspan="2" height="30"></td></tr>
            <tr>
                <td width="65" valign="top"><div style="width: 50px; height: 50px; background: #fef2f2; border-radius: 12px; text-align: center; line-height: 50px; font-size: 24px;">🎨</div></td>
                <td>
                    <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 18px;">New Design Editor</h4>
                    <p style="margin: 0; color: #64748b; font-size: 15px; line-height: 1.6;">Create stunning layouts with our totally revamped drag-and-drop tool.</p>
                </td>
            </tr>
        </table>

        <div style="text-align: center; margin-top: 45px;">
            <a href="#" style="display: inline-block; background: #0f172a; color: #ffffff; text-decoration: none; padding: 16px 35px; border-radius: 8px; font-weight: bold; font-size: 16px;">Read the Full Changelog</a>
        </div>
    </div>
    
    <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; color: #94a3b8; font-size: 14px; line-height: 1.6;">123 Business Rd, Tech City, NY 10010<br>Don't want these emails? <a href="#" style="color: #64748b; text-decoration: underline;">Unsubscribe here</a></p>
    </div>
</div>`
    },
    ecommerce: {
        subject: "Your Order Confirmation #ORD-8439201",
        body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 40px 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <div style="text-align: center; padding-bottom: 30px; border-bottom: 1px solid #e5e7eb;">
        <img src="{{LOGO_URL}}" alt="Logo" style="max-height: 50px; margin-bottom: 25px;" />
        <div style="width: 60px; height: 60px; background: #10b981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 20px auto; line-height: 60px;">✓</div>
        <h1 style="color: #111827; margin: 0; font-size: 26px;">Thank you for your order!</h1>
        <p style="color: #6b7280; margin: 12px 0 0 0; font-size: 14px;">Order #ORD-8439201 &bull; Placed on Sep 20, 2026</p>
    </div>
    
    <div style="padding: 30px 0;">
        <p style="color: #374151; font-weight: bold; margin-bottom: 20px; font-size: 16px;">Order Summary</p>
        <table width="100%" style="border-collapse: collapse;">
            <tr>
                <td style="padding: 20px 0; border-bottom: 1px solid #f3f4f6;">
                    <span style="color: #111827; font-weight: bold; display: block; margin-bottom: 4px;">Premium Wireless Headphones</span>
                    <span style="color: #6b7280; font-size: 13px;">Color: Matte Black | Qty: 1</span>
                </td>
                <td style="padding: 20px 0; border-bottom: 1px solid #f3f4f6; text-align: right; color: #111827; font-weight: bold;">$299.00</td>
            </tr>
            <tr>
                <td style="padding: 20px 0; border-bottom: 1px solid #f3f4f6;">
                    <span style="color: #111827; font-weight: bold; display: block; margin-bottom: 4px;">Extended Warranty (2 Years)</span>
                    <span style="color: #6b7280; font-size: 13px;">Qty: 1</span>
                </td>
                <td style="padding: 20px 0; border-bottom: 1px solid #f3f4f6; text-align: right; color: #111827; font-weight: bold;">$45.00</td>
            </tr>
        </table>
        
        <table width="100%" style="margin-top: 25px; font-size: 15px;">
            <tr><td style="color: #6b7280; padding: 6px 0;">Subtotal</td><td style="text-align: right; color: #374151;">$344.00</td></tr>
            <tr><td style="color: #6b7280; padding: 6px 0;">Shipping</td><td style="text-align: right; color: #10b981; font-weight: bold;">Free</td></tr>
            <tr><td style="color: #6b7280; padding: 6px 0;">Tax</td><td style="text-align: right; color: #374151;">$24.08</td></tr>
            <tr><td style="font-weight: bold; color: #111827; padding: 20px 0; font-size: 20px; border-top: 1px solid #e5e7eb; margin-top: 15px;">Total</td><td style="text-align: right; font-weight: bold; color: #111827; font-size: 20px; border-top: 1px solid #e5e7eb; margin-top: 15px;">$368.08</td></tr>
        </table>
    </div>
    
    <div style="background: #f9fafb; padding: 25px; border-radius: 8px; text-align: center;">
        <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 15px;">We'll send you a shipping confirmation email as soon as your order ships.</p>
        <a href="#" style="display: inline-block; background: #111827; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 15px;">View Order Status</a>
    </div>
</div>`
    },
    webinar: {
        subject: "You're Invited: The Future of Digital Experiences",
        body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.05);">
    <div style="background: #1e1b4b; padding: 40px 20px; text-align: center; color: white;">
        <img src="{{LOGO_URL}}" alt="Logo" style="max-height: 40px; margin-bottom: 25px; filter: brightness(0) invert(1);" />
        <h2 style="margin: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #a5b4fc;">Exclusive Webinar</h2>
        <h1 style="margin: 15px 0 0 0; font-size: 36px; line-height: 1.2;">The Future of Digital Experiences</h1>
    </div>
    <div style="padding: 40px 30px;">
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Join industry leaders as we explore how modern design and cinematic video are shaping the next generation of online consumer behavior.</p>
        
        <div style="background: #f3f4f6; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
            <table width="100%">
                <tr>
                    <td width="33%" style="border-right: 1px solid #e5e7eb; text-align: center;">
                        <span style="display: block; font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: bold; margin-bottom: 5px;">Date</span>
                        <span style="color: #111827; font-weight: bold; font-size: 16px;">Oct 12, 2026</span>
                    </td>
                    <td width="33%" style="border-right: 1px solid #e5e7eb; text-align: center;">
                        <span style="display: block; font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: bold; margin-bottom: 5px;">Time</span>
                        <span style="color: #111827; font-weight: bold; font-size: 16px;">2:00 PM EST</span>
                    </td>
                    <td width="33%" style="text-align: center;">
                        <span style="display: block; font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: bold; margin-bottom: 5px;">Format</span>
                        <span style="color: #111827; font-weight: bold; font-size: 16px;">Live Zoom</span>
                    </td>
                </tr>
            </table>
        </div>
        
        <div style="text-align: center; margin: 40px 0 20px 0;">
            <a href="#" style="background: #4f46e5; color: white; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">Reserve Your Seat</a>
        </div>
    </div>
</div>`
    },
    password_reset: {
        subject: "Reset Your Password",
        body: `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; padding: 40px 30px; text-align: center;">
    <img src="{{LOGO_URL}}" alt="Logo" style="max-height: 45px; margin-bottom: 30px;" />
    <div style="width: 70px; height: 70px; background: #fee2e2; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; margin: 0 auto 20px auto;">
        🔐
    </div>
    <h2 style="color: #111827; margin: 0 0 15px 0; font-size: 24px;">Reset Password Request</h2>
    <p style="color: #4b5563; line-height: 1.6; margin-bottom: 30px; font-size: 15px;">We received a request to reset your password. If you didn't make this request, you can safely ignore this email.</p>
    
    <a href="#" style="display: inline-block; background: #ef4444; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 8px; font-weight: bold; font-size: 16px; width: 100%; box-sizing: border-box;">Reset Password</a>
    
    <p style="color: #9ca3af; font-size: 13px; margin-top: 30px;">This link will expire in 15 minutes.</p>
</div>`
    },
    welcome: {
        subject: "Welcome to Our Community! 🎉",
        body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;">
    <div style="background: #3b82f6; padding: 40px 20px; text-align: center;">
        <img src="{{LOGO_URL}}" alt="Logo" style="max-height: 50px; margin-bottom: 20px; filter: brightness(0) invert(1);" />
        <h1 style="color: #ffffff; margin: 0;">Welcome Aboard!</h1>
    </div>
    <div style="padding: 30px; color: #333333; line-height: 1.6;">
        <p>Hello there,</p>
        <p>We are thrilled to have you join us. Your account has been successfully created and you are now part of our growing community.</p>
        <p>Get ready to explore amazing features and build something great!</p>
        <div style="text-align: center; margin: 30px 0;">
            <a href="#" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Get Started</a>
        </div>
        <p>If you have any questions, just reply to this email.</p>
        <br>
        <p>Cheers,<br><strong>The Team</strong></p>
    </div>
</div>`
    },
    login_otp: {
        subject: "Your Secure Login OTP 🔒",
        body: `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; padding: 40px 30px; text-align: center;">
    <img src="{{LOGO_URL}}" alt="Logo" style="max-height: 40px; margin-bottom: 30px;" />
    <h2 style="color: #333; margin-top: 0;">Login Verification</h2>
    <p style="color: #666; margin-bottom: 30px;">Use the following One-Time Password to securely log into your account. This code is valid for 10 minutes.</p>
    
    <div style="background: #f4f4f5; border: 2px dashed #d4d4d8; padding: 15px; font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #18181b; border-radius: 8px; margin-bottom: 30px;">
        482915
    </div>
    
    <p style="color: #999; font-size: 12px;">If you didn't request this code, you can safely ignore this email.</p>
</div>`
    },
    signup: {
        subject: "Please verify your email address",
        body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;">
    <div style="padding: 40px 30px; color: #333333; line-height: 1.6; text-align: center;">
        <img src="{{LOGO_URL}}" alt="Logo" style="max-height: 45px; margin-bottom: 25px;" />
        <h2 style="margin-top: 0; color: #111;">Verify Your Email</h2>
        <p style="color: #555;">Almost there! We just need to verify your email address to complete your registration.</p>
        <a href="#" style="display: inline-block; background: #10b981; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: bold; margin: 25px 0;">Verify My Account</a>
        <p style="color: #888; font-size: 13px;">Or copy and paste this link into your browser:<br><a href="#" style="color: #3b82f6;">https://example.com/verify/token123</a></p>
    </div>
</div>`
    },
    blank: {
        subject: "New Message",
        body: `<div style="font-family: Arial, sans-serif; color: #333333;">
    <img src="{{LOGO_URL}}" alt="Logo" style="max-height: 40px; margin-bottom: 20px;" />
    <p>Hi,</p>
    <p>Type your message here...</p>
    <br>
    <p>Thanks,</p>
</div>`
    }
};

// DOM Elements
const form = document.getElementById('emailForm');
const toEmailInput = document.getElementById('to_email');
const logoUrlInput = document.getElementById('logo_url');
const subjectInput = document.getElementById('subject');
const templateSelector = document.getElementById('template_selector');
const emailBodyInput = document.getElementById('email_body');

const previewTo = document.getElementById('preview_to');
const previewSubject = document.getElementById('preview_subject');
const previewBody = document.getElementById('preview_body');

const settingsModal = document.getElementById('settingsModal');
const settingsBox = document.getElementById('settingsBox');
const btnSettings = document.getElementById('btnSettings');
const btnCloseSettings = document.getElementById('btnCloseSettings');
const btnSaveKeys = document.getElementById('btnSaveKeys');
const btnDeleteKeys = document.getElementById('btnDeleteKeys');

const keyService = document.getElementById('key_service');
const keyTemplate = document.getElementById('key_template');
const keyPublic = document.getElementById('key_public');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastIcon = document.getElementById('toastIcon');

// State
let emailjsConfig = {
    serviceId: '',
    templateId: '',
    publicKey: ''
};

// Initialize App
function init() {
    loadSettings();
    
    // Set initial template
    loadTemplate(templateSelector.value);
    
    // Check if settings are missing, prompt user
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
        setTimeout(openSettings, 500);
    } else {
        // Init EmailJS
        emailjs.init(emailjsConfig.publicKey);
    }
}

// Event Listeners
templateSelector.addEventListener('change', (e) => loadTemplate(e.target.value));
logoUrlInput.addEventListener('input', () => {
    // Reload template to apply new logo
    loadTemplate(templateSelector.value);
});

toEmailInput.addEventListener('input', (e) => previewTo.textContent = e.target.value || 'client@example.com');
subjectInput.addEventListener('input', (e) => previewSubject.textContent = e.target.value || 'No Subject');
emailBodyInput.addEventListener('input', (e) => previewBody.innerHTML = e.target.value);

btnSettings.addEventListener('click', openSettings);
btnCloseSettings.addEventListener('click', closeSettings);
btnSaveKeys.addEventListener('click', saveSettings);
btnDeleteKeys.addEventListener('click', deleteSettings);

form.addEventListener('submit', sendEmail);

// Load Template into Editor
function loadTemplate(templateKey) {
    const tpl = templates[templateKey];
    if (tpl) {
        subjectInput.value = tpl.subject;
        // Inject logo URL into template placeholders
        let rawHtml = tpl.body.replace(/{{LOGO_URL}}/g, logoUrlInput.value);
        emailBodyInput.value = rawHtml;
        
        // Trigger updates to preview
        subjectInput.dispatchEvent(new Event('input'));
        emailBodyInput.dispatchEvent(new Event('input'));
    }
}

// Modal Logic
function openSettings() {
    settingsModal.classList.remove('hidden');
    // slight delay for transition
    setTimeout(() => {
        settingsModal.classList.remove('opacity-0');
        settingsBox.classList.remove('scale-95');
    }, 10);
    
    // Populate existing
    keyService.value = emailjsConfig.serviceId;
    keyTemplate.value = emailjsConfig.templateId;
    keyPublic.value = emailjsConfig.publicKey;
    
    if(emailjsConfig.serviceId) {
        btnDeleteKeys.classList.remove('hidden');
    } else {
        btnDeleteKeys.classList.add('hidden');
    }
}

function closeSettings() {
    settingsModal.classList.add('opacity-0');
    settingsBox.classList.add('scale-95');
    setTimeout(() => {
        settingsModal.classList.add('hidden');
    }, 300);
}

// Settings Logic (LocalStorage)
function loadSettings() {
    const saved = localStorage.getItem('zenith_email_keys');
    if (saved) {
        try {
            emailjsConfig = JSON.parse(saved);
        } catch(e) {}
    }
}

function saveSettings() {
    const s = keyService.value.trim();
    const t = keyTemplate.value.trim();
    const p = keyPublic.value.trim();
    
    if(!s || !t || !p) {
        showToast("Please fill all key fields!", "error");
        return;
    }
    
    emailjsConfig = { serviceId: s, templateId: t, publicKey: p };
    localStorage.setItem('zenith_email_keys', JSON.stringify(emailjsConfig));
    emailjs.init(emailjsConfig.publicKey);
    
    closeSettings();
    showToast("API Keys Saved Successfully!");
}

function deleteSettings() {
    if(confirm("Are you sure you want to delete your saved API Keys?")) {
        localStorage.removeItem('zenith_email_keys');
        emailjsConfig = { serviceId: '', templateId: '', publicKey: '' };
        keyService.value = '';
        keyTemplate.value = '';
        keyPublic.value = '';
        btnDeleteKeys.classList.add('hidden');
        showToast("Keys Deleted!", "error");
    }
}

// Send Email
function sendEmail(e) {
    e.preventDefault();
    
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
        openSettings();
        showToast("Please configure your EmailJS keys first!", "error");
        return;
    }

    const btn = document.getElementById('btnSend');
    const btnText = document.getElementById('btnSendText');
    const btnIcon = document.getElementById('btnSendIcon');
    const btnSpinner = document.getElementById('btnSendSpinner');

    // UI Loading state
    btn.disabled = true;
    btnText.textContent = "Sending...";
    btnIcon.style.display = 'none';
    btnSpinner.style.display = 'block';

    const templateParams = {
        to_email: toEmailInput.value,
        subject: subjectInput.value,
        message: emailBodyInput.value 
    };

    emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            showToast("Email sent successfully!");
        }, (err) => {
            console.error('FAILED...', err);
            showToast("Failed to send email. Check console.", "error");
        })
        .finally(() => {
            // Restore UI
            btn.disabled = false;
            btnText.textContent = "Send Email Now";
            btnIcon.style.display = 'block';
            btnSpinner.style.display = 'none';
        });
}

// Toast Notification
function showToast(msg, type = "success") {
    toastMessage.textContent = msg;
    
    if(type === "error") {
        toastIcon.className = "fa-solid fa-circle-exclamation text-red-400 text-xl";
    } else {
        toastIcon.className = "fa-solid fa-circle-check text-green-400 text-xl";
    }
    
    toast.classList.remove('translate-y-20', 'opacity-0');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Boot up
init();
