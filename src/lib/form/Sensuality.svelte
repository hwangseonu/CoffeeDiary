<script lang="ts">
    import type {SensualityInfo} from "$lib/types";

    export let sensuality: SensualityInfo

    const categories = [
        {id: "Body", text: "바디감"},
        {id: "Clarity", text: "선명도"},
        {id: "Acidity", text: "산미"},
        {id: "Sweetness", text: "단맛"},
        {id: "Aroma", text: "향"},
        {id: "Bitter", text: "쓴맛"},
        {id: "Aftertaste", text: "후미"},
        {id: "Balance", text: "균형감"},
    ]
</script>

<div class="w-full bg-white rounded-xl shadow-md p-5">
    <h3 class="font-bold text-lg text-stone-800 mb-4 flex items-center gap-2">
        <span class="w-1 h-5 bg-stone-600 rounded-full"></span>
        컵 품질 평가 (1~5점)
    </h3>

    <div id="quality-sliders" class="space-y-4">
        {#each categories as category}
            <div class="space-y-2">
                <div class="flex justify-between items-center text-xs"><span>{category.text} ({category.id})</span><span
                        id="strength-val"
                        class="font-bold text-amber-600">{sensuality[category.id.toLocaleString().toLowerCase()]}</span>
                </div>
                <div class="slider-container">
                    <input bind:value={sensuality[category.id.toLocaleString().toLowerCase()]} type="range"
                           id="strength" min="0" max="5" step="0.5"
                           class="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer range-amber">
                    <div class="slider-dots">
                        {#each Array(11) as _}
                            <div class="slider-dot"></div>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .slider-container {
        position: relative;
        padding-bottom: 20px; /* Space for dots */
    }

    .slider-dots {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 10px;
        display: flex;
        justify-content: space-between;
        padding: 0 4px; /* Adjust for slider thumb overhang */
    }

    .slider-dot {
        width: 6px;
        height: 6px;
        background-color: #d6d3d1; /* Stone-300 */
        border-radius: 50%;
        transform: translateY(5px);
    }

    .range-amber::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        background: #D97706; /* Amber-600 */
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .range-amber::-moz-range-thumb {
        width: 16px;
        height: 16px;
        background: #D97706;
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
</style>