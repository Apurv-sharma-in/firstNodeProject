const sendErrorResponse = (req,err)=>{

    let statusCode  = err.statusCode;
    let message = err.message
    
    return req.status(statusCode).json({
        message:message,
        status:false,

    })
}

const sendResponse = (req,statuscode)=>{
    return res.status(statuscode).json({
        status:true
    })
}

module.exports={
    sendErrorResponse,
    sendResponse
}