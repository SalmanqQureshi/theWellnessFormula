import {Server} from '../../config';
import axios, {AxiosRequestConfig, Method} from 'axios';
import {getFormData} from '../getFormData';
import {getCryptoToken} from '../getCryptoToken';
import {showToast} from '../Toast';
type PROJECT_ENDPOINTS = string;

const instance = axios.create({
  baseURL: Server.baseUrl,
  timeout: 1000,
});
export const AuthToken = {
  token: getCryptoToken(),
  userToken: '',
};
instance.interceptors.request.use(
  function (config) {
    config.headers.set('token', AuthToken.token);
    //@ts-ignore
    if (!config.withOutAuth) {
      config.headers.set('Authorization', AuthToken.userToken);
    }
    console.log({request: config});

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

const NullCallback = (arg: any) => null;

class ApiService {
  private config: AxiosRequestConfig = {};
  private shouldShowToastOnResponse = true;
  private onResponseSuccess = NullCallback;
  private onResponseFailure = NullCallback;
  private onRequestCB = NullCallback;
  private onResponseCB = NullCallback;
  constructor(endpoint: PROJECT_ENDPOINTS, method: Method) {
    this.config = {
      url: endpoint,
      method,
    };
  }
  withLoader() {
    return this;
  }
  withOutAuth() {
    //@ts-ignore
    this.config.withOutAuth = true;
    return this;
  }
  withOutToast() {
    this.shouldShowToastOnResponse = false;
    return this;
  }
  withSlug(slug: String | Number) {
    this.config.url = this.config.url + '/' + slug;
    return this;
  }
  withParams(params = Object) {
    this.config.params = {...this.config.params, ...params};
    return this;
  }
  withBody(JsonObject: {[key: string]: any}) {
    this.config.data = JsonObject;
    return this;
  }
  withFormData(JsonObject: {[key: string]: any}, RemoveKeys: string[] = []) {
    this.config.data = getFormData(JsonObject, RemoveKeys);
    return this;
  }
  withReducer() {
    throw new Error('withReducer has not been Implemented!!!');
    return this;
  }
  onRequest(cb = NullCallback) {
    this.onRequestCB = cb;
    return this;
  }
  onSuccess(cb = NullCallback) {
    this.onResponseSuccess = cb;
    return this;
  }
  onFailure(cb = NullCallback) {
    this.onResponseFailure = cb;
    return this;
  }
  onResponse(cb = NullCallback) {
    this.onResponseCB = cb;
    return this;
  }
  onUploadProgress(cb = NullCallback) {
    this.config.onUploadProgress = cb;
    return this;
  }
  onDownloadProgress(cb = NullCallback) {
    this.config.onDownloadProgress = cb;
    return this;
  }
  async call() {
    try {
      await this.onRequestCB(this.config);
      const response = await instance.request(this.config);
      this.onResponseSuccess(response.data);
      if (this.shouldShowToastOnResponse) {
        showToast({
          message: response.response.data.message,
          type: 'danger',
        });
      }
    } catch (error) {
      if (this.shouldShowToastOnResponse) {
        showToast({
          message: error.response.data.message,
          type: 'danger',
        });
      }
      this.onResponseFailure(error);
    } finally {
      this.onResponseCB();
    }
  }
}

export type ApiType = ApiService;

export const request = (endpoint: PROJECT_ENDPOINTS, method: Method) =>
  new ApiService(endpoint, method);
