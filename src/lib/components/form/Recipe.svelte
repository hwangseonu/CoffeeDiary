<script lang="ts">
  import { type RecipeInfo } from '$lib/types';
  import { getBrewRatio } from '$lib/utils';

  export let recipe: RecipeInfo;

  // 추출 비율에 따른 스타일 가이드 (예: 1:15 ~ 1:17은 브루잉 골든 컵)
  $: ratioValue = getBrewRatio(recipe.dose, recipe.extract);
</script>

<div class="w-full bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
  <div class="flex justify-between items-center mb-6">
    <h3 class="font-bold text-xl text-stone-800 flex items-center gap-2">
      <span class="w-1.5 h-6 bg-blue-500 rounded-full"></span>
      추출 레시피
    </h3>
    <div class="flex flex-col items-end">
      <span class="text-[10px] text-stone-400 uppercase font-bold tracking-tighter">Brew Ratio</span
      >
      <span
        class="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-mono font-bold border border-blue-100"
      >
        1 : {ratioValue}
      </span>
    </div>
  </div>

  <div class="space-y-6">
    <div class="grid grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-100">
      <div class="space-y-1.5">
        <label for="dose" class="text-xs font-bold text-stone-500 ml-1">도징양 (Coffee)</label>
        <div class="relative">
          <input
            bind:value={recipe.dose}
            type="number"
            id="dose"
            class="w-full p-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none pr-8 font-mono"
            placeholder="20"
          />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs">g</span>
        </div>
      </div>
      <div class="space-y-1.5">
        <label for="extract" class="text-xs font-bold text-stone-500 ml-1">추출량 (Yield)</label>
        <div class="relative">
          <input
            bind:value={recipe.extract}
            type="number"
            id="extract"
            class="w-full p-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none pr-8 font-mono"
            placeholder="320"
          />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs">g</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
      <div class="col-span-2 md:col-span-1">
        <label for="brewer" class="block font-semibold text-stone-700 mb-1.5 ml-1 text-xs"
          >브루어 (Tool)</label
        >
        <input
          bind:value={recipe.brewer}
          type="text"
          id="brewer"
          class="w-full p-2.5 border border-stone-200 rounded-xl focus:border-stone-400 outline-none"
          placeholder="Hario V60"
        />
      </div>
      <div>
        <label for="temp" class="block font-semibold text-stone-700 mb-1.5 ml-1 text-xs"
          >물 온도</label
        >
        <div class="relative">
          <input
            bind:value={recipe.temperature}
            type="number"
            id="temp"
            class="w-full p-2.5 border border-stone-200 rounded-xl focus:border-stone-400 outline-none pr-8 font-mono"
            placeholder="93"
          />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-[10px]"
            >°C</span
          >
        </div>
      </div>
      <div class="col-span-1">
        <label for="grind" class="block font-semibold text-stone-700 mb-1.5 ml-1 text-xs"
          >그라인더 / 분쇄도</label
        >
        <div class="flex gap-2">
          <input
            bind:value={recipe.grinder}
            type="text"
            class="w-2/3 p-2.5 border border-stone-200 rounded-xl outline-none text-xs"
            placeholder="K6"
          />
          <input
            bind:value={recipe.grindSize}
            type="number"
            class="w-1/3 p-2.5 border border-stone-200 rounded-xl outline-none font-mono text-xs"
            placeholder="100"
          />
        </div>
      </div>
    </div>

    <div class="pt-4 border-t border-stone-50">
      <span class="block font-semibold text-stone-700 mb-1.5 ml-1 text-xs"
        >추출 변수 (Dynamics)</span
      >
      <textarea
        bind:value={recipe.dynamics}
        class="w-full h-24 p-3 bg-stone-50 border border-stone-100 rounded-xl focus:bg-white focus:border-stone-300 transition-all outline-none text-sm resize-none"
        placeholder="푸어링 간격, 물줄기 세기 등 구체적인 레시피를 적어주세요."
      ></textarea>
    </div>
  </div>
</div>
