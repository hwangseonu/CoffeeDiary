<script lang="ts">
    import {type BlendInfo} from "../types.ts"
    import DateInput from "$lib/components/DateInput.svelte";

    export let blend: BlendInfo

    function addBlendButton() {
        blend.beans = [...blend.beans, {
            name: "",
            ratio: 0,
            color: ""
        }]
    }

    function removeBlendButton(index: number) {
        blend.beans = [
            ...blend.beans.slice(0, index), // 시작부터 제거할 인덱스 '전'까지
            ...blend.beans.slice(index + 1) // 제거할 인덱스 '다음'부터 끝까지
        ]
    }
</script>

<div class="w-full bg-white rounded-xl p-5 shadow-md border border-stone-100">
    <h3 class="font-bold text-lg text-stone-800 mb-4 flex items-center gap-2">
        <span class="w-1 h-5 bg-stone-600 rounded-full"></span>
        블렌드 정보
    </h3>
    <form id="input-form" class="space-y-6">
        <label class="block">블렌드/이름
            <input type="text" id="blendName" class="w-full p-2 border border-stone-300 rounded-md"
                   bind:value={blend.name}
                   required>
        </label>
        <label class="block">로스팅 날짜
            <DateInput bind:date={blend.roastDate} />
        </label>
        <label class="block">로스팅 레벨
            <input type="text" id="roastLevel"
                   class="w-full p-2 border border-stone-300 rounded-md"
                   placeholder="Light (#88)">
        </label>
        <div class="pt-4 border-t border-stone-100">
            <p class="font-medium mb-2 text-stone-700">블렌드 구성 [원두명 / 비율(%)]</p>
            <div id="blend-inputs-container" class="space-y-2 max-h-72 overflow-y-auto">
                {#each blend.beans as bean, i}
                    <div class="flex gap-2">
                        <input type="text" class="blend-name w-5/6 p-2 border border-stone-300 rounded-md text-xs"
                               placeholder="원두 이름 (예: Guatemala Geisha)"
                               bind:value={bean.name}>
                        <input type="number" min="0" max="100" step="1"
                               class="blend-ratio w-1/5 p-2 border border-stone-300 rounded-md text-xs text-right"
                               placeholder="비율 (%)"
                               bind:value={bean.ratio}>
                        <button type="button"
                                on:click={() => removeBlendButton(i)}
                                class="remove-blend-btn w-1/12 p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors text-xs flex justify-center items-center h-full">
                            -
                        </button>
                    </div>
                {/each}
            </div>
            <button type="button" on:click={addBlendButton}
                    class="mt-2 w-full p-2 bg-stone-100 text-stone-600 rounded-md hover:bg-stone-200 transition-colors text-sm">
                + 원두 추가
            </button>
        </div>
    </form>
</div>