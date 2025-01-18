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

  // Validate request body
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Authenticate using Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }
    const token = data?.access_token;

    if (!token) {
      return res.status(400).json({ error: "Token not found" });
    }

    // Respond with success
    res
      .status(200)
      .json({ message: "Logged in successfully", user: data.user });
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const signOut = async (req, res) => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) return res.status(400).json({ error: error.message });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
