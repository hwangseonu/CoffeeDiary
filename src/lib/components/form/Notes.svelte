<script lang="ts">
    import {dndzone, type DndEvent} from 'svelte-dnd-action';
    import {flip} from 'svelte/animate';
    import {getContrastTextColor, wellKnownNotes} from "$lib/utils"
    import type {NoteInfo} from "$lib/types";

    export let notes: NoteInfo[]

    let offsetId = 100;

    let customNote: NoteInfo = {
        id: offsetId,
        text: "",
        color: "#ff7d3b"
    }

    $: gradientString = notes.length > 0
        ? notes.map(v => v.color).join(', ')
        : '#cccccc';

    function addNote(note: NoteInfo) {
        if (!notes.some((e: NoteInfo) => e.id === note.id)) {
            notes = [...notes, note];
        }
    }

    function removeNote(index: number) {
        notes = [...notes.slice(0, index), ...notes.slice(index + 1)];
    }

    function addCustomNote() {
        addNote(customNote);
        customNote = {
            id: ++offsetId,
            text: "",
            color: "#ff7d3b"
        }
    }

    function handleSort(e: CustomEvent<DndEvent<NoteInfo>>) {
        notes = e.detail.items;
    }
</script>

<div class="w-full max-w-full bg-white rounded-xl shadow-md p-5">
    <h3 class="font-bold text-lg text-stone-800 mb-4 flex items-center gap-2">
        <span class="w-1 h-5 bg-stone-600 rounded-full"></span>
        테이스팅 노트
    </h3>
    <p class="text-md font-semibold text-gray-700 mb-3 flex items-center">
        <i class="fa-solid fa-eye-dropper"></i>
        이번 잔에서 느낀 노트와 색을 입력해주세요.
    </p>

    <div class="p-4 bg-gray-50 rounded-xl shadow-2xl mx-auto max-w-lg">
        <div id="custom-color-display"
             class="flex flex-row gap-3 w-full p-4 rounded-xl border border-gray-200 bg-white items-stretch">

            <div class="flex-shrink-0 flex items-center gap-3 ">
                <input bind:value={customNote.color} type="color" id="custom-color-picker"
                       class="w-12 h-12 p-1 rounded-full border border-gray-200 cursor-pointer bg-transparent border-none appearance-none [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-full">
            </div>

            <input bind:value={customNote.text} type="text" id="new-flavor-name" placeholder="저장할 노트 이름 (예: 플로럴, 트로피컬)"
                   class="w-full p-3 border border-gray-300 rounded-lg flex-grow shadow-inner
                      focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-150">

            <button on:click={addCustomNote} id="save-flavor-button"
                    class="flex-shrink-0 bg-amber-500 text-white px-5 py-3 rounded-lg font-bold
                       hover:bg-amber-600 transition duration-200 ease-in-out shadow-md
                       disabled:bg-gray-400 disabled:shadow-none disabled:cursor-not-allowed">
                노트 추가
            </button>

        </div>
    </div>

    <div class="mt-4 pt-4 border-t border-gray-200">
        <p class="text-md font-semibold text-gray-700 mb-3 flex items-center">
            <i class="fa-solid fa-palette"></i>
            자주 쓰는것들은 미리 준비해놨어요!
        </p>
        <div class="flex flex-col sm:flex-row gap-2">
            <div id="quick-notes-container" class="flex flex-wrap gap-2">
                {#each wellKnownNotes as note}
                    <button type="button" on:click={() => addNote(note)}
                            class="note-quick-add rounded-md text-xs px-3 py-2 shrink-0 cursor-pointer"
                            style={`background-color: ${note.color}; color: ${getContrastTextColor(note.color)};`}
                    >
                        {note.text}
                    </button>
                {/each}
            </div>
        </div>
        <p id="save-status" class="text-sm mt-2 text-gray-600 h-5"></p>
    </div>

    <div class="pt-4 border-t border-gray-200">
        <p class="text-md font-semibold text-gray-700 mb-3 flex items-center">
            <i class="fa-solid fa-palette"></i>
            노트들을 그라데이션으로 표현해봤어요!
        </p>

        <div class="pb-4">
            <div
                    class="flex flex-wrap gap-2 p-4 border-dashed border-2 border-gray-300 rounded-md"
                    use:dndzone={{ items: notes, flipDurationMs: 100, type: 'item' }}
                    on:consider={handleSort}
                    on:finalize={handleSort}
            >
                {#each notes as item, index (item.id)}
                    <button animate:flip={{ duration: 300 }}
                            class="dnd-item bg-amber-600 rounded-4xl px-6 py-2 border-none"
                            title={item.color}
                            on:click={() => removeNote(index)}
                            style={`background-color: ${item.color}; color: ${getContrastTextColor(item.color)};`}
                    >
                        {item.text}
                    </button>
                {/each}
            </div>
        </div>

        <div class="color-gradient-bar h-5 rounded-lg"
             style={`background-image: linear-gradient(to right, ${gradientString});`}>
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