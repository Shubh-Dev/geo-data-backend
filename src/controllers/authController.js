import supabase from '../services/supabaseService.js';

// Signup logic
export const signUp = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) return res.status(400).json({ error: error.message });
        res.status(200).json({ message: 'User signed up successfully', user: data.user });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { data, error } = supabase.auth.signInWithPassword({ email, password });
        if (error) return res.status(400).json({ error: error.message });

        res.status(200).json({ message: 'Logged in successfully', user: data.user });
    } catch (err) {
        res.status(500).join({ error: 'Internal server Error' });
    }
}

export const signOut = async (req, res) => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) return res.status(400).json({ error: error.message });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
