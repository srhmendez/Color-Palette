<script>
    import { tweened } from 'svelte/motion';
    let name = '';

    if (name === '') {
        name = 'Friend';
    }

</script>

<div class="flex flex-col">
    <h1 class="h1 mb-8 mt-80 m-auto text-center text-primary-600">Hello {name}!</h1>
    <h3 class="h3 text-center text-secondary-600 m-auto">Welcome to the Color Palette App!</h3>
    <p class="p text-center auto mb-10">This is a simple app that displays a list of colors and their hex values.</p>
    <a class="m-auto" href="./color-palette"><button class="btn btn-primary variant-filled m-auto bg-tertiary-200 justify-centertransition ease-in-out delay-150 bg-secondary-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">Generate A Color Palette!</button></a>
</div>