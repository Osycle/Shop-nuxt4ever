// utils/http.ts
export function httpGet<T>(url: string, options: any = {}) {
  return useFetch<T>(url, {
    method: 'GET',
    baseURL: useRuntimeConfig().public.apiBase, // берём из nuxt.config
    ...options,
  })
}

export function httpPost<T>(url: string, body: any, options: any = {}) {
  return useFetch<T>(url, {
    method: 'POST',
    body,
    baseURL: useRuntimeConfig().public.apiBase,
    ...options,
  })
}

export function httpPut<T>(url: string, body: any, options: any = {}) {
  return useFetch<T>(url, {
    method: 'PUT',
    body,
    baseURL: useRuntimeConfig().public.apiBase,
    ...options,
  })
}

export function httpDelete<T>(url: string, options: any = {}) {
  return useFetch<T>(url, {
    method: 'DELETE',
    baseURL: useRuntimeConfig().public.apiBase,
    ...options,
  })
}
