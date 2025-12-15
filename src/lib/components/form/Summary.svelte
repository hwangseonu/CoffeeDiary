<script lang="ts">
    import DateInput from "$lib/components/DateInput.svelte";
    import type {CoffeeRecord} from "$lib/types";

    export let record: CoffeeRecord
</script>

<div class="bg-white rounded-xl p-5 card-shadow border border-stone-100">
    <h3 class="font-bold text-lg text-stone-800 mb-4 flex items-center gap-2">
        <span class="w-1 h-5 bg-stone-400 rounded-full"></span>
        기록 요약 및 총평
    </h3>
    <div class="space-y-4 text-sm">
        <div class="grid grid-cols-2 gap-2">
            <label class="block">제목 (블렌드/이름): <input bind:value={record.title} type="text" id="blendName" class="w-full p-2 border border-stone-300 rounded-md" placeholder="블렌드 이름이나 지금 느낀 기분을 표현해보세요." required></label>
            <label class="block">날짜: <DateInput bind:date={record.date} /></label>
        </div>
        <label class="block">총평/설명:
            <textarea bind:value={record.description} class="w-full p-2 border border-stone-300 rounded-md" rows="3" placeholder="오늘의 커피는 어땠나요? 자유롭게 생각을 작성해주세요."></textarea>
        </label>
        <label class="block">최종 점수/등급 (0~5):
            <input bind:value={record.score} type="number" id="finalGrade" min="0" max="5" step="0.5" class="w-full p-2 border border-stone-300 rounded-md" placeholder="4.5">
        </label>
    </div>
</div>