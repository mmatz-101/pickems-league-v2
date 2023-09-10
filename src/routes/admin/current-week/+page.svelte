<script>
	import { currentWeek } from '$lib/utils';
	export let data;
	$: currentWeek.set(data.currentWeekDB);
	$: console.log('Setting current week: ', $currentWeek);

	function setWeek() {
		currentWeek.set(data.currentWeekDB);
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h2 class="h2">Set Current Week</h2>
		<form
			action="?/updateCurrentWeek"
			method="POST"
			class="space-y-2"
			enctype="multipart/form-data"
		>
			<label for="currentWeek" class="label">
				<span>Enter the current week.</span>
				<input name="currentWeek" class="input" type="number" />
			</label>
			<button type="submit" class="btn variant-filled-primary w-full" on:click={setWeek}
				>Submit</button
			>
		</form>
	</div>
</div>
