<script lang="ts">
    import Blend from "$lib/form/Blend.svelte"
    import {type BlendInfo, type NoteInfo, type RecipeInfo, type SensualityInfo} from "$lib/types"
    import Recipe from "$lib/form/Recipe.svelte";
    import Sensuality from "$lib/form/Sensuality.svelte";
    import Notes from "$lib/form/Notes.svelte";

    let blend: BlendInfo = {
        name: "",
        roastDate: new Date(),
        beans: [],
    }

    let recipe: RecipeInfo = {
        brewer: "",
        dose: 20,
        extract: 300,
        temperature: 92,
        dynamics: "",
    }

    let notes: NoteInfo = {
        notes: [],
        colors: []
    }

    let sensuality: SensualityInfo = {
        body: 0,
        clarity: 0,
        acidity: 0,
        sweetness: 0,
        bitter: 0,
        aftertaste: 0,
        balance: 0,
    }
</script>

<div class="flex flex-col md:flex-row">
    <div class="w-full p-4 flex flex-col gap-4 md:w-xl">
        <Blend bind:blend={blend}/>
        <Recipe bind:recipe={recipe}/>
        <Notes bind:notes={notes}/>
        <Sensuality bind:sensuality={sensuality}/>
    </div>
    <div>
        preview
    </div>
</div>

