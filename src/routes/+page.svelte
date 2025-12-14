<script lang="ts">

</script>

<main class="main flex flex-col w-full max-w-7xl mx-auto p-5 gap-5">
    <div class="bg-white rounded-2xl p-8 shadow-md border border-stone-100 text-center relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-amber-50 opacity-10"></div>
        <div class="relative z-10">
            <p class="text-2xl text-stone-700 serif-font mb-2">Welcome Back,</p>
            <h2 class="serif-font text-4xl md:text-5xl font-bold text-stone-900 mb-4">당신의 커피 여정 기록</h2>
            <p class="text-stone-500 text-lg mb-6">새로운 추출 경험을 추가하거나 이전 기록들을 빠르게 확인해보세요.</p>
        </div>
    </div>

    <div class="bg-white rounded-xl p-6 shadow-md border border-stone-100">
        <div class="flex justify-between items-center mb-4 border-b border-stone-100 pb-3">
            <h3 class="font-bold text-xl text-stone-800 flex items-center gap-2">
                <span class="w-1 h-5 bg-amber-600 rounded-full"></span>
                최근 추출 기록
            </h3>
            <p class="text-sm text-stone-500">총 <span id="dashboard-total-logs" class="font-bold">0</span>개 기록</p>
        </div>

        <div id="dashboard-log-list-container" class="space-y-3 min-h-1.5">
            <!-- Recent logs will be dynamically inserted here -->
        </div>

        <div class="mt-4 text-center border-t border-stone-100 pt-4">
            <button id="dashboard-more-logs-btn"
                    class="text-sm text-stone-600 hover:text-amber-700 transition-colors font-medium cursor-pointer">
                더보기 (전체 기록 보기)
            </button>
        </div>
    </div>

    <a href="/new">
        <div class="bg-amber-500 rounded-xl p-8 shadow-md text-white flex flex-col justify-center items-center cursor-pointer transition-colors hover:bg-amber-600 h-full min-h-[12rem]"
             id="dashboard-new-log-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            <p class="font-bold text-xl">새로운 기록 시작</p>
            <p class="text-sm text-amber-100 mt-1">오늘의 커피를 기록하세요!</p>
        </div>
    </a>
</main>
