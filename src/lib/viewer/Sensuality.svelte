<script lang="ts">
    import RadarChart from "$lib/components/RadarChart.svelte";
    import type {ChartData} from "chart.js";
    import type {SensualityInfo} from "$lib/types";

    export let sensuality: SensualityInfo
    let sensualityData: ChartData<'radar'>

    $: {
        sensualityData = {
            labels: Object.keys(sensuality),
            datasets: [{
                label: 'Cup Score',
                data: Object.values(sensuality),
                fill: true,
                backgroundColor: 'rgba(217, 119, 6, 0.2)',
                borderColor: '#D97706',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#D97706',
                pointHoverBackgroundColor: '#D97706',
                pointHoverBorderColor: '#fff'
            }]
        }
    }
</script>

<section id="quality-section" class="bg-white rounded-xl p-6 shadow-md border border-stone-100">
    <div class="mb-4">
        <h3 class="font-bold text-lg text-stone-800 flex items-center gap-2">
            <span class="w-1 h-5 bg-green-600 rounded-full"></span>
            컵 품질 (관능 평가)
        </h3>
    </div>



    <div class="chart-container" style="height: 300px; max-width: none;">
        <RadarChart data={sensualityData}/>
    </div>

    <div class="grid grid-cols-2 gap-2 mt-4 text-xs text-center text-stone-500">

    </div>
</section>
