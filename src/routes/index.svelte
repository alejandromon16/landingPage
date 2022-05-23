<img src="background/image.jpeg" alt="" class="fixed h-90 w-auto lg:h-screen lg:w-screen -z-10 brightness-90 saturate-150" />
<div class="fixed top-[230px] left-0 right-0 bottom-0 lg:inset-0 -z-0 bg-black lg:bg-opacity-20"></div>
<div class="absolute w-full pb-40">
	<div class="grid grid-cols-1 justify-items-center text-white ">
        <div class="mt-10 lg:mt-40 text-center animate__animated animate__zoomIn">
            <h1  class="font-bold text-7xl">London St</h1>
            <h1 class=" text-3xl mt-10  animate__animated animate__zoomIn animate__delay-1s">A Sensible excuse</h1>
            <h1 class=" text-xl mt-10  animate__animated animate__zoomIn animate__delay-1s">Since July 13th, 1985</h1>
        </div>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-60 mt-14 overflow-hidden px-10">
            {#each datas as data}
                 <Info {data}/>
            {/each}
        </div>

        <div class="aspect-w-16 aspect-h-10 mt-[20%]">
            <iframe src="https://www.youtube.com/embed/g3zRQXK7zoc" class="rounded" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>

<script>
    import Info from '$lib/components/info.svelte';
    import { fade } from 'svelte/transition';
    let datas = [
        {
            title: 'Locations',
            info: {
                name: 'Santa Cruz/La Paz/Cochabamba/Oruro',
                url: 'https://api.whatsapp.com/send/?phone=59169079099&text&app_absent=0'
            },
            info2: '(591)690-790-99'
        },
        {
            title: 'Contacts',
            info: {
                name: 'Info@londonst.net'
            },
            info2: ''
        },
        {
            title: 'Follow us',
            info: {
                url: 'https://www.facebook.com/London-St-108841951007240/',
                name: 'fb:londonst'
            },
            info2: 'Ig:Londonst'
        },
    ]
</script>
