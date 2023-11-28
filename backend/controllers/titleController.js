const errorHandler = require('../utils/errorHandler.js');
const catchAsyncError = require('../middleware/catchAsyncError.js');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createTitle  = catchAsyncError(async(req, res, next) => {


    try {

        const userid = req.user.userid;
        const {title} = req.body

        console.log("title",title);

        const data = await prisma.title.create({
            data: {
                userid: userid,
                title: title,
            }
        })

        res.status(200).json({
            success: true,
            message: "Title added successfully",
            title: data
        })
        

    } catch (error) {
        return next(new errorHandler(error, 500))
    }

})


const updateTitle = catchAsyncError(async (req, res, next) => {
    try {
        const userid = req.user.userid;
        

        const { title, id } = req.body;

        console.log("id", id);

        
        const existingTitle = await prisma.title.findUnique({
            where: {
                id: id,
                userid: userid,
            },
        });
    
        if (!existingTitle) {
            const data = await prisma.title.create({
            data: {
                userid: userid,
                title: title,
            },
        });
  
            return res.status(201).json({
                success: true,
                message: "Title created successfully",
                title: data,
            });
        }
  
        const updatedTitle = await prisma.title.update({
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
            title: updatedTitle,
        });
    } catch (error) {
      return next(new errorHandler(error, 500));
    }
  });
  

const getTitle = catchAsyncError(async (req, res, next) => {
    try {
        const userid = req.user.userid;

        const title = await prisma.title.findFirst({
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
            title: title,
        });
    } catch (error) {
        return next(new errorHandler(error, 500));
    }
});


module.exports = {
    createTitle,
    updateTitle,
    getTitle
}