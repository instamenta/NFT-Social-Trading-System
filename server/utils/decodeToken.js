const jwt = require('jsonwebtoken')

const decodeToken = async (token) => {
    if (token) {
        let tokenData = await jwt.decode(token,"SOMERANDOMSECRET")
        console.log(tokenData)
        return tokenData;
    } else {
        console.log('notoken1')

        return "NOTOKEN"
    }
}
module.exports = decodeToken 


