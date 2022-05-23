<img src="background/image.jpeg" alt="" class="fixed h-90 w-auto lg:h-screen lg:w-screen -z-10 brightness-90 saturate-150" />
<div class="fixed top-[230px] left-0 right-0 bottom-0 lg:inset-0 -z-0 bg-black lg:bg-opacity-20"></div>
<div class="absolute scroll-smooth">
        <div class="snap-y snap-mandatory h-screen w-screen overflow-scroll text-white overflow-x-hidden">
            <div class=" snap-start h-screen w-full">
                <div class="grid grid-cols-1 justify-items-center text-white pt-[92px] lg:mt-40 text-center animate__animated animate__zoomIn">
                    <h1  class="font-bold text-7xl">London St</h1>
                    <h1 class=" text-3xl mt-10  animate__animated animate__zoomIn animate__delay-1s">A Sensible excuse</h1>
                    <h1 class=" text-xl mt-10  animate__animated animate__zoomIn animate__delay-1s">Since July 13th, 1985</h1>
                </div>
                <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-60 mt-20 overflow-hidden px-10">
                    {#each datas as data}
                         <Info {data}/>
                    {/each}
                </div>
            </div>
            <div id="videos" class="snap-start h-screen">
                <div class="grid grid-cols-1 h-screen pt-20 mx-auto lg:grid-cols-3 gap-y-10 justify-items-center lg:content-center lg:self-center lg:mx-20 lg:gap-x-20 lg:gap-y-20">
                    
                    <div class="">
                        <iframe src="https://www.youtube.com/embed/g3zRQXK7zoc" class="aspect-video" frameborder="5px" allow=" fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="">
                        <iframe src="https://www.youtube.com/embed/g3zRQXK7zoc" class="aspect-video" frameborder="5px" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="">
                        <iframe src="https://www.youtube.com/embed/g3zRQXK7zoc" class="aspect-video" frameborder="5px" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="">
                        <iframe type='video/mp4' src="http://londonst.net/londonst/videos/LondonStWall.webm" class="aspect-video"  frameborder="5px" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
</div>

<script>
    import Info from '$lib/components/info.svelte';
   

    let datas = [
        {
            title: 'Locations',
            info: {
                name: 'Santa Cruz/La Paz/Cochabamba/Oruro',
                url: 'https://api.whatsapp.com/send/?phone=59169079099&text&app_absent=0'
            },
            info2: {
                name:'(591)690-790-99'
            }
        },
        {
            title: 'Contacts',
            info: {
                name: 'Videos',
                url: '#videos'
            },
            info2: {
                name: ''
            }
        },
        {
            title: 'Follow us',
            info: {
                url: 'https://www.facebook.com/London-St-108841951007240/',
                url2: 'https://www.instagram.com/invites/contact/?i=kzzoqn2t6d0f&utm_content=m96cpk4',
                name: 'fb:Londonst',
                name2: 'Ig:Londonst'
            },
            info2: {
                name:'Info@londonst.net',
                url: 'https://docs.google.com/forms/d/1mnCucDm8GLgIr7rqLPx2i-sCodf9BUApMBAAMFb-BYk/edit'
            }
        },
    ]
    let linkVideos = [

    ]
</script>
