import { ENV } from '@/declares/env';
import { ListResponse } from '@/declares/models/common';
import axiosClient from '@/utils/api/axiosClient';

const authApi = {
  getAll(): Promise<ListResponse<>{
    const url = `${ENV.API_URL}/auth`;
    return axiosClient.get(url);
  },
};

export default authApi;
