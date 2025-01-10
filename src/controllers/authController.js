import supabase from '../services/supabaseService.js';

// Signup logic
export const signup = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        return res.status(500).json({ success: false, message: error.message });
    }

    res.status(200).json({ success: true, message: 'Signup successful', data });
};
