import { writable } from 'svelte/store'

const data = writable()

const formData = {
    subscribe: data.subscribe,
    setFormData: form => {
        data.set(form)
    }
}

export default formData