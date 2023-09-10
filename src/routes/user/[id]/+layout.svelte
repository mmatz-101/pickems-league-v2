<script>
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { currentWeek } from '$lib/utils';

	export let data;

	let navigations = [];

	for (let num = 1; num < data.currentWeek + 1; num++) {
		navigations = [
			...navigations,
			{
				name: `Week ${num}`,
				href: `/user/${data.id}/week/${num}`
			}
		];
	}
	navigations = [
		...navigations,
		{
			name: 'User Homepage',
			href: `/user/${data.id}`
		}
	];
	$: navigations = navigations.reverse();
	console.log(navigations);
</script>

<AppShell class="" slotSidebarLeft="bg-gradient-to-b from-gray-200/50 w-56 p-4" slotHeader="">
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			shadow="bg-black"
		>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<strong class="text-xl uppercase">Pick Em's League</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<form action="/logout" method="POST">
					<button type="submit" class="btn btn-sm variant-ghost-surface rounded-md">Log out</button>
				</form>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="flex-col h-full justify-between">
			<div class="">
				<ul class="list-nav">
					{#each navigations as navigation}
						<div>
							<li class={navigation.activeClass}>
								<a class="flex-grow" href={navigation.href}>
									{navigation.name}
								</a>
							</li>
						</div>
					{/each}
				</ul>
			</div>
		</div>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</AppShell>
