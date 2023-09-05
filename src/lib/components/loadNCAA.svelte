<script>
	async function loadNCAA() {
		// only happens once when the card is initially loaded
		const team_selected = picks.find((pick) => pick.gameID === game.id)?.team_selected;

		// if the away team isn't selected and it is a previous user pick set it.
		if (team_selected == 'home' && !game.awayTeamSelected) {
			game.homeTeamSelected = true;
		}

		// if the home team isn't selected and it is a previous user pick set it.
		if (team_selected == 'away' && !game.homeTeamSelected) {
			game.awayTeamSelected = true;
		}
	}

	export { loadNCAA };
</script>
