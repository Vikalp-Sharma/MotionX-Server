const SUPABASE_URL = 'https://sqbbefjterjiovxkpcmc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_9qm1k8ZfOtU40KeFB6k2KQ_NBlWF1m5';

// Explicitly attach the initialized client to the window object with a safe name
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Auth state management for navbar
window.supabaseClient.auth.onAuthStateChange((event, session) => {
    const authLink = document.getElementById('nav-auth');
    const charLink = document.getElementById('nav-char');
    
    if (authLink && charLink) {
        if (session) {
            authLink.style.display = 'none';
            charLink.style.display = 'inline';
        } else {
            authLink.style.display = 'inline';
            charLink.style.display = 'none';
        }
    }
});
