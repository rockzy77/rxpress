require('dotenv').config();
const User = require("../models/UserModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.jwtVerification = async (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const uid = decoded.id;

        if (!uid) {
            return {
                success: false,
                error: 'Invalid token'
            };
        }

        var user = await User.findOne({
            where: {
                userid: uid
            }
        });

        if (!user) {
            return {
                success: false,
                message: "User not found."
            };
        }

        var user = user.toJSON();

        return {
            success: true,
            user: user
        }

       

    }
    catch (e) {
        return {
            success: false,
            error: e
        };
    }
}