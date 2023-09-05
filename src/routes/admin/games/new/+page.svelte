<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h2 class="h2">Admin update games table</h2>
		<form action="?/createGame" method="POST" class="space-y-2" enctype="multipart/form-data">
			<label for="league" class="label">
				<span>Select a league</span>
				<select class="select" name="league">
					<option value="nfl">NFL</option>
					<option value="ncaaf">NCAAF</option>
				</select>
			</label>
			<label for="year" class="label">
				<span>Select a year</span>
				<select class="select" name="year">
					<option value="2023">2023</option>
					<option value="2024">2024</option>
				</select>
			</label>
			<label for="ext" class="label">
				<span>Week Extension</span>
				<input name="ext" class="input" type="text" />
			</label>
			<label for="week" class="label">
				<span>Enter a week</span>
				<input name="week" class="input" type="number" />
			</label>
			<button type="submit" class="btn variant-filled-primary w-full">Submit</button>
		</form>
	</div>
</div>
