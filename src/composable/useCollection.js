import { ref } from "vue"
import { projectFirestore } from "../config/firebase.js"

const useCollection = (collection) => {
    const error = ref(null)
    
    const storeDoc = async(document) => {
        error.value = null

        try {
            await projectFirestore.collection(collection).add(document)
        } catch (err) {
            console.error(err.message)
            error.value = "Could not Send the Message"
        }
    }

    return { error, storeDoc }
}

export default useCollection