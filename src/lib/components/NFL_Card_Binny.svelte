<script>
	import { formatDate } from '$lib/utils';
	export let game;
	export let picks;

	// only happens once when the card is initially loaded
	const team_selected = picks.find((pick) => pick.gameID === game.id)?.team_selected;

	// if the away team isn't selected and it is a previous user pick set it.
	if (team_selected == 'home' && !game.awayTeamSelectedBinny) {
		game.homeTeamSelectedBinny = true;
	}

	// if the home team isn't selected and it is a previous user pick set it.
	if (team_selected == 'away' && !game.homeTeamSelectedBinny) {
		game.awayTeamSelectedBinny = true;
	}

	$: game.selectedBinny = game.homeTeamSelectedBinny || game.awayTeamSelectedBinny;
</script>

<div class="flex justify-center">
	<div class="card grow my-3 p-4 max-w-lg">
		<div class="flex flex-row justify-between">
			<p class="text-surface-600 dark:text-white">{formatDate(game.date)} ET</p>
			<p class="text-surface-600 dark:text-white">{game.tv_station_name}</p>
		</div>
		<hr class="!border-t-2" />
		<div class="flex grow justify-between py-1">
			{#if game.status === 'FINAL'}
				<span class="h6 bg-warning-400 rounded-md">Final</span>
				<span class="h6">Score</span>
			{:else if game.selected}
				<span class="h6 flex grow justify-center bg-warning-500">Already Selected</span>
			{:else}
				<span class="h6">Select a Team</span>
				<span class="h6">Spread</span>
			{/if}
		</div>
		<div class="flex flex-row justify-between align-middle px-2 py-2">
			{#if (game.status === 'FINAL') | game.selected}
				<div class="flex grow justify-between px-5 py-2">
					<h4 class="h4 font-medium {game.homeTeamSelectedBinny ? 'text-primary-700' : ''}">
						@{game.home_display_name}
					</h4>
					<div>
						<p>{game.home_score}</p>
					</div>
				</div>
			{:else}
				<button
					class="btn grow justify-between"
					on:click={() => {
						game.awayTeamSelectedBinny = false;
						game.homeTeamSelectedBinny = !game.homeTeamSelectedBinny;
					}}
				>
					<h4 class="h4 font-medium {game.homeTeamSelectedBinny ? 'text-primary-700' : ''}">
						@{game.home_display_name}
					</h4>
					<div>
						<p>{game.home_spread}</p>
					</div>
				</button>
			{/if}
		</div>
		<div class="flex flex-row justify-between align-middle px-2 py-2">
			{#if (game.status === 'FINAL') | game.selected}
				<div class="flex grow justify-between px-5 py-2">
					<h4 class="h4 font-medium {game.awayTeamSelectedBinny ? 'text-primary-700' : ''}">
						{game.away_display_name}
					</h4>
					<p>{game.away_score}</p>
				</div>
			{:else}
				<button
					class="btn grow justify-between"
					on:click={() => {
						game.homeTeamSelectedBinny = false;
						game.awayTeamSelectedBinny = !game.awayTeamSelectedBinny;
					}}
				>
					<h4 class="h4 font-medium {game.awayTeamSelectedBinny ? 'text-primary-700' : ''}">
						{game.away_display_name}
					</h4>
					<div>
						{#if game.status === 'FINAL'}
							<p>{game.away_spread}</p>
						{:else}
							<p>{game.away_spread}</p>
						{/if}
					</div>
				</button>
			{/if}
		</div>
		<hr class="!border-t-2" />
		<div class="flex flex-row justify-end">
			<p class="pt-2 text-sm text-surface-600 dark:text-white">
				Updated: {formatDate(game.updated)} ET
			</p>
		</div>
	</div>
</div>
