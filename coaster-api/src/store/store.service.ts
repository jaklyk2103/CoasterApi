import { Injectable } from '@nestjs/common';

type UpdateStorePayload = {
  data: any;
};

@Injectable()
export class StoreService {
  async updateStore(updateStorePayload: UpdateStorePayload): Promise<void> {
    return;
  }
}
