<script lang="ts">
    import type {CoffeeRecord} from "$lib/types";

    import Blend from "$lib/viewer/Blend.svelte";
    import Sensuality from "$lib/viewer/Sensuality.svelte";
    import Recipe from "$lib/viewer/Recipe.svelte";

    export let record: CoffeeRecord


</script>

<div class="grid grid-cols-1 md:grid-cols-5 gap-4">
    <Blend blend={record.blend}/>
    <Sensuality sensuality={record.sensuality}/>
    <Recipe recipe={record.recipe}/>
</div>
