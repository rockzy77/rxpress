const User = require("../models/UserModel");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { jwtVerification } = require("../middleware/jwtVerification");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            success: true,
            users: [users][0]
        })
    }
    catch (e) {
        res.status(500).json({
            success: false,
            error: e
        })
    }
}

exports.auth = async (req, res) => {

    var authType = req.body.authType;

    if (authType === 'login') {

        try {
            var { email, password } = req.body;

            if (email === '' || password === '') {
                res.status(200).json({
                    success: false,
                    error: 'Fill all fields'
                });

                return;
            }


            const user = await User.findOne({
                where: {
                    email: email
                }
            });

            if (user == null) {
                res.status(200).json({
                    success: false,
                    error: 'Can\'t find user with this email'
                })

                return;
            }

            if (bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({
                    id: user.userid
                }, process.env.JWT_SECRET_KEY, {
                    expiresIn: '168h'
                });

                var tuser = user;

                delete user.password;

                res.status(200).json({
                    success: true,
                    user: tuser,
                    token
                })
            }
            else {
                res.status(200).json({
                    success: false,
                    error: 'Incorrect Password'
                })

                return;
            }

        }
        catch (e) {
            res.status(500).json({
                success: false,
                error: e
            })

            return;
        }


    }
    else {
        try {
            var { name, email, password, role } = req.body;

            console.log(name);

            if (name == '' || email == '' || password == '' || role == '') {
                res.status(200).json({
                    success: false,
                    error: 'Fill all fields!'
                });

                return;
            }

            var user = await User.create({
                name: name,
                email: email,
                password: bcrypt.hashSync(password, 8),
                role: role,
            });

            var umapp = {
                success: true,
                user: user.toJSON()
            };

            console.log(umapp)

            res.status(200).json(umapp);
        }

        catch (e) {
            res.status(500).json({
                success: false,
                error: e
            });
        }


    }
}

exports.getAuthInfo = async (req, res) => {
    const token = req.headers['authorization'];
    console.log(token)
    if (!token) return res.status(200).json({
        success: false,
        error: 'No token provided'
    });

    var user = await jwtVerification(token);

    if (user.success) {
        delete user.user.password;
    }

    res.status(200).json(user);

}


exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const num = await User.destroy({
            where: {
                userid: userId
            }
        });

        if (num > 0) {
            res.status(200).json({
                success: true,
                message: "User deleted successfully."
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "User not found."
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }

}