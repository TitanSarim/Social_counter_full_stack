const errorHandler = require('../utils/errorHandler.js');
const catchAsyncError = require('../middleware/catchAsyncError.js');
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const prisma = new PrismaClient();



const createLogo  = catchAsyncError(async(req, res, next) => {


    try {

        const userid = req.user.userid;
        const file = req.file.filename


        const data = await prisma.logo.create({
            data: {
                userid: userid,
                icon: file,
            }
        })

        res.status(200).json({
            success: true,
            message: "Logo added successfully",
            logo: data
        })

        
    } catch (error) {
        return next(new errorHandler(error, 500))
    }

})



const updateLogo  = catchAsyncError(async(req, res, next) => {


    try {

        const userid = req.user.userid;
        const file = req.file.filename
        const {id} = req.body

        const idInt = parseInt(id)

        console.log(file);

        if(!file){
            return res.status(404).json({
                success: false,
                message: 'Please upload file.',
            });
        }

        const logoData = await prisma.logo.update({
            where: {
                id: idInt,
                userid:userid
            },data: {
                icon: file
            }
        });

        const previousImagePath = `/Images/${logoData.icon}`;
        // const previousImagePath = path.resolve(__dirname, '../Images', logo.icon);

        if (fs.existsSync(previousImagePath)) {
            fs.unlinkSync(previousImagePath);
        }

        const logo = {
            createdAt: logoData.createdAt,
            icon: `/Images/${logoData.icon}`,
            id: logoData.id,  
            updatedAt: logoData.updatedAt,
            userid: logoData.userid
        }

      
        res.status(200).json({
            success: true,
            message: 'Logo updated successfully',
            logo: logo,
        });
        
    } catch (error) {
        return next(new errorHandler(error, 500))
    }

})


const getLogo  = catchAsyncError(async(req, res, next) => {


    try {

        const userid = req.user.userid;


        const logoData = await prisma.logo.findFirst({
            where: {
                userid: userid,
            },
        });


        if (!logoData) {
            return res.status(200).json({
                success: false,
                message: 'Logo not found for the user.',
            });
        }



        const imagePath = `/Images/${logoData.icon}`;
        console.log("logo", imagePath);
        
        if(!imagePath){
            return res.status(404).json({
                success: false,
                message: 'Cannot find logo.',
            });
        }

        const logo = {
            createdAt: logoData.createdAt,
            icon: `/Images/${logoData.icon}`,
            id: logoData.id,  
            updatedAt: logoData.updatedAt,
            userid: logoData.userid
        }

        res.status(200).json({
            success: true,
            message: "Logo retrived successfully",
            logo: logo
        })

        
    } catch (error) {
        return next(new errorHandler(error, 500))
    }

})


module.exports = {
    createLogo,
    updateLogo,
    getLogo,
    updateLogo
}