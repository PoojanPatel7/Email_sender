// DOM Elements
const form = document.getElementById('emailForm');
const smtpHost = document.getElementById('smtp_host');
const smtpUser = document.getElementById('smtp_user');
const smtpPass = document.getElementById('smtp_pass');
const saveCredsCheckbox = document.getElementById('save_creds');

const toEmail = document.getElementById('to_email');
const subject = document.getElementById('subject');
const htmlCode = document.getElementById('html_code');

const previewTo = document.getElementById('preview_to');
const previewSubject = document.getElementById('preview_subject');
const previewFrame = document.getElementById('preview_frame');
const emptyState = document.getElementById('empty_state');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastIcon = document.getElementById('toastIcon');

// Initialize
function init() {
    loadSavedCredentials();
    
    // Setup generic template on first load if empty
    if (!htmlCode.value) {
        htmlCode.value = `<div style="font-family: Arial, sans-serif; padding: 40px; text-align: center; background: #f9fafb;">
    <h1 style="color: #111827;">Hello World!</h1>
    <p style="color: #4b5563;">This is a test HTML email sent directly from the browser.</p>
</div>`;
    }
    updatePreview();
}

// Live Preview Sync
htmlCode.addEventListener('input', updatePreview);
toEmail.addEventListener('input', (e) => previewTo.textContent = e.target.value || 'client@example.com');
subject.addEventListener('input', (e) => previewSubject.textContent = e.target.value || 'Amazing news inside!');

function updatePreview() {
    const code = htmlCode.value;
    if (code.trim() === '') {
        emptyState.style.display = 'flex';
        previewFrame.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        previewFrame.style.display = 'block';
        
        // Write the HTML into the iframe document for perfect isolation
        const doc = previewFrame.contentWindow.document;
        doc.open();
        doc.write(code);
        doc.close();
    }
}

// Send Email via SMTP.js
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Gather all inputs
    const h = smtpHost.value.trim();
    const u = smtpUser.value.trim();
    const p = smtpPass.value.trim();
    const to = toEmail.value.trim();
    const sub = subject.value.trim();
    const body = htmlCode.value;

    if(!h || !u || !p || !to || !sub || !body) {
        showToast("Please fill out all required fields.", "error");
        return;
    }

    // 2. Save credentials if checked
    if (saveCredsCheckbox.checked) {
        localStorage.setItem('directmail_creds', JSON.stringify({ host: h, user: u, pass: p }));
    } else {
        localStorage.removeItem('directmail_creds');
    }

    // 3. UI Loading State
    const btn = document.getElementById('btnSend');
    const btnText = document.getElementById('btnSendText');
    const btnIcon = document.getElementById('btnSendIcon');
    const btnSpinner = document.getElementById('btnSendSpinner');

    btn.disabled = true;
    btnText.textContent = "Connecting to SMTP...";
    btnIcon.style.display = 'none';
    btnSpinner.style.display = 'block';

    // 4. Execute SMTP.js request
    Email.send({
        Host: h,
        Username: u,
        Password: p,
        To: to,
        From: u, // Standard practice to send from the authenticated user
        Subject: sub,
        Body: body
    }).then(
        message => {
            if (message === "OK") {
                showToast("HTML Email Delivered Successfully!");
            } else {
                showToast("SMTP Error: " + message, "error");
            }
        }
    ).catch(err => {
        showToast("Connection Error: " + err, "error");
    }).finally(() => {
        // Restore UI
        btn.disabled = false;
        btnText.textContent = "Send HTML Email";
        btnIcon.style.display = 'block';
        btnSpinner.style.display = 'none';
    });
});

// Load stored credentials
function loadSavedCredentials() {
    try {
        const saved = localStorage.getItem('directmail_creds');
        if (saved) {
            const data = JSON.parse(saved);
            smtpHost.value = data.host || 'smtp.gmail.com';
            smtpUser.value = data.user || '';
            smtpPass.value = data.pass || '';
            saveCredsCheckbox.checked = true;
        }
    } catch(e) {}
}

// Toast Notification
function showToast(msg, type = "success") {
    toastMessage.textContent = msg;
    
    if(type === "error") {
        toastIcon.className = "fa-solid fa-circle-exclamation text-red-400 text-xl";
    } else {
        toastIcon.className = "fa-solid fa-circle-check text-green-400 text-xl";
    }
    
    toast.classList.remove('translate-y-24', 'opacity-0');
    
    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 4000);
}

// Boot
init();
