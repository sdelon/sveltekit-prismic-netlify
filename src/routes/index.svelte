<script context="module">
    export async function load({fetch}) {
        const { data } = await fetch('/api').then(res => res.json())

        return {
            props: {
                data
            }
        }
    }
</script>

<script>
    import { onMount } from 'svelte'
    import { fly } from 'svelte/transition'
    import PrismicDom from 'prismic-dom'
    // import { gsap } from 'gsap'
    // import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
    import BtnLirePlus from '$lib/BtnLirePlus.svelte'

    export let data
    let y, currentPosts = 2, isVisible = false

    const isAnimationOk = () => window.matchMedia('(prefers-reduced-motion: no-preference)').matches

    $: frontPost = data.filter(post => post.data.isfront && post.id !== 'YOqkHRMAACEAPtA-')
    $: posts = data.filter(post => !post.data.isfront && post.id !== 'YOqkHRMAACEAPtA-')
    $: shop = data.filter(post => post.id === 'YOqkHRMAACEAPtA-')[0]

    // onMount(() => {
    //   gsap.registerPlugin(ScrollTrigger)
    // })
</script>

<style>
  .horizontal-loading {
    @apply flex flex-nowrap overscroll-x-auto;
  }

  .flexNone {
    @apply flex-none w-96 mr-8;
  }

  .wrapper {
    max-width: 100vw;
    overflow-x: scroll;
    position: relative;
  }
</style>

<svelte:window bind:scrollY={y}/>
<section>
    <div class="py-20 bg-gray-50 radius-for-skewed">
      <div class="container mx-auto px-4">
        <div class="mb-16 w-full text-center">
          <span class="text-green-600 font-bold">Dolor sit amet consectutar</span>
          <h2 id="blog" class="text-4xl lg:text-5xl font-bold font-heading">Our Blog</h2>
        </div>
        <div class="wrapper">
          <div class="horizontal-loading">
            {#each posts.slice(0, currentPosts) as post}
            <div class="flexNone">
              <div class="rounded overflow-hidden shadow">
                <img class="lg:h-48 lg:w-full object-cover rounded-t" src={post.data.image.url} alt={post.data.image.alt}>
              </div>
              <div class="p-6 rounded-b bg-white">
                <span class="text-sm text-gray-400">24 Jan, 2021</span>
                <h2 class="my-2 text-2xl font-bold">{post.data.title}</h2>
                <div class="mb-6 text-gray-400">{@html PrismicDom.RichText.asHtml(frontPost[0].data.extrait)}</div>
                <a class="text-green-600 hover:text-green-700 font-bold" href="/{post.uid}">En savoir plus</a>
              </div>
            </div>
            {/each}
          </div>
        </div>
          {#if currentPosts < posts.length}
            <BtnLirePlus on:addPosts={() => currentPosts = currentPosts + 2}/>
          {/if}
      </div>
</section>
<section>
  <div class="py-20 bg-gray-50 radius-for-skewed">
    <div class="container mx-auto px-4">
      <div class="mb-6 flex flex-wrap justify-center">
        {#if y >= 600}
        <div in:fly="{{ x: 200, duration: 2000 }}" class="mb-16 w-full text-center">
          <span class="text-green-600 font-bold">Dolor sit amet consectutar</span>
          <h2 id="actu" class="text-4xl lg:text-5xl font-bold font-heading">Actualités</h2>
        </div>
        {/if}
        <div class="flex flex-wrap -mx-3 mb-16">
          <div class="mb-6 lg:mb-0 w-full lg:w-1/2 px-3">
            <div class="h-full flex flex-col rounded shadow">
              <img class="rounded-t object-cover h-80 lg:h-full w-full" src={frontPost[0].data.image.url} alt={frontPost[0].data.image.alt}>
              <div class="mt-auto p-6 rounded-b bg-white">
                <span class="text-sm text-gray-400">24 Jan, 2021</span>
                <h2 class="my-2 text-2xl font-bold">{frontPost[0].data.title}</h2>
                <div class="mb-6 text-gray-400 leading-loose">{@html PrismicDom.RichText.asHtml(frontPost[0].data.extrait)}</div>
                <a class="text-green-600 hover:text-green-700 font-bold" href="/{frontPost[0].uid}">En savoir plus</a>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap w-full lg:w-1/2">
              {#each posts as post}
              <div class="mb-6 w-full lg:w-1/2 px-3">
                  <div class="rounded overflow-hidden shadow">
                  <img class="lg:h-48 lg:w-full object-cover rounded-t" src={post.data.image.url} alt={post.data.image.alt}>
                  <div class="p-6 rounded-b bg-white">
                      <span class="text-sm text-gray-400">24 Jan, 2021</span>
                      <h2 class="my-2 text-2xl font-bold">{post.data.title}</h2>
                      <div class="mb-6 text-gray-400">{@html PrismicDom.RichText.asHtml(frontPost[0].data.extrait)}</div>
                      <a class="text-green-600 hover:text-green-700 font-bold" href="/{post.uid}">En savoir plus</a>
                  </div>
                  </div>
              </div>
              {/each}
          </div>
        </div>
        <div><a class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose outline-none transition duration-200" href="/">Voir plus d'articles</a></div>
      </div>
    </div>
  </div>
</section>
<!-- <section class="bg-gray-50 py-20">
  <div class="mb-16 w-full text-center">
    <span class="text-green-600 font-bold">Dolor sit amet consectutar</span>
    <h2 class="text-4xl lg:text-5xl font-bold font-heading">Shop</h2>
  </div>
  <div class="my-12">
    {@html shop.data.body[0].primary.airtable.html}
  </div>
</section> -->