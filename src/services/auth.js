import jwt from "jsonwebtoken"

export function authenticateUser() {
    const token = localStorage.getItem("Token")
    
    if(token) {
        const data = jwt.decode(token)
        return {
            ...data,
            userType: data.isVolunteer ? "volunteer" : "solicitant"
        }
    }
    return ""
}