<script>
    // import { onMount } from 'svelte'
    // import { gsap } from 'gsap'
    // import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

    // const isAnimationOk = () => window.matchMedia('(prefers-reduced-motion: no-preference)').matches

    // onMount(() => {
    //     gsap.registerPlugin(ScrollTrigger)

    //     if(isAnimationOk) {
    //         console.log('animation is ok')
            
    //         gsap.from('#wobble', {
    //             xPercent: 100,
    //             yPercent: 100,
    //             duration: 3,
    //             scrollTrigger: {
    //                 trigger: '#imgSVG',
    //                 pin: true,
    //                 scrub: 1
    //             }
    //         })
        // gsap.to('#rect1', {
        //     xPercent: 100,
        //     ease: "expo.out",
        //     duration: 2
        // })

        // gsap.from('#rect2', {
        //     xPercent: 100,
        //     ease: "expo.easeInOut",
        //     duration: 2
        // })

        // gsap.from('.rectangles', {
        //     yPercent: 100,
        //     ease: "expo.easeInOut",
        //     duration: 2,
        //     stagger: {
        //         each: 0.1,
        //         from: "center",
        //         // from: "random"
        //     },
        //     scrollTrigger: '#imgSVG'
        // })
s
</script>

<style>
    .height {
        height: 500vh;
    }

    svg {
        margin-top: 100vh;
    }
</style>

<section class="height px-8">
    <div class="w-96">
        <svg id="imgSVG" viewBox="0 0 200 200">
            <!-- <rect id="rect1" x="0" y="0" width="50%" height="50%" fill="#1e1f26"></rect>
            <rect id="rect2" x="500" y="500" width="50%" height="50%" fill="#6366F2"></rect> -->
            <mask id="maskImg">
                <!-- <rect class="rectangles" x="0" y="0" width="10%" height="100%" fill="white"></rect>
                <rect class="rectangles" x="10" y="0" width="10%" height="100%" fill="white"></rect>
                <rect class="rectangles" x="20" y="0" width="10%" height="100%" fill="white"></rect>
                <rect class="rectangles" x="30" y="0" width="10%" height="100%" fill="white"></rect>
                <rect class="rectangles" x="40" y="0" width="10%" height="100%" fill="white"></rect>
                <rect class="rectangles" x="50" y="0" width="10%" height="100%" fill="white"></rect>
                <rect class="rectangles" x="60" y="0" width="10%" height="100%" fill="white"></rect>
                <rect class="rectangles" x="70" y="0" width="10%" height="100%" fill="white"></rect>
                <rect class="rectangles" x="80" y="0" width="10%" height="100%" fill="white"></rect>
                <rect class="rectangles" x="90" y="0" width="10%" height="100%" fill="white"></rect> -->
                <path id="wobble" fill="white" d="M27.5,-44.3C40.7,-40.1,59.9,-42.9,69.3,-36.7C78.6,-30.5,78.1,-15.2,77.3,-0.4C76.6,14.4,75.6,28.8,70.9,42.9C66.1,57,57.5,70.8,45,74.6C32.6,78.4,16.3,72.1,4.7,63.9C-6.9,55.7,-13.7,45.7,-22.7,39.9C-31.7,34.1,-42.7,32.6,-49.7,26.6C-56.7,20.7,-59.6,10.4,-59.2,0.2C-58.8,-9.9,-55.1,-19.8,-50,-29C-44.9,-38.2,-38.5,-46.8,-29.9,-53.7C-21.3,-60.5,-10.7,-65.7,-1.7,-62.7C7.2,-59.7,14.4,-48.5,27.5,-44.3Z" transform="translate(100 100)" />
            </mask>
            <image x="0" y="0" height="100%" width="100%" href="https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&h=1000" preserveAspectRatio="xMidYMin slice" mask="url(#maskImg)"></image>
        </svg>
    </div>
</section>

<!-- preserveAspectRatio : permet de situer l'image dans la viewBox xMidYMin/xMidYMax/xMidYMid... slice ou meet -->
