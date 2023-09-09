<script>
	import { formatDate, currentWeek } from '$lib/utils';
	import { AccordionItem } from '@skeletonlabs/skeleton';
	export let picks;
	export let week;

	console.log('The current week in the /lib/TablePicks: ', $currentWeek);
	console.log('The week number passed in to generate TablePicks: ', week);

	// Define the `open` class based on condition
	let open = week == $currentWeek ? true : false;
</script>

{#if open}
	<AccordionItem open>
		<svelte:fragment slot="summary">
			<div class="flex grow font-medium text-md">
				Week {week}
			</div></svelte:fragment
		>
		<svelte:fragment slot="content">
			<div class="flex max-w-5xl mx-auto">
				<!-- Responsive Container (recommended) -->
				<div class="table-container">
					<!-- Native Table Element -->
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Team Selected</th>
								<th>Spread</th>
								<th>Home Team</th>
								<th>Away Team</th>
								<th>Kick Off</th>
								<th>League</th>
								<th>Results</th>
								<th>Final Score</th>
							</tr>
						</thead>
						<tbody>
							{#each picks as pick}
								{#if pick.week === week}
									<tr>
										<td>
											{pick.team_selected.toUpperCase()}
										</td>
										{#if pick.team_selected == 'home'}
											<td>
												{pick.expand.gameID.home_spread}
											</td>
											<td class="text-primary-800 font-medium">
												{pick.expand.gameID.home_name}
											</td>
											<td>
												{pick.expand.gameID.away_name}
											</td>
										{:else}
											<td>
												{pick.expand.gameID.away_spread}
											</td>
											<td>
												{pick.expand.gameID.home_name}
											</td>
											<td class="text-primary-800 font-medium">
												{pick.expand.gameID.away_name}
											</td>
										{/if}
										{#if pick.expand.gameID.status === 'FINAL'}
											<td>FINAL</td>
											<td>{pick.expand.gameID.league}</td>
											<td>
												{pick.results_text}
											</td>
											<td>
												{pick.expand.gameID.home_score} - {pick.expand.gameID.away_score}
											</td>
										{:else}
											<td>{formatDate(pick.expand.gameID.date)} ET</td>
											<td>{pick.expand.gameID.league}</td>
											<td />
											<td />
										{/if}
									</tr>
								{/if}
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</svelte:fragment>
	</AccordionItem>
{:else}
	<AccordionItem>
		<svelte:fragment slot="summary">
			<div class="flex grow font-medium text-md">
				Week {week}
			</div></svelte:fragment
		>
		<svelte:fragment slot="content">
			<div class="flex max-w-4xl mx-auto">
				<!-- Responsive Container (recommended) -->
				<div class="table-container">
					<!-- Native Table Element -->
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Team Selected</th>
								<th>Spread</th>
								<th>Home Team</th>
								<th>Away Team</th>
								<th>Kick Off</th>
								<th>League</th>
								<th>Results</th>
								<th>Final Score</th>
							</tr>
						</thead>
						<tbody>
							{#each picks as pick}
								{#if pick.week === week}
									<tr>
										<td>
											{pick.team_selected.toUpperCase()}
										</td>
										{#if pick.team_selected == 'home'}
											<td>
												{pick.expand.gameID.home_spread}
											</td>
											<td class="text-primary-800 font-medium">
												{pick.expand.gameID.home_name}
											</td>
											<td>
												{pick.expand.gameID.away_name}
											</td>
										{:else}
											<td>
												{pick.expand.gameID.away_spread}
											</td>
											<td>
												{pick.expand.gameID.home_name}
											</td>
											<td class="text-primary-800 font-medium">
												{pick.expand.gameID.away_name}
											</td>
										{/if}
										{#if pick.expand.gameID.status === 'FINAL'}
											<td>FINAL</td>
											<td>{pick.expand.gameID.league}</td>
											<td>
												{pick.results_text}
											</td>
											<td>
												{pick.expand.gameID.home_score} - {pick.expand.gameID.away_score}
											</td>
										{:else}
											<td>{formatDate(pick.expand.gameID.date)} ET</td>
											<td>{pick.expand.gameID.league}</td>
											<td />
											<td />
										{/if}
									</tr>
								{/if}
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</svelte:fragment>
	</AccordionItem>
{/if}
