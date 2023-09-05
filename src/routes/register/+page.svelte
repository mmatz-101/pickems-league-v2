<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h2 class="h2 font-semibold">Register for an account</h2>
		<p>
			Or
			<a href="/login" class="text-primary-500">sign in</a>
			if you already have an account.
		</p>
		<div class="space-y-4">
			<form action="?/register" method="POST" class="space-y-2">
				<label for="name" class="label">
					<span class="font-semibold">Name</span>
					<input class="input" name="name" type="text" placeholder="Insert name" />
				</label>
				<label for="email" class="label">
					<span class="font-semibold">Email</span>
					<input class="input" name="email" type="email" placeholder="email" />
				</label>
				<label for="password" class="label">
					<span class="font-semibold">Password</span>
					<input class="input" name="password" type="password" placeholder="password" />
				</label>
				<label for="passwordConfirm" class="label">
					<span class="font-semibold">Confirm Password</span>
					<input class="input" name="passwordConfirm" type="password" placeholder="password" />
				</label>
				<button type="submit" class="btn variant-filled-primary w-full">Submit</button>
			</form>
		</div>
	</div>
</div>
<!-- Pop up needed -->
