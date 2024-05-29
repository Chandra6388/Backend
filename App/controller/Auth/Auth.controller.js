class AuthController {
    async Login(req,res){
        try{
            console.log("Login heare")

        }
        catch{
            console.log("Error in Login")

        }
    }
    
}

module.exports = new AuthController();