<script lang="ts">
    import {getBrewRatio} from "$lib/utils";
    import type {RecipeInfo} from "$lib/types.js";

    export let recipe: RecipeInfo
</script>

<section class="bg-white rounded-xl p-6 shadow-md border border-stone-100">
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
            <p class="text-lg font-bold text-stone-800 break-keep">{recipe.brewer ? recipe.brewer : "-"}</p>
            <span class="text-xs text-stone-500 font-bold uppercase tracking-wide">추출에 사용된 도구</span>

        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-scale-unbalanced"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Dose</p>
            <p class="text-lg font-bold text-stone-800">{recipe.dose}g</p>
            <span class="text-xs text-stone-500 font-bold uppercase tracking-wide ">사용한 원두의 중량</span>
        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-flask"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Ratio</p>
            <p class="text-lg font-bold text-stone-800">{getBrewRatio(recipe.dose, recipe.extract)}</p>
            <span class="text-xs text-stone-500 font-bold uppercase tracking-wide ">원두와 물의 비율</span>
        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-temperature-high"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Temp</p>
            <p class="text-lg font-bold text-stone-800">{recipe.temperature}&#8451;</p>
            <span class="text-xs text-stone-500 font-bold uppercase tracking-wide ">사용된 물의 온도</span>
        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-mortar-pestle"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Grind Setting</p>
            <p class="text-lg font-bold text-stone-800">{recipe.grinder ?? "-"}</p>
            <span class="text-xs text-stone-500 font-bold uppercase tracking-wide break-keep">원두 분쇄에 사용된 그라인더와 세팅</span>
        </div>

        <div class="brew-card group cursor-pointer bg-stone-50 hover:bg-white hover:shadow-md p-4 rounded-xl border border-stone-100 transition-all duration-300">
            <div class="text-stone-400 mb-2 group-hover:text-amber-600 transition-colors">
                <i class="fa-solid fa-braille"></i>
            </div>
            <p class="text-xs text-stone-500 font-bold uppercase tracking-wide">Grind Size</p>
            <p class="text-lg font-bold text-stone-800">{recipe.grindSize ?? "-"}μm</p>
            <span class="text-xs text-stone-500 font-bold uppercase tracking-wide break-keep">커피 입자의 평균 크기</span>
        </div>
    </div>
    <div id="brew-info-box" class="mt-4 p-4 bg-amber-50 text-amber-900 rounded-lg text-sm border border-amber-100 transition-opacity duration-300">
        {recipe.dynamics}
    </div>
</section>