<script lang="ts">
    import Blend from "$lib/form/Blend.svelte"
    import type {CoffeeRecord} from "$lib/types"
    import Recipe from "$lib/form/Recipe.svelte";
    import Sensuality from "$lib/form/Sensuality.svelte";
    import Notes from "$lib/form/Notes.svelte";

    let record: CoffeeRecord = {
        title: "",
        description: "",
        date: new Date(),
        blend: {
            name: "",
            roastDate: new Date(),
            beans: [],
        },
        recipe: {
            brewer: "",
            dose: 20,
            extract: 300,
            temperature: 92,
            dynamics: "",
        },
        note: {
            notes: [],
            colors: []
        },
        sensuality: {
            body: 0,
            clarity: 0,
            acidity: 0,
            sweetness: 0,
            bitter: 0,
            aftertaste: 0,
            balance: 0,
        }
    }
</script>

<div class="flex flex-col md:flex-row">
    <div class="w-full p-4 flex flex-col gap-4 md:w-xl">
        <Blend bind:blend={record.blend}/>
        <Recipe bind:recipe={record.recipe}/>
        <Notes bind:notes={record.note}/>
        <Sensuality bind:sensuality={record.sensuality}/>
    </div>
    <div>
        preview
    </div>
</div>

