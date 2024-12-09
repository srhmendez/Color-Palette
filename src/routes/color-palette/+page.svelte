<script lang="ts">

    //Writable stores for color values
    import { writable } from "svelte/store";
    const color1 = writable("");
    const color2 = writable("");
    const color3 = writable("");
    const color4 = writable("");
    const color5 = writable("");

    import { onMount } from "svelte";
	import RefreshPageButton from "$lib/Components/RefreshPageButton.svelte";

    const url = "http://colormind.io/api/";
    let data = {
        model : "default",
        input : ["N", "N","N","N","N"]
    };

    // Function to convert RGB to Hex
    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }

    // Fetch color palette from API
    onMount(async () => {

        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                const palette = result.result;
                console.log(palette);

                let hex1 = rgbToHex(palette[0][0], palette[0][1], palette[0][2])
                let hex2 = rgbToHex(palette[1][0], palette[1][1], palette[1][2])
                let hex3 = rgbToHex(palette[2][0], palette[2][1], palette[2][2])
                let hex4 = rgbToHex(palette[3][0], palette[3][1], palette[3][2])
                let hex5 = rgbToHex(palette[4][0], palette[4][1], palette[4][2])

                color1.set(hex1.toUpperCase());
                color2.set(hex2.toUpperCase());
                color3.set(hex3.toUpperCase());
                color4.set(hex4.toUpperCase());
                color5.set(hex5.toUpperCase());

            } else {
                console.error("Failed to fetch palette");
            }
        } catch (error) {
            console.error("Error:", error);
        }

    });

    // Copy hex value to clipboard

    let copyValuesText = "Copy Hex Codes";

    function copyValues (event) {
        // Handle click event
        let value = navigator.clipboard.writeText(event.target.innerText);
        console.log(value);
        copyValuesText = "Copied!";
        event.target.innerText = copyValuesText;

    }

    

</script>

<h1 class="h1 text-primary-600 mt-20 ml-5 mb-32">Color Palette Generator</h1>

<div>
    <div class="flex justify-between">
        <input transition:fade={{ delay: 500, duration: 900 }} class="w-1/5 h-96" type="color" bind:value={$color1} />
        <input transition:fade={{ delay: 500, duration: 900 }} class="w-1/5 h-96" type="color" bind:value={$color2} />
        <input transition:fade={{ delay: 500, duration: 900 }} class="w-1/5 h-96" type="color" bind:value={$color3} />
        <input transition:fade={{ delay: 500, duration: 900 }} class="w-1/5 h-96" type="color" bind:value={$color4} />
        <input transition:fade={{ delay: 500, duration: 900 }} class="w-1/5 h-96" type="color" bind:value={$color5} />
    </div>
    <div class="flex justify-between mt-10">
            <button on:click={copyValues} class="h3 w-1/6 ml-1 hex-value ">{$color1}</button>
            <button on:click={copyValues} class="h3 w-1/6 ml-1 hex-value">{$color2}</button>
            <button on:click={copyValues} class="h3 w-1/6 ml-1 hex-value">{$color3}</button>
            <button on:click={copyValues} class="h3 w-1/6 ml-1 hex-value">{$color4}</button>
            <button on:click={copyValues} class="h3 w-1/6 ml-1 hex-value">{$color5}</button>
    </div>
</div>
<div class="flex justify-center">
    <RefreshPageButton />
</div>