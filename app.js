// Pre-defined Email Templates
const templates = {
    zenith_pitch: {
        subject: "Transform Your Digital Presence with ZENITH",
        body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    <div style="background: #000000; padding: 30px 20px; text-align: center;">
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
    welcome: {
        subject: "Welcome to Our Community! 🎉",
        body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;">
    <div style="background: #3b82f6; padding: 40px 20px; text-align: center;">
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
        body: `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; padding: 30px; text-align: center;">
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
        emailBodyInput.value = tpl.body;
        
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
    if(confirm("Are you sure you want to delete your saved keys?")) {
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
        showToast("Please configure EmailJS keys first!", "error");
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

    // Parameters to send to EmailJS
    // NOTE: Your EmailJS template must have {{{message}}}, {{to_email}}, {{subject}} variables configured!
    const templateParams = {
        to_email: toEmailInput.value,
        subject: subjectInput.value,
        message: emailBodyInput.value // This sends the raw HTML. Must use {{{message}}} in dashboard.
    };

    emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            showToast("Email sent successfully!");
            // Optional: reset form
            // form.reset();
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
