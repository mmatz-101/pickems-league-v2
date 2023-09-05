<script>
	import { fade } from 'svelte/transition';

	export let form;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h2 class="h2">Reset your password</h2>
		<p>We will email you a link to reset your password.</p>
		<div>
			<form action="?/resetPassword" method="POST" class="space-y-2">
				<label for="email" class="label">
					<span>Email</span>
					<input class="input" name="email" type="email" placeholder="email" />
				</label>
				<button type="submit" class="btn variant-filled-secondary w-full">
					Request Password Reset
				</button>
			</form>
		</div>
		{#if form?.success}
			<aside class="alert variant-ghost-success" transition:fade|local={{ duration: 200 }}>
				<div class="alert-message">
					<p>Email was successfully sent.</p>
				</div>
			</aside>
		{/if}
	</div>
</div>
