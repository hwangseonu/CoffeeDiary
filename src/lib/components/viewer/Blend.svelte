<script lang="ts">
    import DoughnutChart from "$lib/components/DoughnutChart.svelte";
    import type {BlendInfo} from "$lib/types";
    import type {ChartData} from "chart.js";

    export let blend: BlendInfo

    let blendData: ChartData<'doughnut'>
    $: {
        blendData = {
            labels: blend.beans.map((v) => v.name),
            datasets: [
                {
                    label: '비율',
                    data: blend.beans.map((v) => v.ratio),
                    backgroundColor: blend.beans.map((v) => v.color),
                    hoverOffset: 4
                },
            ],
        }
    }
</script>

<section id="blend-info" class="bg-white rounded-xl p-6 shadow-md border border-stone-100">
    <div class="mb-4">
        <h3 class="font-bold text-lg text-stone-800 flex items-center gap-2">
            <span class="w-1 h-5 bg-amber-600 rounded-full"></span>
            블렌드 구성
        </h3>
    </div>

    <div class="chart-container">
        <DoughnutChart data={blendData}/>
    </div>
</section>