<script context="module">
    export async function load({ session }) {
        return {
            props : {
                email: session.user.email,
                password: session.user.password
            }
        }
    }
</script>

<script>
    import '../app.postcss'
    import { navigating } from '$app/stores'
    import Modal from '$lib/Modal.svelte'
    import Nav from '$lib/Nav.svelte'
    import PreloadingIndicator from '$lib/PreloadingIndicator.svelte'

    export let email, password
    let openLogInModal = false, isLoggedIn = false

    const checkForLogIn = e => {
        if(e.detail.email === email && e.detail.password === password) isLoggedIn = true
        openLogInModal = false
    }

    const logout = () => {
        isLoggedIn = false
        openLogInModal = false
    }
</script>

{#if $navigating}
    <PreloadingIndicator />
{/if}

{#if openLogInModal}
    <Modal 
    on:closeModal={() => openLogInModal = false}
    on:submitLogin={checkForLogIn}
    on:logout={logout}
    {isLoggedIn} />
{:else}
    <Nav 
    on:openModal={() => openLogInModal = true}
    {isLoggedIn} />
    <main class="pt-20">
        <slot />
    </main>
{/if}