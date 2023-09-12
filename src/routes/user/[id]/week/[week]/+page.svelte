<script>
	import NcaaCard from '$lib/components/NCAA_Card.svelte';
	import NflCard from '$lib/components/NFL_Card.svelte';
	import { currentWeek, userPicks } from '$lib/utils';
	import { TabGroup, Tab, ProgressRadial } from '@skeletonlabs/skeleton';
	// might need this to load the NCAA picks
	import { onMount } from 'svelte';
	import { Icon, ArrowRightCircle } from 'svelte-hero-icons';
	export let data;
	let tabSet = 0;

	userPicks.set(data);

	$: sumNFLPicks = data.gamesNFL.filter((game) => game.selected).length;
	$: sumNCAAPicks = data.gamesNCAA.filter((game) => game.selected).length;
</script>

<h1 class="h1 m-10 font-bold">Week {data.week}</h1>
<div class="flex flex-row justify-center">
	<div class="card flex flex-col grow p-4 max-w-xs max-h-min m-4">
		<h2 class="h2 py-4 font-semibold text-center">NFL Picks</h2>
		<hr class="!border-t-2" />
		<ProgressRadial
			value={(sumNFLPicks / 4) * 100}
			track="stroke-primary-500/30"
			meter="stroke-primary-500"
			class="mx-auto py-4">{sumNFLPicks} of 4</ProgressRadial
		>
	</div>
	<div class="card flex flex-col grow p-4 max-w-xs max-h-min m-4">
		<h2 class="h2 py-4 font-semibold text-center">NCAA Picks</h2>
		<hr class="!border-t-2" />
		<ProgressRadial
			value={(sumNCAAPicks / 4) * 100}
			track="stroke-primary-500/30"
			meter="stroke-primary-500"
			class="mx-auto py-4">{sumNCAAPicks} of 4</ProgressRadial
		>
	</div>
	<div class="flex items-center">
		{#if data.week == $currentWeek}
			<a href={`./${data.week}/review`}>
				{#if data.week == 1}
					{#if (sumNCAAPicks > 0 || sumNFLPicks > 0) & (sumNCAAPicks <= 8 && sumNFLPicks <= 4)}
						<button class="btn variant-filled-success" type="submit">
							Review Picks <Icon src={ArrowRightCircle} mini class="h-6" />
						</button>
					{/if}
				{:else if (sumNCAAPicks > 0 || sumNFLPicks > 0) & (sumNCAAPicks <= 4 && sumNFLPicks <= 4)}
					<button class="btn variant-filled-success" type="submit">
						Review Picks <Icon src={ArrowRightCircle} mini class="h-6" />
					</button>
				{/if}
			</a>
		{/if}
	</div>
</div>
<TabGroup class="mx-10 text-lg">
	<Tab bind:group={tabSet} name="tab1" value={0}>
		<span class="font-semibold">NFL</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>
		<span class="font-semibold">NCAA</span>
	</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<div class="container grid xl:grid-cols-2 grid-cols-1 mx-auto">
				{#each data.gamesNFL as game (game.id)}
					<NflCard bind:game picks={data.picks} />
				{/each}
			</div>
		{:else if tabSet === 1}
			<div class="container grid xl:grid-cols-2 grid-cols-1 mx-auto">
				{#each data.gamesNCAA as game (game.id)}
					<NcaaCard bind:game picks={data.picks} />
				{/each}
			</div>
		{/if}
	</svelte:fragment>
</TabGroup>
