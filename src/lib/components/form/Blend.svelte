<script lang="ts">
  import { type BlendInfo } from '$lib/types';
  import DateInput from '$lib/components/form/DateInput.svelte';

  export let blend: BlendInfo;

  // 합계 계산 (UX: 100% 초과 여부 확인용)
  $: totalRatio = blend.beans.reduce((sum, bean) => sum + (bean.ratio || 0), 0);

  function addBlendButton() {
    const color = ((Math.random() * 0xffffff) | 0).toString(16).padStart(6, '0');
    blend.beans = [
      ...blend.beans,
      {
        name: '',
        ratio: 0,
        color: '#' + color
      }
    ];
  }

  function removeBlendButton(index: number) {
    blend.beans = blend.beans.filter((_, i) => i !== index);
  }
</script>

<div class="w-full bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
  <div class="flex justify-between items-center mb-6">
    <h3 class="font-bold text-xl text-stone-800 flex items-center gap-2">
      <span class="w-1.5 h-6 bg-stone-800 rounded-full"></span>
      원두 블렌딩 구성
    </h3>
    <div class="flex flex-col items-end">
      <span class="text-[10px] text-stone-400 uppercase font-bold tracking-tighter"
        >Total Ratio</span
      >
      <span class="text-sm font-mono {totalRatio > 100 ? 'text-red-500' : 'text-stone-600'}">
        {totalRatio} / 100%
      </span>
    </div>
  </div>

  <form id="input-form" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="space-y-1.5">
        <span class="block text-sm font-semibold text-stone-700">로스팅 날짜</span>
        <DateInput bind:date={blend.roastDate} />
      </div>
      <div class="space-y-1.5">
        <label for="roastLevel" class="block text-sm font-semibold text-stone-700"
          >로스팅 레벨</label
        >
        <input
          bind:value={blend.roastLevel}
          type="text"
          id="roastLevel"
          class="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-200 outline-none transition-all"
          placeholder="예: Medium-Light (#75)"
        />
      </div>
    </div>

    <div class="pt-6 border-t border-stone-100">
      <div class="flex justify-between items-center mb-4">
        <p class="font-semibold text-stone-700">구성 원두 상세</p>
      </div>

      <div id="blend-inputs-container" class="space-y-3 pr-1">
        {#each blend.beans as bean, i (bean.name)}
          <div
            class="group relative bg-stone-50 p-4 rounded-xl border border-stone-100 hover:border-stone-300 transition-all"
          >
            <div class="flex gap-3 items-center mb-3">
              <div
                class="relative flex-shrink-0 w-8 h-8 rounded-full shadow-inner overflow-hidden border-2 border-white ring-1 ring-stone-200"
                style="background-color: {bean.color}"
              >
                <input
                  type="color"
                  class="absolute inset-0 opacity-0 cursor-pointer scale-150"
                  bind:value={bean.color}
                />
              </div>

              <input
                type="text"
                class="flex-1 bg-transparent border-none p-0 text-sm font-medium focus:ring-0 placeholder:text-stone-400"
                placeholder="원두 이름 (예: Guatemala Geisha)"
                bind:value={bean.name}
              />

              <button
                type="button"
                on:click={() => removeBlendButton(i)}
                class="text-stone-300 hover:text-red-500 transition-colors p-1"
                title="remove-bean"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div class="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                class="flex-1 h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-600"
                bind:value={bean.ratio}
              />
              <div class="flex items-center gap-1 w-16">
                <input
                  type="number"
                  class="w-full text-right bg-white border border-stone-200 rounded px-1.5 py-0.5 text-xs font-mono"
                  bind:value={bean.ratio}
                />
                <span class="text-[10px] text-stone-400">%</span>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <button
        type="button"
        on:click={addBlendButton}
        class="mt-4 w-full py-3 border-2 border-dashed border-stone-200 text-stone-400 rounded-xl hover:border-stone-400 hover:text-stone-600 transition-all text-sm font-medium flex items-center justify-center gap-2"
      >
        <i class="fa-solid fa-plus text-xs"></i>
        새 원두 추가하기
      </button>
    </div>
  </form>
</div>
