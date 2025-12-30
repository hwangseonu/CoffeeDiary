import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  // 모든 기록을 가져오는 API 호출 (최근 순 정렬은 서버 서비스에서 처리한다고 가정)
  const response = await fetch('/api/coffee');
  const records = await response.json();

  return { records };
};
