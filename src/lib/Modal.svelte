<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  export let email, password, isLoggedIn

  $: console.log(isLoggedIn)
</script>

<style>
    .bg-image {
      background-image: url(https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
    }
    .backdrop {
      backdrop-filter: blur(2px);
    }
</style>

<div class="absolute inset-0 flex justify-center items-center bg-gradient-to-tr from-green-200 to-green-500">
    <div class="bg-image w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-green-600">
      <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-25 bg-green-600 backdrop">
      </div>
      <div class="relative w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
        {#if !isLoggedIn}
        <button on:click={() => dispatch('closeModal')} class="absolute top-5 right-5 cursor-pointer">x</button>
        <h3 class="mb-4 font-bold text-3xl flex items-center text-green-500">
          LOGIN
        </h3>
        <form on:submit|preventDefault={() => dispatch('submitLogin', {email, password})} class="px-3 flex flex-col justify-center items-center w-full gap-3">
          <input 
            type="email" placeholder="email..." name="email" bind:value={email}
            class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-green-500"
          >
          <input 
            type="password" placeholder="password..." name="password" bind:value={password}
            class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-green-500"
          >
          <button class="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring rounded px-3 py-1">
            <svg class="w-5 h-5 inline"fill="none"stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            <p class="ml-1 text-lg">
              Login
            </p>
          </button>
        </form>
        <p class="text-gray-700 text-sm mt-2">
          don't have an account?
          <a href="/" class="text-green-500 hover:text-green-600 mt-3 focus:outline-none font-bold underline">
            register
          </a>
        </p>
        {:else if isLoggedIn}
        <div class="space-y-4">
          <p>You are successfully logged in !</p>
          <button class="px-5 py-2 bg-green-200 rounded-full font-medium uppercase" on:click={() => dispatch('logout')}>Log out</button>
        </div>
        {/if}
      </div>
    </div>
  </div>