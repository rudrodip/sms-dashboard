const admin = require('firebase-admin');

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });

    res.status(201).json({
      message: 'User created successfully',
      data: {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        disabled: user.disabled,
      },
    });
  } catch (err) {
    console.error('Error creating new user:', err);
    res.status(500).json({
      message: 'Unable to create user',
      error: err.message,
    });
  }
};