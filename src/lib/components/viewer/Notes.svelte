<script lang="ts">
    import type {NoteInfo} from "$lib/types";
    import {getContrastTextColor} from "$lib/utils";

    export let notes: NoteInfo[];

    $: gradientString = notes.length > 0
        ? notes.map(v => v.color).join(', ')
        : '#cccccc';
</script>

<div class="bg-white rounded-xl p-6 shadow-md border border-stone-100">
    <div class="mb-4">
        <h3 class="font-bold text-lg text-stone-800 flex items-center gap-2">
            <span class="w-1 h-5 bg-rose-400 rounded-full"></span>
            테이스팅 노트
        </h3>
    </div>

    <div id="notes-container" class="flex flex-wrap gap-2">
        {#each notes as note}
            <div class="bg-amber-600 rounded-4xl px-4 py-2"
                 style={`background: ${note.color}; color: ${getContrastTextColor(note.color)};`}>
            {note.text}</div>
        {/each}
    </div>

    <div class="pt-6">
        <div class="color-gradient-bar h-5 rounded-lg"
             style={`background-image: linear-gradient(to right, ${gradientString});`}>
        </div>
    </div>

</div>