<script>
	export let form;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h2 class="h2 font-semibold">Login to your account</h2>
		<p>
			Or
			<a href="/register" class="text-secondary-400">register</a>
			if don't have an account.
		</p>
		<div>
			<form action="?/login" method="POST" class="space-y-2">
				<label for="email" class="label">
					<span class="font-semibold">Email</span>
					<input class="input" name="email" type="email" placeholder="email" />
				</label>
				<label for="password" class="label">
					<span class="font-semibold">Password</span>
					<input class="input" name="password" type="password" placeholder="password" />
				</label>
				<a href="/reset-password" class="text-secondary-400 font-semibold space-y-4">
					Forgot Password?
				</a>
				<button type="submit" class="btn variant-filled-secondary w-full">Log in</button>
				{#if form?.notVerified}
					<aside class="alert variant-ghost-error">
						<div class="alert-message">
							<h3 class="h3">Warning</h3>
							<p>You must verify email before you can log in.</p>
						</div>
					</aside>
				{/if}
			</form>
		</div>
	</div>
</div>
