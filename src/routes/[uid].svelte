<script context="module">
    import getSlices from '../utils/slice_zones'

    export async function load({ fetch, page }) {
        const data = await fetch(`/api/blog/${page.params.uid}`).then(res => res.json())
        const slices = getSlices(data)

        return {
            props: {
                post: data.post[0],
                relatedPosts: data.relatedPosts,
                slices
            }
        }
    }
</script>

<script>
    import PrismicDom from 'prismic-dom'
    import { session } from '$app/stores'
    export let post, relatedPosts, slices

    $: isAuthorized = $session.user.name === 'Stepg' // true - correspond au request.locals passé dans hooks/index.js
</script>

<section class="lg:max-w-screen-lg mx-auto">
    <h1 class="text-5xl font-black pb-4">{post.data.title}</h1>
    <img class="pb-12" src="{post.data.image.url}" alt={post.data.image.alt}>
    <div class="prose pb-20">
        {@html PrismicDom.RichText.asHtml(post.data.content)}
    </div>
    {#if slices.length > 0}
        {#each slices as slice}
            {#if slice.partenaires}
                <section class="lg:max-w-screen-lg mx-auto bg-green-200 p-8 m-8">
                    <div class="font-black text-3xl pb-4">{@html PrismicDom.RichText.asHtml(slice.partenaires.titre)}</div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {#each slice.partenaires.logos as logo}
                            <img src={logo.url} alt={logo.alt}>
                        {/each}
                    </div>
                </section>
            {:else if slice.bannerWithCaption}
                <section class="lg:max-w-screen-lg mx-auto bg-green-200 m-8 w-full h-96 relative">
                    <img class="w-full h-full object-cover" src={slice.bannerWithCaption.image.url} alt={slice.bannerWithCaption.image.alt}>
                    <div class=" absolute top-5 left-5 text-white">
                        <div class="font-bold text-5xl pb-3">{@html PrismicDom.RichText.asHtml(slice.bannerWithCaption.titre)}</div>
                        <div class="w-2/3 my-6">{@html PrismicDom.RichText.asHtml(slice.bannerWithCaption.description)}</div>
                        <a class="inline-block bg-green-200 px-5 py-3 text-gray-800 uppercase font-bold tracking-wide" href={slice.bannerWithCaption.button.link.url}>{@html PrismicDom.RichText.asText(slice.bannerWithCaption.button.text)}</a>
                    </div>
                </section>
            {/if}
        {/each}
    {/if}
</section>

{#if isAuthorized}
<section class="xl:max-w-screen-lg mx-auto bg-green-300 rounded p-8 mb-20">
    <h2 class="font-black text-3xl">Related Posts</h2>
    <ul>
        {#each relatedPosts as post}
        <li>
            <a href="/{post.uid}">{post.data.title}</a>
        </li>
        {/each}
    </ul>
</section>
{/if}

