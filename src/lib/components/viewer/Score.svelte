<script lang="ts">
    export let score = 0;
    export let text = "";
</script>

<div class="bg-stone-800 rounded-xl p-6 shadow-md border border-stone-700 text-white flex flex-col justify-between relative overflow-hidden">
    <div class="absolute -right-4 -bottom-0 text-stone-700 opacity-20">
        <i class="fa-solid fa-power-off text-9xl"></i>
    </div>

    <div>
        <h3 class="font-bold text-lg text-stone-200">총점</h3>
        <div class="mt-4">
            <div class="flex items-end gap-2">
                <span id="summary-score" class="text-5xl font-bold font-serif">{score.toFixed(1)}</span>
                <span class="text-stone-400 text-sm mb-2">/ 5.0</span>
            </div>
            <p id="summary-score-label" class="text-stone-400 text-sm mt-1">다양한 요소를 종합하여 내린 평점입니다.</p>
        </div>
        <div class="mt-6 z-10">
            <p class="text-sm text-stone-300 leading-relaxed" id="summary-review-text">
                {text ? text : "총평이 입력되지 않았습니다."}
            </p>
        </div>
    </div>
</div>