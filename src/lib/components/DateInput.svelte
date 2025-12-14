<script lang="ts">
    export let date = new Date()

    let internal: string

    const input = (x: Date) => (internal = dateToString(x))
    const output = (x: string) => (date = stringToDate(x))

    $: input(date)
    $: output(internal)

    function stringToDate(date: string): Date {
        return new Date(`${date}T00:00:00`);
    }

    function dateToString(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
</script>

<input type="date" bind:value={internal} class="w-full p-2 border border-stone-300 rounded-md"/>
