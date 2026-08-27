const SUPABASE_URL = 'https://sqbbefjterjiovxkpcmc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_9qm1k8ZfOtU40KeFB6k2KQ_NBlWF1m5';

// Explicitly attach the initialized client to the window object
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function checkAuth() {
    const user = localStorage.getItem('motionx_user');
    const authLink = document.getElementById('nav-auth');
    const charLink = document.getElementById('nav-char');
    
    if (authLink && charLink) {
        if (user) {
            authLink.style.display = 'none';
            charLink.style.display = 'inline';
        } else {
            authLink.style.display = 'inline';
            charLink.style.display = 'none';
        }
    }
}

// Run auth check on load
document.addEventListener('DOMContentLoaded', checkAuth);
