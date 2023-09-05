<script>
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { Drawer, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
</script>

<Drawer />

<slot />
