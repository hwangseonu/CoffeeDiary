import type { CoffeeRecord } from '$lib/types';

export type CoffeeRecordRow = CoffeeRecord & { id: number };

export const coffeeRecordStore: CoffeeRecordRow[] = [];

export const coffeeRecordService = {
  save: async (data: CoffeeRecord): Promise<CoffeeRecordRow> => {
    const id = Date.now();
    const recordWithId = { ...data, id };

    coffeeRecordStore.push(recordWithId);
    return recordWithId;
  },

  findAll: async (): Promise<CoffeeRecordRow[]> => {
    return [...coffeeRecordStore];
  },

  findById: async (id: number): Promise<CoffeeRecordRow> => {
    const record = coffeeRecordStore.find((record) => record.id === id);

    if (!record) {
      throw new Error(`CoffeeRecord not found with id ${id}`);
    }

    return record;
  }
};
