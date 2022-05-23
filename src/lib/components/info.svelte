<script>
	import * as animateScroll from 'svelte-scrollto';

	export let data;
	let val = false;
</script>

<div
	on:pointerenter={() => (val = true)}
	on:pointerleave={() => (val = false)}
	class="h-fit w-full text-center {val ? 'scale-110' : ''} duration-500"
>
	<div class="animate__animated animate__backInRight">
		<h1 class="hover:underline-offset-8">{data.title}:</h1>

		<h1 class="font-bold text-2xl hover:underline-offset-8 hover:scale-110 duration-500">
			<a href={data.info.url} on:click={() => animateScroll.scrollTo({ elements: '#videos' })}>
				{data.info.name}
			</a>
			{#if data.info.url2}
				<a href={data.info.url2}>
					<br />
					{data.info.name2}
				</a>
			{/if}
		</h1>
		<h1 class="text-xl"><a href={data.info2.url}>{data.info2.name}</a></h1>
	</div>
</div>
