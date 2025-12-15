<script lang="ts">
    import {type RecipeInfo} from "$lib/types";
    import {getBrewRatio} from "$lib/utils";

    export let recipe: RecipeInfo;
</script>

<div class="w-full bg-white rounded-xl p-5 shadow-md border border-stone-100">
    <h3 class="font-bold text-lg text-stone-800 mb-4 flex items-center gap-2">
        <span class="w-1 h-5 bg-stone-600 rounded-full"></span>
        추출 레시피
    </h3>

    <div class="space-y-4 text-sm">
        <label class="block">도구 (Brewer): <input bind:value={recipe.brewer} type="text" id="brewer" class="w-full p-2 border border-stone-300 rounded-md" placeholder="Hario V60 02"></label>
        <div class="grid grid-cols-3 gap-2 mt-2">
            <label>도징양 (g): <input bind:value={recipe.dose} type="number" id="dose" class="w-full p-2 border border-stone-300 rounded-md" ></label>
            <label>추출량 (g): <input bind:value={recipe.extract} type="number" id="extract" class="w-full p-2 border border-stone-300 rounded-md"></label>
            <label>추출비율 (Ratio): <input value={getBrewRatio(recipe.dose, recipe.extract)} type="text" id="ratio" class="w-full p-2 border border-stone-300 rounded-md" disabled></label>
            <label>추출온도 (°C): <input bind:value={recipe.temperature} type="number" id="temp" class="w-full p-2 border border-stone-300 rounded-md"></label>
            <label>그라인더: <input bind:value={recipe.grinder} type="text" id="grind" class="w-full p-2 border border-stone-300 rounded-md" placeholder="k6, 100clicks"></label>
            <label>분쇄도 (μm): <input bind:value={recipe.grindSize} type="number" step="10" id="grind" class="w-full p-2 border border-stone-300 rounded-md" placeholder="1300"></label>
            <label class="flex flex-col w-full col-span-full">추출변수(Dynamics)
                <textarea bind:value={recipe.dynamics} class="w-full h-24 rounded-md border border-stone-300 resize-none"></textarea>
            </label>
        </div>
    </div>
</div>