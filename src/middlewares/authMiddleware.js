import supabase from '../services/supabaseService.js';

export const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data) {
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }

    req.user = data;
    next();
};
