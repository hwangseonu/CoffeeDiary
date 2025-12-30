<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { alertStore, closeAlert } from '$lib/stores/alert';

  // Svelte 5에서는 dispatch 대신 런타임 콜백이나 상태 공유를 권장합니다.
  // 여기서는 전역 스토어인 closeAlert을 직접 사용하거나 props로 함수를 받습니다.
  interface Props {
    onClose?: () => void;
  }

  let { onClose }: Props = $props(); // Svelte 5 Runes 문법 (하위호환 유지)

  const handleClose = () => {
    closeAlert();
    if (onClose) onClose();
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if ($alertStore.open && e.key === 'Escape') handleClose();
  };

  const typeStyles = {
    success: 'bg-emerald-50 text-emerald-600 ring-emerald-500/20',
    error: 'bg-red-50 text-red-600 ring-red-500/20',
    info: 'bg-blue-50 text-blue-600 ring-blue-500/20'
  };

  const iconPaths = {
    success: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    error: 'm9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    info: 'm11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
  };
</script>

<svelte:window on:keydown={handleKeydown} />

{#if $alertStore.open}
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-[2px]"
    transition:fade={{ duration: 150 }}
  >
    <button
      type="button"
      class="absolute inset-0 w-full h-full cursor-default border-none bg-transparent"
      onclick={handleClose}
      aria-label="모달 닫기"
    ></button>

    <div
      class="relative bg-white w-full max-w-sm rounded-[2rem] p-8 shadow-2xl flex flex-col items-center text-center"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      transition:scale={{ duration: 200, start: 0.9 }}
    >
      <div
        class="w-20 h-20 rounded-full flex items-center justify-center ring-8 mb-6 {typeStyles[
          $alertStore.type
        ]}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d={iconPaths[$alertStore.type]} />
        </svg>
      </div>

      <h2 id="modal-title" class="text-2xl font-black text-stone-800 mb-3 tracking-tight">
        {$alertStore.title}
      </h2>

      <div class="text-stone-500 text-sm leading-relaxed mb-8 break-keep">
        {$alertStore.message}
      </div>

      <button
        type="button"
        onclick={handleClose}
        class="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all active:scale-[0.97]"
      >
        확인
      </button>
    </div>
  </div>
{/if}
