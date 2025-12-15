<script lang="ts">
    import type {CoffeeRecord} from "$lib/types";

    export let record: CoffeeRecord
</script>

<section class="bg-white rounded-2xl p-8 shadow-md border border-stone-100">
    <div class="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>

    <div class="relative z-10 text-center md:text-left">
        <span id="display-date" class="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold mb-4 tracking-wider">{record.date.toLocaleDateString()}</span>
        <h2 id="display-blend-name" class="serif-font text-4xl md:text-5xl font-bold text-stone-900 mb-2">{record.title}</h2>
        <p id="display-roast-level" class="text-stone-500 text-lg mb-6">{record.blend.roastLevel}</p>
    </div>
</section>