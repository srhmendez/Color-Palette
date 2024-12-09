<script lang="ts">
import { currentUser } from "$lib/Stores/currentUser";
</script>

{#if $currentUser}
	<div class="flex justify-end">
		<a href="/api/auth/logout"><button class="btn btn-primary bg-secondary-800 mr-5">Sign out</button></a>
	</div>
{:else}
	<div class="flex justify-end">
		<a href="/api/auth/login"><button class="btn btn-primary bg-secondary-800 mr-5">Sign in</button></a>
		<a href="/api/auth/register"><button class="btn btn-primary bg-secondary-600 mr-5">Sign up</button></a>
	</div>
	
{/if}
