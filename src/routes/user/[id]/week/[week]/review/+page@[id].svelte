<script>
	import { userPicks, formatDate } from '$lib/utils';
	const filteredNFLData = $userPicks.gamesNFL?.filter((item) => item.selected === true);
	const filteredNCAAData = $userPicks.gamesNCAA?.filter((item) => item.selected === true);
	const filteredData = filteredNFLData.concat(filteredNCAAData);
</script>

<h1 class="h1 m-10 font-bold">Picks</h1>

<div class="flex max-w-4xl mx-auto my-10">
	<!-- Responsive Container (recommended) -->
	<div class="table-container">
		<!-- Native Table Element -->
		<form method="POST" action="?/submitPicks">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Team Selected</th>
						<th>Spread</th>
						<th>Kick Off</th>
						<th>League</th>
					</tr>
				</thead>
				<tbody>
					{#each filteredData as game, i}
						<tr>
							{#if game.homeTeamSelected}
								<td>
									<input type="hidden" name={`id_${i}`} value={game.id} />
									{game.home_name}
								</td>
								<td>
									<input type="hidden" name={`team_selected_${i}`} value="home" />
									{game.home_spread}
								</td>
							{:else if game.awayTeamSelected}
								<td>
									<input type="hidden" name={`id_${i}`} value={game.id} />
									{game.away_name}
								</td>
								<td>
									<input type="hidden" name={`team_selected_${i}`} value="away" />
									{game.away_spread}
								</td>
							{/if}
							<td>{formatDate(game.date)} ET</td>
							<td>{game.league}</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<div class="flex grow justify-end p-10">
				<button type="submit" class="btn flex justify-end variant-filled-success">
					Submit Picks
				</button>
			</div>
		</form>
	</div>
</div>
