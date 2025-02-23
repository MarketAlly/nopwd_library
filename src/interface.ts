import AxiosInstance from 'axios'
import { Ref } from 'vue';
const isLocalhost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);

const apiClient = AxiosInstance.create({
  baseURL: 'https://localhost:8080/',
  withCredentials: false,
});

let developURL: string | undefined = 'https://localhost/';
let productionURL: string | undefined = '';

const serviceCall = {
  apiClient: apiClient,
  setBaseURL: function(devURL: string | undefined, prodURL: string | undefined) {
    if (isLocalhost) {  
      this.apiClient.defaults.baseURL = devURL || developURL;
    } else {
      this.apiClient.defaults.baseURL = prodURL || productionURL;
    }
    developURL = devURL;
    productionURL = prodURL;
  },
  getBaseURL: function() {
      return this.apiClient.defaults.baseURL;
  },
};

export interface INoPWDStore {
  auth: Ref<number>;
  success: Ref<boolean>;
  code: Ref<number>;
  mounted: Ref<boolean>;
  IDLogin: Ref<string>;
  QRCode: Ref<string>;
  Message: Ref<string>;
  user_data: Ref<string>;
  IsDark: Ref<boolean>;
  is_error: Ref<boolean>;
  reset: () => Promise<void>;
  setMounted: (value: boolean) => void;
  loginQRCode: () => Promise<number | undefined>;
  checkAccess: () => Promise<void>;
  checkQRLogin: () => Promise<number | undefined>;
  logout: () => Promise<void>;
  readMessage: () => string;
  config: () => {
    headers: {
      Accept: string;
      'X-LoginId': string;
      'Content-Type': string;
    };
  };
  setUrls: (request: string, verify: string, confirm: string, logout: string) => void;
  setRoutes: (app: string, login: string, eCheck: boolean) => void;
  setBase: (dev: string, prod: string, region: number, error: boolean, interval : number, access : number) => void;
}

export default serviceCall

export interface IValue {
  id: string | null
  code: string | null
  value: string | null
  subid: string | null
  userid: string | null
  count: number | null
  page: number | null
  fromdate: Date | null
}

export interface IStatus {
    id: string;
    phon3: string;
    country: string;
    logout: boolean;
  }

  export interface INoPWD {
      id: string;
      name: string;
      email: string;
      avatar: string;
      isonline: boolean;
    }
  
  export interface IResponse {
    message: string;
    success: boolean;
    code: number;
    id: string;
  }
  
  export interface apiResponse {
    message: string;
    success: boolean;
    code: number;
    page: number;
    totalpages: number;
    data: boolean;
  }
  
  export interface apiResponses<T> {
    message: string;
    success: boolean;
    code: number;
    page: number;
    totalpages: number;
    data: T;
  }
  