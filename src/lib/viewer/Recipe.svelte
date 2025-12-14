<script lang="ts">
    import {getBrewRatio} from "$lib/utils";
    import type {RecipeInfo} from "$lib/types.js";

    export let recipe: RecipeInfo
</script>

<div class="col-span-1 md:col-span-5 bg-white rounded-xl p-6 shadow-md border border-stone-100">
    <div class="mb-6">
        <h3 class="font-bold text-lg text-stone-800 flex items-center gap-2">
            <span class="w-1 h-5 bg-stone-600 rounded-full"></span>
            추출 레시피
        </h3>
        <p class="text-sm text-stone-500 mt-1">커피 추출의 핵심 요소들을 모아보았습니다.</p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-filter"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Brewer</p>
            <p class="text-lg font-bold text-stone-800">{recipe.brewer ? recipe.brewer : "-"}</p>
        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-scale-unbalanced"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Dose</p>
            <p class="text-lg font-bold text-stone-800">{recipe.dose}</p>
        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-flask"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Ratio</p>
            <p class="text-lg font-bold text-stone-800">{getBrewRatio(recipe.dose, recipe.extract)}</p>
        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-temperature-high"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Temp</p>
            <p class="text-lg font-bold text-stone-800">{recipe.temperature}</p>
        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-mortar-pestle"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Grind Setting</p>
            <p class="text-lg font-bold text-stone-800">{recipe.grinder ?? "-"}</p>
        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-braille"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Grind Size</p>
            <p class="text-lg font-bold text-stone-800">{recipe.grindSize ?? "-"}</p>
        </div>
    </div>
    <div id="brew-info-box" class="mt-4 p-4 bg-amber-50 text-amber-900 rounded-lg text-sm border border-amber-100 transition-opacity duration-300">
        {recipe.dynamics}
    </div>
</div>