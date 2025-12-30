import { error, json, type RequestHandler } from '@sveltejs/kit';
import { coffeeRecordService } from '$lib/server/database';
import { CoffeeRecordSchema } from '$lib/schema';
import { z } from 'zod';

export const GET: RequestHandler = async ({ url }) => {
  const idParam = url.searchParams.get('id');

  // 1. ID가 파라미터로 넘어온 경우: 상세 조회
  if (idParam) {
    const id = Number(idParam);

    if (isNaN(id)) {
      throw error(400, '유효하지 않은 ID 형식입니다.');
    }

    const record = await coffeeRecordService.findById(id);

    if (!record) {
      throw error(404, '해당 기록을 찾을 수 없습니다.');
    }

    return json(record);
  }

  // 2. ID가 없는 경우: 전체 목록 조회 (대시보드용)
  const allRecords = await coffeeRecordService.findAll();

  // 최근 기록이 먼저 오도록 정렬 (서비스에서 처리하지 않을 경우 여기서 처리)
  const sortedRecords = allRecords.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return json(sortedRecords);
};

// api/coffee/+server.ts
export const POST: RequestHandler = async ({ request }) => {
  const rawData = await request.json();
  const result = CoffeeRecordSchema.safeParse(rawData);

  if (!result.success) {
    return json(
      {
        success: false,
        message: '입력값이 유효하지 않습니다.',
        errors: z.treeifyError(result.error)
      },
      { status: 400 }
    );
  }

  const cleanData = result.data;
  const saved = await coffeeRecordService.save(cleanData);

  return json(saved, { status: 201 });
};
