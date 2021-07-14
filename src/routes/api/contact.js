export const post = (request) => {
    const formData = JSON.parse(request.body)

    const name = formData.name
    const email = formData.email

    return {
        body : {
            name, 
            email
        }
    }
}