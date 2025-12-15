<script lang="ts">
    import type {CoffeeRecord} from "$lib/types";

    import Blend from "$lib/viewer/Blend.svelte";
    import Sensuality from "$lib/viewer/Sensuality.svelte";
    import Recipe from "$lib/viewer/Recipe.svelte";
    import Summary from "$lib/viewer/Summary.svelte";

    export let record: CoffeeRecord
</script>

<div class="grid gap-4">
    <Summary record={record}/>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Blend blend={record.blend}/>
        <Sensuality sensuality={record.sensuality}/>
    </div>
    <Recipe recipe={record.recipe}/>
</div>
