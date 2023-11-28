const errorHandler = require('../utils/errorHandler.js');
const catchAsyncError = require('../middleware/catchAsyncError.js');
const generatedToken = require("../utils/jwtToken")
const setTokenCookie = require("../utils/sendToken")
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();



const resgisterUser = catchAsyncError(async(req, res, next) => {

    const {username, email, password} = req.body;


    try {

        const emails = await prisma.user.findUnique({
            where: {email}
        })

        const userNames = await prisma.user.findUnique({
            where: {username}
        })

        if(emails !== null && userNames !== null){
            return next (new errorHandler('User with email or username already exists', 401))
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data:{
                username,
                email,
                password: hashedPassword,
            }
        })

        const token = generatedToken(user.userid, user.email, user.username)
        setTokenCookie(res, token)

        console.log("User created successfully");


        res.status(201).json({
            success: true,
            message: "Account created successfully",
            token
        })


    } catch (error) {
        return next(new errorHandler(error, 500))
    }


})



const loginUser = catchAsyncError(async(req, res, next) => {

    const {email, password} = req.body;

    try {
        
        const user = await prisma.user.findUnique({
            where: {email},
        })

        if(!user){
            return next(new errorHandler('Invalid Email', 400))
        }

        const passwordMatches = await bcrypt.compare(password, user.password);

        if(!passwordMatches){
            return next(new errorHandler('Invalid Password', 400))
        }

        console.log('User Logged in Successfully');


        const token = generatedToken(user.userid, user.email, user.username)
        setTokenCookie(res, token)
        

        res.status(201).json({
            success: true,
            message: `Hi ${user.username} iam logged in`,
            user: user,
            token
        })

    } catch (error) {
        return next(new errorHandler('Internal Server Error', 500))
    }

})



const logout = async(req, res) => {

    res.cookie("token", null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success: true,
        message: "Logged Out"
      });
}


module.exports = {
    resgisterUser,
    loginUser,
    logout
}