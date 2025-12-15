<script lang="ts">
    import {
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
        Chart,
        DoughnutController,
        type ChartData,
        type ChartOptions
    } from 'chart.js';
    import {onDestroy, onMount} from "svelte";

    Chart.register(Tooltip, Legend, ArcElement, CategoryScale, DoughnutController);

    let canvasElement: HTMLCanvasElement; // <canvas> 요소 참조
    let chartInstance: Chart<'doughnut'>
    export let data: ChartData<'doughnut'>
    export let options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false, // 컨테이너 크기에 맞춰 조정되도록 허용
        cutout: '50%', // 도넛 모양을 결정하는 핵심 옵션
        plugins: {
            legend: {
                align: 'start',
                position: 'bottom' as const,
            },
        },
    };

    function chartAction(canvas: HTMLCanvasElement) {
        canvasElement = canvas;
        return {};
    }

    onMount(() => {
        if (canvasElement) {
            chartInstance = new Chart(canvasElement, {
                type: 'doughnut',
                data: data,
                options: options,
            });
        }
    });

    $: {
        if (chartInstance) {
            chartInstance.data = data;
            chartInstance.options = options;
            chartInstance.update();
        }
    }

    onDestroy(() => {
        if (chartInstance) {
            chartInstance.destroy();
        }
    });
</script>

<div style="position: relative;">
    <canvas use:chartAction></canvas>
</div>