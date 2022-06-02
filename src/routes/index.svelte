<script>
	import Info from '$lib/components/info.svelte';
	import Video from '$lib/components/video.svelte';

	let datas = [
		{
			title: 'Locations',
			info: {
				name: 'Santa Cruz/La Paz/Cochabamba/Oruro',
				url: 'https://api.whatsapp.com/send/?phone=59169079099&text&app_absent=0'
			},
			info2: {
				name: '(591)690-790-99'
			}
		},
		{
			title: 'videos',
			info: {
				name: 'Moments',
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
				name: 'Tester London',
				url: 'https://forms.gle/HM7crWWzSeHuVqyX7'
			}
		}
	];
	let linksVideos = [
		'https://www.youtube.com/embed/FP808MiJUcM',
		'https://www.youtube.com/embed/fKt_Yv6yEs4',
		'https://www.youtube.com/embed/g3zRQXK7zoc'
	];
</script>

<img
	src="background/image.jpeg"
	alt=""
	class="fixed h-90 w-auto lg:h-screen lg:w-screen -z-10 brightness-90 saturate-150 aspect-auto"
/>
<div class="fixed top-[230px] left-0 right-0 bottom-0 lg:inset-0 -z-0 bg-black lg:bg-opacity-20" />
<div class="absolute ">
	<a
		href="#inicio"
		class="fixed bottom-10 right-10 z-10 bg-white rounded-full p-3 lg:right-[100px] lg:bottom-[70px]"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
			/>
		</svg></a
	>
	>
</div>
<div class="absolute scroll-smooth">
	<div class="snap-y h-screen w-screen overflow-scroll text-white overflow-x-hidden">
		<div id="inicio" class=" snap-start h-screen w-full">
			<div
				class="grid grid-cols-1 justify-items-center text-white pt-[92px] lg:mt-40 text-center animate__animated animate__zoomIn"
			>
				<h1 class="font-bold text-6xl lg:text-9xl">London St</h1>
				<h1
					class=" text-2xl lg:text-5xl animate__animated animate__zoomIn animate__delay-1s lg:mt-10"
				>
					A Sensible excuse
				</h1>
				<h1 class=" text-2xl animate__animated animate__zoomIn animate__delay-1s lg:mt-10">
					Since July 13th, 1985
				</h1>
			</div>
			<div
				class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-60 mt-20 overflow-hidden px-10 pb-10"
			>
				{#each datas as data}
					<Info {data} />
				{/each}
			</div>
		</div>
		<div id="videos" class="snap-start h-screen">
			<div
				class="grid grid-cols-1 h-screen pt-20 mx-auto lg:grid-cols-3 gap-y-10 justify-items-center lg:content-center lg:self-center lg:mx-20 lg:gap-x-20 lg:gap-y-20"
			>
				{#each linksVideos as url}
					<Video {url} />
				{/each}
			</div>
		</div>
	</div>
</div>
