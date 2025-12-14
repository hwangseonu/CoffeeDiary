<script lang="ts">
    import {getContrastTextColor} from "$lib/utils"
    import type {NoteInfo} from "$lib/types";

    export let notes: NoteInfo
    let noteInputString: string = notes.notes.join(",")

    $: {
        // noteInputString -> notes 로직
        notes.notes = noteInputString
            .split(',')
            .map(note => note.trim())
            .filter(note => note.length > 0);
    }

    function addWellKnownNote(note: string) {
        notes.notes.push(note)
        noteInputString = notes.notes.join(', ');
    }

    const wellKnown = [
        // 붉은색/주황색 계열: 과일 (Fruity)
        {name: '딸기', color: '#ff6961'}, // 밝은 빨강
        {name: '블루베리', color: '#597fb1'}, // 파란색 계열
        {name: '오렌지', color: '#ff8c00'},
        {name: '복숭아', color: '#ffb347'},
        {name: '레몬', color: '#ffd700'}, // 노란색 계열

        // 갈색/주황색 계열: 견과류/코코아/캐러멜 (Nutty/Cocoa/Sweet)
        {name: '다크 초콜릿', color: '#5c4033'}, // 진한 갈색
        {name: '카라멜', color: '#a0522d'}, // 시에나 (Sienna)
        {name: '코코아', color: '#964b00'}, // 갈색
        {name: '아몬드', color: '#bbaa92'}, // 밝은 갈색
        {name: '꿀', color: '#ffc300'},
        {name: '바닐라', color: '#fcf8e3'}, // 밝은 크림색

        // 녹색 계열: 채소/허브 (Vegetal/Herbal)
        {name: '녹차', color: '#8fbc8f'}, // 연한 녹색
        {name: '풀 냄새', color: '#556b2f'}, // 올리브색
        {name: '허브', color: '#6b8e23'},

        // 자주색 계열: 꽃 (Floral)
        {name: '재스민', color: '#dda0dd'}, // 연한 보라
        {name: '장미', color: '#ff69b4'}, // 핫 핑크
        {name: '라벤더', color: '#b57edc'},

        // 어두운 계열: 로스팅/향신료 (Roast/Spicy)
        {name: '스모키', color: '#36454f'}, // 차콜색
        {name: '계피', color: '#d2691e'}, // 초콜릿색
        {name: '후추', color: '#000000'}, // 검은색

        // 기타
        {name: '흙', color: '#8b4513'}, // 안장색 (Saddle Brown)
    ]

    function getTextColor(noteColor: string): string {
        return getContrastTextColor(noteColor);
    }
</script>

<div class="w-full max-w-full bg-white rounded-xl shadow-md p-5">
    <h3 class="font-bold text-lg text-stone-800 mb-4 flex items-center gap-2">
        <span class="w-1 h-5 bg-stone-600 rounded-full"></span>
        테이스팅 노트
    </h3>
    <label class="block">노트 (쉼표 구분):
        <input bind:value={noteInputString} type="text" id="notes"
               class="w-full p-2 border border-stone-300 rounded-md"
               placeholder="Jasmine, Lemongrass, Syrup"></label>
    <div class="mt-2">
        <div id="quick-notes-container" class="flex flex-wrap gap-2">
            {#each wellKnown as note}
                <button type="button" on:click={() => addWellKnownNote(note.name)}
                        class="note-quick-add rounded-md text-xs px-3 py-2 shrink-0 cursor-pointer"
                        style={`background-color: ${note.color}; color: ${getTextColor(note.color)};`}
                >
                    {note.name}
                </button>
            {/each}
        </div>
    </div>
</div>

<style>
    .note-quick-add {
        transition: all 0.2s ease-in-out;
    }

    .note-quick-add:hover {
        filter: brightness(90%);
    }
</style>