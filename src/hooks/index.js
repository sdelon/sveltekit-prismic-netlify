export async function handle({ request, resolve }) {
    request.locals.user = {
        email: 'sd@sd.com',
        password: '123azerty'
    }

    const response = await resolve(request)

    return {
        ...response,
        headers: {
            'x-custom-header': 'playing with hooks'
        }
    }
}

export function getSession(request) {
    return {
        user: {
            email: request.locals.user.email,
            password: request.locals.user.password
        }
    }
}
