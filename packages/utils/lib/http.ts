import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

/** 返回数据结果格式 */
export interface RequestResponseData<T> {
  /** 结果数据 */
  body: T;
  /** 结果信息 */
  msg: string;
  /** 结果代码：1-成功，其他-失败 */
  status: number;
  /** 请求响应时间 */
  time: number;
}

/** 返回数据基本格式 */
export interface RequestResponse<T> {
  /** 状态代码：200-成功 */
  status: number;
  /** 结果数据 */
  data: RequestResponseData<T>;
  /** 结果信息 */
  config: AxiosRequestConfig;
}

interface RequestInterceptors {
  /**
   * 请求拦截器
   * @param {AxiosRequestConfig} config 配置
   * @returns 配置
   */
  requestInterceptors?: (config: AxiosRequestConfig) => InternalAxiosRequestConfig;
  /** 请求拦截器错误处理 */
  requestInterceptorsCatch?: (err: any) => any;
  /** 响应拦截器 */
  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  /** 响应拦截器错误处理 */
  responseInterceptorsCatch?: (err: any) => any;
}

/** 可设置拦截器请求配置 */
interface RequestConfig extends AxiosRequestConfig {
  /** 拦截器 */
  interceptors?: RequestInterceptors;
  /** 是否跳过拦截器 */
  skipInterceptors?: boolean;
}

/** 请求类，封装拦截器，通用 GET、POST、PUT、DELETE 请求 */
class Request {
  // axios句柄
  private instance: AxiosInstance

  /** 拦截器 */
  private interceptors?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.setupInterceptors()
  }

  /** 设置拦截器 */
  private setupInterceptors() {
    // 请求拦截
    this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (this.interceptors && this.interceptors.requestInterceptors) {
        return this.interceptors.requestInterceptors(config)
      }
      return config
    }, this.interceptors?.requestInterceptorsCatch)
    // 响应拦截
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      if (this.interceptors && this.interceptors.responseInterceptors) {
        return this.interceptors.responseInterceptors(res)
      }
      return res?.data
    }, this.interceptors?.responseInterceptorsCatch)
  }

  /** 请求 */
  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors && config.interceptors.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance.request<any, T>(config).then(res => {
        if (config.interceptors && config.interceptors.responseInterceptors) {
          res = config.interceptors.responseInterceptors<T>(res)
        }
        resolve(res)
      }).catch(reject)
    })
  }

  /**
   * get请求
   * @param {string} url 请求地址
   * @param {RequestConfig} config 请求配置
   * @returns 结果
   */
  get<T = any>(url: string, config?: RequestConfig): Promise<RequestResponseData<T>> {
    return new Promise((resolve, reject) => {
      this.request<RequestResponse<T>>({ ...config, url, method: 'GET' }).then(res => resolve(res?.data)).catch(reject)
    })
  }

  /**
   * post请求
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {RequestConfig} config 请求配置
   * @returns 结果
   */
  post<T = any, D = any>(url: string, data?: D, config?: RequestConfig): Promise<RequestResponseData<T>> {
    return new Promise((resolve, reject) => {
      request.request<RequestResponse<T>>({ ...config, url, data, method: 'POST' }).then(res => resolve(res?.data)).catch(reject)
    })
  }

  /**
   * delete请求
   * @param {string} url 请求地址
   * @param {RequestConfig} config 请求配置
   * @returns 结果
   */
  delete<T = any>(url: string, config?: RequestConfig): Promise<RequestResponseData<T>> {
    return new Promise((resolve, reject) => {
      request.request<RequestResponse<T>>({ ...config, url, method: 'DELETE' }).then(res => resolve(res?.data)).catch(reject)
    })
  }

  /**
   * put请求
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {RequestConfig} config 请求配置
   * @returns 结果
   */
  put<T = any, D = any>(url: string, data?: D, config?: RequestConfig): Promise<RequestResponseData<T>> {
    return new Promise((resolve, reject) => {
      request.request<RequestResponse<T>>({ ...config, url, data, method: 'PUT' }).then(res => resolve(res?.data)).catch(reject)
    })
  }

  /**
   * 下载为文本
   * @param url 
   * @param config 
   * @returns 
   */
  getText(url: string, config?: RequestConfig): Promise<string> {
    return new Promise((resolve, reject) => {
      this.request<{ data: string }>({
        ...config,
        skipInterceptors: true,
        url,
        method: 'GET'
      }).then(res => resolve(res?.data || '')).catch(reject)
    })
  }
}

/** 网络请求 */
const request = new Request({
  // 基本地址
  baseURL: '',
  // 请求超时时长
  timeout: 1000 * 60 * 5,
  // 拦截器
  interceptors: {
    /** 添加请求拦截器，设置请求头 */
    requestInterceptors(config: RequestConfig) {
      // const token = localStorage.getItem(storageTokenKey)
      // if (config.skipInterceptors) {
      //   return config as InternalAxiosRequestConfig
      // }
      // config.headers = {
      //   ...config.headers,
      //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      //   Authorization: token,
      //   // Authorization: `Bearer ${token}`,
      // }
      return config as InternalAxiosRequestConfig
    },
    responseInterceptors(resp: any) {
      // if (resp && resp.status === 401) {}
      return resp
    },
    responseInterceptorsCatch(err) {
      // const { status, statusText } = err.response
      return err
    },
  }
})

export default request
