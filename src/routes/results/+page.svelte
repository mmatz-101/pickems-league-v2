<script>
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';

	export let data;
	let resultData = data.resultData;

	const resultTable = {
		head: [
			'User',
			'Number of Picks',
			'Favorite Picks',
			'Underdog Picks',
			'Wins',
			'Loss',
			'Push',
			'Points',
			'Win %'
		],
		body: tableMapperValues(resultData, [
			'userName',
			'pick_count',
			'fav_count',
			'under_count',
			'win_count',
			'lost_count',
			'push_count',
			'result_points',
			'win_percentage'
		])
	};
</script>

<h1 class="h1">Results Page</h1>
<div class="flex flex-grow mx-48 my-10">
	<Table source={resultTable} class="table-comfortable" />
</div>
