const errorHandler = require('../utils/errorHandler.js');
const catchAsyncError = require('../middleware/catchAsyncError.js');
const { PrismaClient } = require('@prisma/client');
const puppeteer = require('puppeteer');


const prisma = new PrismaClient();


const createUrl  = catchAsyncError(async(req, res, next) => {


    try {

        const userid = req.user.userid;
        const {appname, app_url, priority} = req.body

        console.log("userid", userid);



        const data = await prisma.urls.create({
            data: {
                userid: userid,
                appname: appname,
                app_url: app_url,
                priority: parseInt(priority),
                isActivated: false
            }
        })

        res.status(200).json({
            success: true,
            message: "Url added successfully",
            url: data
        })
        

    } catch (error) {
        return next(new errorHandler(error, 500))
    }

})



const UpdateUrl  = catchAsyncError(async(req, res, next) => {


    try {

        const userid = req.user.userid;
        const {id, appname, app_url, priority, isActivated} = req.body

        const existingUrl = await prisma.title.findMany({
            where: {
                id: id,
                userid: userid,
            },
        });

        if(!existingUrl){
            return res.status(200).json({
                success: false,
                message: "No Url Found",
            });
        }

        const updatedUrl = await prisma.urls.update({
                where: {
                    id: id,
                    userid: userid,
            },
                data: {
                    appname: appname,
                    app_url: app_url,
                    priority: priority,
                    isActivated: isActivated
            },
        });

        res.status(200).json({
            success: true,
            message: "Url updated successfully",
            url: updatedUrl
        })
        

    } catch (error) {
        return next(new errorHandler(error, 500))
    }

})


const getAllUrl =  catchAsyncError(async(req, res, next) => {


    try {

        const userid = req.user.userid;

        const Url = await prisma.urls.findMany({
                where: {
                    userid: userid,
            }
        });

        if(!Url){
            res.status(200).json({
                success: false,
                message: "No Social Link Found",
            })
        }

        res.status(200).json({
            success: true,
            message: "Urls retrived Successfully",
            url: Url
        })
        

    } catch (error) {
        return next(new errorHandler(error, 500))
    }

})

module.exports = {
    createUrl,
    UpdateUrl,
    getAllUrl
}