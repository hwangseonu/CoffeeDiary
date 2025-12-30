<script lang="ts">
  import BlendForm from '$lib/components/form/Blend.svelte';
  import type { CoffeeRecord } from '$lib/types';
  import Recipe from '$lib/components/form/Recipe.svelte';
  import Sensuality from '$lib/components/form/Sensuality.svelte';
  import Notes from '$lib/components/form/Notes.svelte';
  import BlendViewer from '$lib/components/viewer/Blend.svelte';
  import Summary from '$lib/components/form/Summary.svelte';
  import { showAlert } from '$lib/stores/alert';
  import { goto } from '$app/navigation';

  let record: CoffeeRecord = {
    title: '',
    description: '',
    score: 0,
    date: new Date(),
    blend: {
      roastDate: new Date(),
      roastLevel: '',
      beans: []
    },
    recipe: {
      brewer: '',
      dose: 20,
      extract: 300,
      temperature: 92,
      dynamics: ''
    },
    notes: [],
    sensuality: {
      body: 0,
      clarity: 0,
      acidity: 0,
      sweetness: 0,
      aroma: 0,
      bitter: 0,
      aftertaste: 0,
      balance: 0
    }
  };

  async function save() {
    const response = await fetch('/api/coffee', {
      method: 'POST', // 일반 POST 메서드 사용
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record)
    });

    const result = await response.json();

    if (response.ok) {
      await showAlert({
        title: '저장 완료',
        message: '오늘의 커피 기록이 안전하게 저장되었습니다.',
        type: 'success'
      });

      goto(`/coffee?id=${result.id}`).then();
    } else {
      await showAlert({
        title: '저장 실패',
        message: '데이터 형식이 올바르지 않습니다.',
        type: 'error'
      });
    }
  }
</script>

<div class="flex justify-center w-full p-4">
  <div class="flex flex-col gap-4 w-full md:w-3/5">
    <Summary bind:record />
    <div class="w-full grid md:grid-cols-3 gap-4">
      <div class="col-span-1 md:col-span-2 w-full h-full">
        <BlendForm bind:blend={record.blend} />
      </div>
      <div class="col-span-1 w-full">
        <BlendViewer blend={record.blend} />
      </div>
    </div>
    <Recipe bind:recipe={record.recipe} />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-2 md:col-span-1 w-full h-full">
        <Notes bind:notes={record.notes} />
      </div>
      <div class="flex flex-col col-span-2 md:col-span-1 w-full h-full gap-4">
        <Sensuality bind:sensuality={record.sensuality} />
        <button
          on:click={save}
          id="save-log-btn"
          class="w-full h-18 px-4 py-2 rounded-lg shadow-md bg-amber-500 hover:bg-amber-600 text-xl text-white font-medium transition-colors cursor-pointer"
        >
          저장하기
        </button>
      </div>
    </div>
  </div>
</div>
