
// controller 2
const User = require('../Models/user.js');
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../service/auth.js');

async function signUp(req, res) {
    const { name, email, password } = req.body;
    try {
        await User.create({
            name,
            email,
            password
        });
        return res.redirect('/');
    } catch (error) {
        return res.render('signup',{
            error:"Email already exits"
        })
    }
  
}

async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
        console.log(`Login failed for email: ${email}`);  
        return res.render('login', {
            error: 'Invalid UserName or Password'
        });
    }

    const token = setUser(user);
    res.cookie('uid', token);  
    return res.redirect('/');
}

module.exports = {
    signUp,
    login
};
