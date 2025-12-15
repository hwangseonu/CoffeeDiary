<script lang="ts">
    import {getContrastTextColor, wellKnownNotes} from "$lib/utils"
    import type {NoteInfo} from "$lib/types";
    import DragDropList, {type DropEvent, HorizontalDropZone, reorder} from "svelte-dnd-list";

    export let notes: NoteInfo
    let noteInputString: string = notes.notes.join(", ")

    let colorPicker = "#ff7d3b"

    $: {
        // noteInputString -> notes 로직
        notes.notes = noteInputString
            .split(',')
            .map(note => note.trim())
            .filter(note => note.length > 0);
    }

    $: gradientString = notes.colors.length > 0
        ? notes.colors.join(', ')
        : '#cccccc';

    function addNoteColor() {
        notes.colors = [...notes.colors, colorPicker];
    }

    function addWellKnownNote(note: { name: string, color: string }) {
        notes.notes.push(note.name)
        notes.colors = [...notes.colors, note.color];
        noteInputString = notes.notes.join(', ');
    }

    function removeColor(index: number) {
        notes.colors = [...notes.colors.slice(0, index), ...notes.colors.slice(index + 1)]
    }

    function onDrop({detail: {from, to}}: CustomEvent<DropEvent>) {
        if (!to || from === to) {
            return;
        }

        notes.colors = reorder(notes.colors, from.index, to.index);
    }

    function getTextColor(noteColor: string): string {
        return getContrastTextColor(noteColor);
    }
</script>

<div class="w-full max-w-full bg-white rounded-xl shadow-md p-5">
    <h3 class="font-bold text-lg text-stone-800 mb-4 flex items-center gap-2">
        <span class="w-1 h-5 bg-stone-600 rounded-full"></span>
        테이스팅 노트
    </h3>
    <label class="block"><i class="fa-solid fa-heart"></i>노트
        <input bind:value={noteInputString} type="text" id="notes"
               class="w-full p-2 border border-stone-300 rounded-md"
               placeholder="이번 잔에서 느낀 노트를 쉼표로 구분해서 입력해주세요. 자주 사용하는건 미리 준비해뒀어요!"></label>
    <div class="mt-2 pb-4">
        <div id="quick-notes-container" class="flex flex-wrap gap-2">
            {#each wellKnownNotes as note}
                <button type="button" on:click={() => addWellKnownNote(note)}
                        class="note-quick-add rounded-md text-xs px-3 py-2 shrink-0 cursor-pointer"
                        style={`background-color: ${note.color}; color: ${getTextColor(note.color)};`}
                >
                    {note.name}
                </button>
            {/each}
        </div>
    </div>
    <div class="pt-4 border-t border-stone-100">
        <div class="flex justify-between items-center">
            <p class="block "><i class="fa-solid fa-palette"></i>노트 색상</p>
        </div>
        <div class="color-bar-container w-full">
            <div class="colors pt-4 pb-4 flex gap-2">
                <DragDropList
                        id="example"
                        type={HorizontalDropZone}
                        itemSize={50}
                        itemCount={notes.colors.length}
                        on:drop={onDrop}
                        let:index

                >
                    <button class="m-1 rounded-4xl w-[44px] h-[44px]"
                            title={notes.colors[index]}
                            on:click={() => removeColor(index)}
                            style={`background-color: ${notes.colors[index]};`}>
                    </button>
                </DragDropList>
                <!--                <input placeholder="직접입력" />-->
            </div>

            <div class="color-gradient-bar h-5 rounded-lg"
                 style={`background-image: linear-gradient(to right, ${gradientString});`}>
            </div>

            <div class="mt-4">
                <p class="block "><i class="fa-solid fa-eye-dropper"></i>사용자 지정</p>
            </div>
            <div class="flex flex-row justify-center items-center gap-2">
                <input bind:value={colorPicker} type="color" class="w-full h-12"/>
                <button on:click={addNoteColor}
                        class="bg-amber-500 w-3/5 h-12 pr-2 pl-2 rounded-md text-amber-50">+</button>
            </div>
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