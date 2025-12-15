<script lang="ts">
    import type {CoffeeRecord} from "$lib/types";

    import Blend from "$lib/components/viewer/Blend.svelte";
    import Sensuality from "$lib/components/viewer/Sensuality.svelte";
    import Recipe from "$lib/components/viewer/Recipe.svelte";
    import Title from "$lib/components/viewer/Title.svelte";
    import Notes from "$lib/components/viewer/Notes.svelte";
    import Score from "$lib/components/viewer/Score.svelte";

    export let record: CoffeeRecord
</script>

<div class="grid gap-4">
    <Title record={record}/>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Blend blend={record.blend}/>
        <Sensuality sensuality={record.sensuality}/>
    </div>

    <Recipe recipe={record.recipe}/>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Notes notes={record.notes}/>
        <Score score={record.score} text={record.description}/>
    </div>
</div>
