import { ENV } from "@/declares/env";
import fetch from "../utils/api/axiosClient";
const router = {
  home: `${ENV.API_URL}/home`,
};

class HomeService {
  /**
   *
   * @param params
   * @returns
   */

  static getReasonReport() {
    return fetch.get(router.home);
  }

}

export default HomeService;
