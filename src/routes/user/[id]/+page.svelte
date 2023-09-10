<script>
	import { Accordion } from '@skeletonlabs/skeleton';
	import { currentWeek } from '$lib/utils';
	import TablePicks from '$lib/components/TablePicks.svelte';
	export let data;

	$: picks = data.picks;

	// Find the maximum week number from the records
	$: maxWeek = Math.max(...data.picks?.map((pick) => pick.week));

	// Create an array of week numbers in reverse order from maxWeek to 1
	$: weekNumbers = Array.from({ length: $currentWeek }, (_, index) => $currentWeek - index);
</script>

<div class="m-10">
	<h1 class="h1 font-bold">User Dashboard</h1>
	<div class="m-8">
		{#if $currentWeek > maxWeek}
			<aside class="alert variant-filled-warning">
				<!-- Message -->
				<div class="alert-message">
					<h3 class="h3">Warning</h3>
					<p>
						No current picks for this week. Select the current week from the NavBar on the left to
						make new picks.
					</p>
				</div>
			</aside>
		{/if}
	</div>
	<!-- <TablePicks filteredData={picks} /> -->
	<Accordion class="p-2 m-6 rounded-lg mx-auto max-w-5xl bg-slate-200">
		{#each weekNumbers as week}
			<TablePicks {picks} {week} />
		{/each}
	</Accordion>
</div>
