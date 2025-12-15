<script lang="ts">
    import BlendForm from "$lib/components/form/Blend.svelte"
    import type {CoffeeRecord} from "$lib/types"
    import Recipe from "$lib/components/form/Recipe.svelte";
    import Sensuality from "$lib/components/form/Sensuality.svelte";
    import Notes from "$lib/components/form/Notes.svelte";
    import BlendViewer from "$lib/components/viewer/Blend.svelte";
    import Summary from "$lib/components/form/Summary.svelte";

    let record: CoffeeRecord = {
        title: "",
        description: "",
        score: 0,
        date: new Date(),
        blend: {
            roastDate: new Date(),
            roastLevel: "",
            beans: [],
        },
        recipe: {
            brewer: "",
            dose: 20,
            extract: 300,
            temperature: 92,
            dynamics: "",
        },
        notes: [],
        sensuality: {
            body: 0,
            clarity: 0,
            acidity: 0,
            sweetness: 0,
            aroma: 0,
            bitter: 0,
            aftertaste: 0,
            balance: 0,
        },
    }

    async function save() {
        const response = await fetch("/api/post", {
            method: 'POST', // 일반 POST 메서드 사용
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(record)
        });

        console.log(await response.json());
    }
</script>

<div class="flex justify-center w-full p-4">
    <div class="flex flex-col gap-4 w-full md:w-3/5">
        <Summary bind:record={record}/>
        <div class="flex gap-4 flex-col md:flex-row">
            <BlendForm bind:blend={record.blend}/>
            <div class="w-full h-full md:w-1/2">
                <BlendViewer blend={record.blend}/>
            </div>
        </div>
        <Recipe bind:recipe={record.recipe}/>
        <div class="flex gap-4 flex-col md:flex-row">
            <div class="md:max-w-1/2">
                <Notes bind:notes={record.notes}/>
            </div>
            <div class="w-full flex flex-col gap-4">
                <Sensuality bind:sensuality={record.sensuality}/>
                <button on:click={save} id="save-log-btn"
                        class="w-full h-18 px-4 py-2 rounded-lg shadow-md bg-amber-500 hover:bg-amber-600 text-xl text-white font-medium transition-colors cursor-pointer">
                    저장하기
                </button>
            </div>
        </div>
    </div>
</div>


