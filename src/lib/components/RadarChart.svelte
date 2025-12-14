<script lang="ts">
    import {
        Tooltip,
        RadialLinearScale,
        Chart,
        RadarController,
        type ChartData,
        type ChartOptions, PointElement, LineElement, Filler
    } from 'chart.js';
    import {onDestroy, onMount} from "svelte";

    Chart.register(Tooltip, Filler, RadarController, RadialLinearScale, PointElement, LineElement);

    let canvasElement: HTMLCanvasElement; // <canvas> 요소 참조
    let chartInstance: Chart<'radar'>
    export let data: ChartData<'radar'>
    export let options: ChartOptions<'radar'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: '#e5e7eb' },
                grid: { color: '#e5e7eb' },
                pointLabels: {
                    font: { family: "'Noto Sans KR', sans-serif", size: 11 },
                    color: '#57534e'
                },
                suggestedMin: 0,
                suggestedMax: 5,
                ticks: { stepSize: 1, backdropColor: 'transparent', color: '#a8a29e' }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#44403c',
                padding: 10,
                callbacks: { label: (context) => ` Score: ${context.raw} / 5.0` }
            }
        }
    };
    function chartAction(canvas: HTMLCanvasElement) {
        canvasElement = canvas;
        return {}; // action은 객체를 반환해야 합니다.
    }

    onMount(() => {
        // 캔버스 요소가 준비되었는지 확인
        if (canvasElement) {
            chartInstance = new Chart(canvasElement, {
                type: 'radar',
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