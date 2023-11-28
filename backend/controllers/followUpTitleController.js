const errorHandler = require('../utils/errorHandler.js');
const catchAsyncError = require('../middleware/catchAsyncError.js');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createFollowUpTitle  = catchAsyncError(async(req, res, next) => {


    try {

        const userid = req.user.userid;
        const {title} = req.body

        console.log("title",title);

        const data = await prisma.followuptitle.create({
            data: {
                userid: userid,
                title: title,
            }
        })

        res.status(200).json({
            success: true,
            message: "Title added successfully",
            followUp: data
        })
        

    } catch (error) {
        return next(new errorHandler(error, 500))
    }

})


const updateFollowUpTitle = catchAsyncError(async (req, res, next) => {
    try {
        const userid = req.user.userid;
        

        const { title, id } = req.body;

        console.log("id", id);

        
        const existingTitle = await prisma.followuptitle.findFirst({
            where: {
                id: id,
                userid: userid,
            },
        });
    
        if (!existingTitle) {
            const data = await prisma.followuptitle.create({
            data: {
                userid: userid,
                title: title,
            },
        });
  
            return res.status(201).json({
                success: true,
                message: "Title created successfully",
                followUp: data,
            });
        }
  
        const updatedTitle = await prisma.followuptitle.update({
                where: {
                id: id,
                userid: userid,
            },
                data: {
                title: title,
            },
        });
  
        res.status(200).json({
            success: true,
            message: "Title updated successfully",
            followUp: updatedTitle,
        });
    } catch (error) {
      return next(new errorHandler(error, 500));
    }
  });
  

const getFollowUpTitle = catchAsyncError(async (req, res, next) => {
    try {
        const userid = req.user.userid;

        const title = await prisma.followuptitle.findFirst({
            where: {
                userid: userid,
            },
        });

        if(!title){
            res.status(200).json({
                success: false,
                message: "Title not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Title retrived successfully",
            followUp: title,
        });
    } catch (error) {
        return next(new errorHandler(error, 500));
    }
});


module.exports = {
    createFollowUpTitle,
    updateFollowUpTitle,
    getFollowUpTitle
}