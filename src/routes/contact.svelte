<script>
    import { goto } from '$app/navigation'
    import formData from '../stores/formData'

    let name = '', email = '', error = ''


    const submitForm = async () => {
        try {
            const submit = await fetch('/api/contact', {
                method: "POST",
                body: JSON.stringify({ name, email })
            })

            // const formData = await submit.json()
            formData.setFormData(await submit.json())
            goto('/merci')
            
        } catch(err) {
            error = err
        }
    }
</script>

{#if !error}
<form on:submit|preventDefault={submitForm} class="flex flex-col gap-5 p-8 w-96">
    <label class="font-medium" for="name">
        Name :
        <input class="bg-gray-100 px-5 py-2 rounded-lg" type="text" name="name" bind:value={name}>
    </label>
    <label class="font-medium" for="name">
        Email :
        <input class="bg-gray-100 px-5 py-2 rounded-lg" type="email" name="email" bind:value={email}>
    </label>
    <input class="px-5 py-2 inline-block rounded-lg cursor-pointer" type="submit">
</form>
{:else if error}
<p>Please try again, there is an error in the form.</p>
{/if}