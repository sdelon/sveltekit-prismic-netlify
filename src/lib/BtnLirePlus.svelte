<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
</script>

<div class="w-full mx-auto my-8">
    <button 
    on:click={() => dispatch('addPosts')}
    class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose outline-none transition duration-200">Plus d'articles</button>
</div>