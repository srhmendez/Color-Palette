<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import LoginButtons from "$lib/Components/LoginButtons.svelte";
</script>
<div class="mt-10">
	<LoginButtons />
</div>
{@render children()}

