<script>
    function handleLogout() {
        
    }
</script>

<div class="logout-container flex flex-col justify-center">
    <h1 class="h1 mb-8 mt-80 m-auto text-center text-primary-600">You have been logged out</h1>
    <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 logout-button btn btn-primary variant-filled m-auto bg-tertiary-200 justify-center" on:click={handleLogout}>Login Again</button>
</div>