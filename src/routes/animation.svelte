<script>
    import { bounceOut } from 'svelte/easing'
    import { spring } from 'svelte/motion'

    let isActive = true, x_length = 0

    const customAnimation = (node, params) => {
        console.log({node, params})
        return {
            css: t => {
                // console.log(`time = ${t}`)
                return `
                    opacity: ${t};
                    transform: scale(${t});
                `
            },
            easing: bounceOut,
            duration: 3000
        }
    }

    const customDragAction = (node) => {
        let x, y

        const coordinates = spring({
            x: 0,
            y: 0
        })

        coordinates.subscribe(current => {
            node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`
        })

        const mouseDown = e => {
            x = e.clientX
            y = e.clientY

            window.addEventListener('mouseup', mouseUp)
            window.addEventListener('mousemove', mouseMove)
        }

        const mouseUp = () => {
            window.removeEventListener('mouseup', mouseUp)
            window.removeEventListener('mousemove', mouseMove)

            coordinates.update(() => ({ x: 0, y: 0 }))

            node.dispatchEvent(new CustomEvent('drag_stop', {
                detail: { x, y }
            }))

            x = 0
            y = 0
        }

        const mouseMove = e => {
            const dx = e.clientX - x
            const dy = e.clientY - y

            x = e.clientX
            y = e.clientY

            coordinates.update(current => {
                return {
                    x: current.x + dx,
                    y: current.y + dy
                }
            })
        }

        node.addEventListener('mousedown', mouseDown)
    }
</script>


<section class="p-8 space-y-8">
    <div class="h-32">
        {#if isActive}
            <div 
            transition:customAnimation
            use:customDragAction
            on:drag_stop={e => {
                x_length = e.detail.x
                console.log(e.detail)
            }}
            class="w-32 h-32 bg-indigo-300 cursor-pointer"></div>
        {/if}
    </div>
    <button
    on:click={() => isActive = !isActive} 
    class="px-5 py-1 bg-gray-800 rounded-lg text-gray-100 uppercase font-bold tracking-wide">
    Animate</button>
    <p>x = {x_length}</p>
</section>