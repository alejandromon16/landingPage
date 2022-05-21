<img src="background/image.jpeg" alt="" class="fixed h-90 w-auto lg:h-screen lg:w-screen -z-10 brightness-90 saturate-150" />
<div class="fixed top-[230px] left-0 right-0 bottom-0 lg:inset-0 -z-0 bg-black lg:bg-opacity-20"></div>
<div class="absolute w-full pb-40">
	<div class="grid grid-cols-1 justify-items-center text-white ">
        <div class="mt-10 lg:mt-40 text-center animate__animated animate__zoomIn">
            <h1  class=" text-7xl">London St</h1>
            <h1 class=" text-3xl mt-10  animate__animated animate__zoomIn animate__delay-1s">A Sensible excuse</h1>
            <h1 class=" text-xl mt-10  animate__animated animate__zoomIn animate__delay-1s">Since July 13th, 1985</h1>
        </div>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-60 mt-14 overflow-hidden px-10">
            {#each datas as data}
                 <Info {data}/>
            {/each}
        </div>
    </div>
</div>

<script>
    import Info from '$lib/components/info.svelte';
    import { fade } from 'svelte/transition';
    let datas = [
        {
            title: 'Locations',
            info: 'Santa Cruz',
            info2: 'La Paz/Cochabamba/Oruro'
        },
        {
            title: 'Contacts',
            info: 'Info@londonst.net',
            info2: '(591)690-790-99'
        },
        {
            title: 'Follow us',
            info: 'fb:londonst',
            info2: 'Ig:Londonst'
        },
    ]
</script>
