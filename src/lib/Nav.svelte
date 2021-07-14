<script>
  import { createEventDispatcher } from 'svelte'
  import { page } from '$app/stores'
  import { gsap } from "gsap"
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin"

  gsap.registerPlugin(ScrollToPlugin)

  const dispatch = createEventDispatcher()
  export let isLoggedIn

  const scrollToAnchor = (node, params) => {

    function goToAnchor(e) {
      if(e) e.preventDefault()
      gsap.to(window, { duration: 2, scrollTo: `#${params}`})
    }

    node.addEventListener('click', goToAnchor)

    return {
      onDestroy() {
        node.removeEventListener('click', goToAnchor)
      }
    }
  }
</script>

<style>
  li {
    @apply last-of-type:text-indigo-500;
  }
</style>

<header class="py-8 px-4 lg:px-10 bg-white">
    <nav class="relative flex justify-between items-center">
      <a class="text-2xl text-gray-900 font-bold" href="/">Logo</a>
      <div class="lg:hidden">
        <button class="navbar-burger flex items-center p-3 hover:bg-gray-50 text-gray-900 rounded">
          <svg class="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="39" height="2" rx="1" fill="currentColor"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="currentColor"></rect>
            <title>Mobile menu</title>
          </svg>
        </button>
      </div>
      <div class="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <ul class="flex items-center space-x-16 text-lg font-bold">
          {#if $page.path === '/'}
          <li><a use:scrollToAnchor={'blog'} sveltekit:prefetch class="hover:underline" href="/#blog">Blog</a></li>
          <li><a use:scrollToAnchor={'actu'} sveltekit:prefetch class="hover:underline" href="/#actu">Actu</a></li>
          {:else}
          <li><a sveltekit:prefetch class="hover:underline" href="/#blog">Blog</a></li>
          <li><a sveltekit:prefetch class="hover:underline" href="/#actu">Actu</a></li>
          {/if}
          <li><a sveltekit:prefetch class="hover:underline" href="/contact">Contact</a></li>
          <li><a sveltekit:prefetch class="hover:underline" href="/gsap">Animation with Gsap</a></li>
          <li><a sveltekit:prefetch class="hover:underline" href="/animation">Animation with Svelte</a></li>
          {#if isLoggedIn}
          <li><a sveltekit:prefetch class="hover:underline" href="/editor">Editor</a></li>
          {/if}
        </ul>
      </div>
      <button 
      on:click={() => dispatch('openModal')} 
      class="hidden lg:block px-8 py-3 text-white font-bold bg-black border border-black hover:bg-white hover:text-black rounded-full transition duration-200">{isLoggedIn ? 'Logout' : 'Sign in'}</button>
    </nav>
    <div class="hidden navbar-menu relative z-50">
      <div class="navbar-backdrop fixed inset-0 bg-blue-600 opacity-80"></div>
      <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-8 bg-gray-800 overflow-y-auto">
        <div class="flex items-center mb-16 pr-6">
          <a class="ml-10 text-2xl text-white font-bold" href="/">Logo</a>
        </div>
        <div>
          <ul>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="/">Blog</a></li>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="/contact">Contact</a></li>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="/">Test</a></li>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="/">Test 1</a></li>
          </ul>
        </div>
        <div class="mt-auto px-10">
          <div class="pt-6"><a class="block mb-4 py-4 px-12 text-white text-center font-bold hover:bg-white hover:text-gray-800 border border-gray-50 rounded-full transition duration-200" href="/">Sign in</a><a class="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="/">Sign up</a></div>
          <p class="mt-6 mb-4 text-lg text-center text-white">
            <span></span>
          </p>
        </div>
      </nav>
    </div>
</header>