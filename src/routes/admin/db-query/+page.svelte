<script>
	export let data
</script>
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h2 class="h2">Remove Final</h2>
        <p class="p">Button will remove the final status of all games.</p>
		<form action="?/removeFinal" method="POST" class="space-y-2" enctype="multipart/form-data">
			<button type="submit" class="btn variant-filled-primary w-full">Submit</button>
		</form>
	</div>
	{#if data.success === true}
	<div class="space-y-5">Success</div>
	{:else}
	<div class="space-y-5">Failure</div>
	{/if}
	<div class="space-y-5">
		<h2 class="h2">Update All Binnny Buys</h2>
        <p class="p">Button will update all picks in the Binny Picks table.</p>
		<form action="?/updateBinnyBuys" method="POST" class="space-y-2" enctype="multipart/form-data">
			<button type="submit" class="btn variant-filled-primary w-full">Submit</button>
		</form>
	</div>
	{#if data.binnySuccess === true}
	<div class="space-y-5">Success</div>
	{:else}
	<div class="space-y-5">Failure</div>
	{/if}
</div>