import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ url, fetch }) => {
  const id = url.searchParams.get('id');

  if (!id) throw error(400, '조회할 기록의 ID가 필요합니다.');

  const response = await fetch(`/api/coffee?id=${id}`);

  if (!response.ok) {
    throw error(response.status, '기록을 찾을 수 없거나 불러오는데 실패했습니다.');
  }

  const record = await response.json();
  return {
    record: {
      ...record,
      date: new Date(record.date),
      blend: {
        ...record.blend,
        roastDate: new Date(record.blend.roastDate)
      }
    }
  };
};
