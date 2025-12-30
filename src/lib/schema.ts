import { z } from 'zod';

export const CoffeeRecordSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요.'),
  description: z.string(),
  score: z.number().min(0).max(5),
  date: z.coerce.date(),

  blend: z.object({
    roastDate: z.coerce.date(),
    roastLevel: z.string(),
    beans: z.array(
      z.object({
        name: z.string().min(1, '원두 이름은 필수입니다.'),
        ratio: z.number().min(0).max(100),
        color: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
      })
    )
  }),

  recipe: z.object({
    brewer: z.string(),
    dose: z.number().nonnegative(),
    extract: z.number().nonnegative(),
    temperature: z.number().min(0).max(110),
    grinder: z.string().optional(),
    grindSize: z.number().optional(),
    dynamics: z.string()
  }),

  notes: z.array(
    z.object({
      id: z.number(),
      text: z.string().min(1),
      color: z.string()
    })
  ),

  sensuality: z
    .object({
      body: z.number().min(0).max(5),
      clarity: z.number().min(0).max(5),
      acidity: z.number().min(0).max(5),
      sweetness: z.number().min(0).max(5),
      aroma: z.number().min(0).max(5),
      bitter: z.number().min(0).max(5),
      aftertaste: z.number().min(0).max(5),
      balance: z.number().min(0).max(5)
    })
    .catchall(z.number())
});
