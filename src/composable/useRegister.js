import { ref } from "vue"
import { projectAuth } from "../config/firebase.js"

const error = ref(null)

const register = async(name, email, password) => {
    error.value = null
    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)

        if(!res) {
            throw new Error("Could not complete the SignUp")
        }

        await res.user.updateProfile({
            displayName: name
        })

        error.value = null
        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useRegister = () => {
    return { error, register }
}

export default useRegister