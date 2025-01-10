import express from 'express';
import supabase from './services/supabaseService.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.get('/test-supabase', async (req, res) => {
    const { data, error } = await supabase.from('users').select('*');

    if (error) {
        return res.status(500).json({ success: false, message: error.message });
    };

    return res.status(200).json({ success: true, data });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});