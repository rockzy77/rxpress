const { jwtVerification } = require("./jwtVerification");


exports.adminVerification = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(401).json({
                success: false,
                error: 'No token found'
            });
        }

        var user = await jwtVerification(token);
        if (user.success) {
            if (user.user.role !== 'admin') {
                return res.status(403).json({
                    success: false,
                    message: 'Access denied!'
                });
            }

            req.user = user;
            next();
        }
        else {
            return res.status(200).json({
                success: false,
                error: user.error
            })
        }


    }
    catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        })
    }


}