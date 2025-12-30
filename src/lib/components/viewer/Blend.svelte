<script lang="ts">
  import DoughnutChart from '$lib/components/chart/DoughnutChart.svelte';
  import type { BlendInfo } from '$lib/types';
  import type { ChartData, ChartOptions } from 'chart.js';

  export let blend: BlendInfo;

  // 1. 차트 데이터 설정
  let blendData: ChartData<'doughnut'>;
  $: {
    blendData = {
      labels: blend.beans.map((v) => v.name || '이름 미지정'),
      datasets: [
        {
          label: '비율 (%)',
          data: blend.beans.map((v) => v.ratio),
          backgroundColor: blend.beans.map((v) => v.color),
          borderWidth: 2,
          borderColor: '#ffffff', // 조각 사이 흰색 선으로 구분
          hoverOffset: 6 // 삐져나가지 않도록 적당한 수치로 조절
        }
      ]
    };
  }

  // 2. 삐져나감 방지를 위한 차트 옵션
  const chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 15 // 호버 시 확장될 공간 확보 (이게 중요!)
    },
    plugins: {
      legend: { display: false }, // 차트 위 기본 범례는 끄고, 아래 커스텀 범례 사용
      tooltip: {
        backgroundColor: 'rgba(28, 25, 23, 0.9)',
        padding: 10,
        cornerRadius: 8
      }
    },
    cutout: '50%' // 도넛 두께
  };
</script>

<section
  id="blend-info"
  class="w-full bg-white rounded-2xl p-6 shadow-sm border border-stone-200 flex flex-col"
>
  <div class="mb-6">
    <h3 class="font-bold text-lg text-stone-800 flex items-center gap-2">
      <span class="w-1 h-5 bg-amber-600 rounded-full"></span>
      블렌드 구성
    </h3>
  </div>

  <div class="flex-1 min-h-[220px] w-full relative">
    <DoughnutChart data={blendData} options={chartOptions} />
  </div>

  <div class="legend-container mt-6 space-y-2.5 border-t border-stone-50 pt-5">
    {#each blend.beans as bean (bean.name)}
      <div class="flex items-center justify-between group">
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <div
            class="w-3 h-3 rounded-full shadow-inner"
            style="background-color: {bean.color};"
          ></div>
          <span class="text-sm font-medium text-stone-600 truncate flex-1">
            {bean.name || '이름 미지정'}
          </span>
        </div>
        <span
          class="text-xs font-mono font-bold text-stone-400 group-hover:text-amber-600 transition-colors"
        >
          {bean.ratio || 0}%
        </span>
      </div>
    {/each}

    {#if blend.beans.length === 0}
      <p class="text-center text-xs text-stone-400 py-2">원두 정보를 입력해주세요.</p>
    {/if}
  </div>
</section>
