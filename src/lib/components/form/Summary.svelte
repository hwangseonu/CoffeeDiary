<script lang="ts">
  import DateInput from '$lib/components/form/DateInput.svelte';
  import type { CoffeeRecord } from '$lib/types';

  export let record: CoffeeRecord;

  // 점수 단계별 피드백 (선택 사항)
  $: scoreFeedback =
    record.score >= 4
      ? '최고였어요! ☕️'
      : record.score >= 2.5
        ? '무난했어요. 🙂'
        : '아쉬웠어요. 🧊';
</script>

<div class="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
  <div class="flex items-center justify-between mb-6">
    <h3 class="font-bold text-xl text-stone-800 flex items-center gap-2">
      <span class="w-1.5 h-6 bg-orange-400 rounded-full"></span>
      총평
    </h3>
  </div>

  <div class="space-y-6 text-sm">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="md:col-span-2">
        <label for="blendName" class="block font-semibold text-stone-700 mb-1.5"
          >원두명 / 제목</label
        >
        <input
          bind:value={record.title}
          type="text"
          id="blendName"
          class="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all placeholder:text-stone-400"
          placeholder="예: 에티오피아 예가체프 G1"
          required
        />
      </div>
      <div>
        <span class="block font-semibold text-stone-700 mb-1.5">기록 날짜</span>
        <DateInput bind:date={record.date} />
      </div>
    </div>

    <div>
      <label for="description" class="block font-semibold text-stone-700 mb-1.5">총평</label>
      <textarea
        id="description"
        bind:value={record.description}
        class="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all min-h-[100px] resize-none"
        placeholder="향미, 바디감, 산미 등 느꼈던 경험을 자유롭게 적어주세요."
      ></textarea>
    </div>

    <div class="bg-stone-50 p-4 rounded-xl border border-stone-100">
      <div class="flex justify-between items-end mb-3">
        <label for="finalGrade" class="font-semibold text-stone-700">종합 만족도</label>
        <div class="flex items-baseline gap-1">
          <span class="text-2xl font-bold text-orange-500">{record.score}</span>
          <span class="text-stone-400">/ 5.0</span>
        </div>
      </div>

      <input
        type="range"
        bind:value={record.score}
        min="0"
        max="5"
        step="0.5"
        class="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
      />

      <p class="text-center mt-2 text-xs text-stone-500 font-medium">
        {scoreFeedback}
      </p>
    </div>
  </div>
</div>

<style>
  /* Range input 스타일 최적화 (필요시) */
  input[type='range']::-webkit-slider-runnable-track {
    border-radius: 8px;
  }
</style>
