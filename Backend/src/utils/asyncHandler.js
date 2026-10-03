


const asyncHandler = (fn) =>  async (req, res, next) => {
        try {
            await fn(req, res, next)
        } 
        catch (error) {
            return 
            res.status(error.code || 500)
            .json({
                success: false,
                message: "error occured"
            })
        }
}

// whatever asyncHandler returns goes inside our controller 
// what is asyncHanlder is returning --> async(req, res, next) => { } let's call this Wrapper 
// so eventually controller --> wrapper , and we know express give (req, res, next) to the controller so the wrapper will get the access of these values too 

export { asyncHandler }