import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

type UpdateStorePayload = {
  id: string;
  data: {
    [key: string]: any;
  };
};
@Injectable()
export class StoreService {
  async updateStore(updateStorePayload: UpdateStorePayload): Promise<void> {
    const { id, data } = updateStorePayload;
    const client = createClient({
      url: 'redis://localhost:6379',
    });

    await client.hSet(id, data);
  }
}
