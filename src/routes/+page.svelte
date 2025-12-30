<script lang="ts">
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';

  let { data }: { data: PageData } = $props();

  // 최근 5개만 대시보드에 표시
  const recentLogs = $derived(data.records.slice(0, 5));
  // const totalCount = $derived(data.records.length);
</script>

<main class="main flex flex-col w-full max-w-7xl mx-auto p-5 gap-5">
  <div
    class="bg-white rounded-2xl p-8 shadow-md border border-stone-100 text-center relative overflow-hidden"
  >
    <div class="absolute top-0 left-0 w-full h-1/2 bg-amber-50 opacity-10"></div>
    <div class="relative z-10">
      <p class="text-2xl text-stone-700 serif-font mb-2">Welcome Back,</p>
      <h2 class="serif-font text-4xl md:text-5xl font-bold text-stone-900 mb-4">
        당신의 커피 여정 기록
      </h2>
      <p class="text-stone-500 text-lg mb-6">
        새로운 추출 경험을 추가하거나 이전 기록들을 빠르게 확인해보세요.
      </p>
    </div>
  </div>

  <div class="bg-white rounded-xl p-6 shadow-md border border-stone-100">
    <div class="flex justify-between items-center mb-4 border-b border-stone-100 pb-3">
      <h3 class="font-bold text-xl text-stone-800 flex items-center gap-2">
        <span class="w-1 h-5 bg-amber-600 rounded-full"></span>
        최근 추출 기록
      </h3>
      <p class="text-sm text-stone-500">
        총 <span id="dashboard-total-logs" class="font-bold">0</span>개 기록
      </p>
    </div>

    <div id="dashboard-log-list-container" class="space-y-3 min-h-1.5">
      {#if recentLogs.length > 0}
        {#each recentLogs as log (log.id)}
          <div
            role="button"
            tabindex="0"
            onkeydown={() => goto(`/coffee?id=${log.id}`)}
            onclick={() => goto(`/coffee?id=${log.id}`)}
            class="w-full flex justify-between items-center p-4 rounded-xl border border-stone-50 hover:border-amber-200 hover:bg-amber-50/30 transition-all group text-left"
          >
            <div class="flex flex-col gap-1">
              <span class="text-xs text-stone-400">{new Date(log.date).toLocaleDateString()}</span>
              <span class="font-bold text-stone-800 group-hover:text-amber-800">{log.title}</span>
              <div class="flex gap-2 items-center">
                <span class="text-xs bg-stone-100 px-2 py-0.5 rounded text-stone-500"
                  >{log.recipe.brewer}</span
                >
                <span class="text-xs text-amber-600 font-medium">★ {log.score}</span>
              </div>
            </div>
            <i
              class="fa-solid fa-chevron-right text-stone-300 group-hover:text-amber-500 transition-colors"
            ></i>
          </div>
        {/each}
      {:else}
        <div class="py-10 text-center text-stone-400">
          <p>아직 기록이 없습니다.</p>
          <p class="text-sm">첫 번째 커피를 기록해보세요!</p>
        </div>
      {/if}
    </div>

    <div class="mt-4 text-center border-t border-stone-100 pt-4">
      <button
        id="dashboard-more-logs-btn"
        class="text-sm text-stone-600 hover:text-amber-700 transition-colors font-medium cursor-pointer"
      >
        더보기 (전체 기록 보기)
      </button>
    </div>
  </div>

  <a href="/new">
    <div
      class="bg-amber-500 rounded-xl p-8 shadow-md text-white flex flex-col justify-center items-center cursor-pointer transition-colors hover:bg-amber-600 h-full min-h-[12rem]"
      id="dashboard-new-log-btn"
    >
      <i class="fa-solid fa-plus text-4xl"></i>
      <p class="font-bold text-xl">새로운 기록 시작</p>
      <p class="text-sm text-amber-100 mt-1">오늘의 커피를 기록하세요!</p>
    </div>
  </a>
</main>
