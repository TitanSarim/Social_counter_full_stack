const jwt = require('jsonwebtoken');

const generatedToken = (userid, email, username) => {

    const token = jwt.sign({userid, email, username}, process.env.JWT_SECRET, { expiresIn: '7d' });

    return token;
}

module.exports = generatedToken;