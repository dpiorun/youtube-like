import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export function useRequest<T = unknown>(fetchFn: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>();
  const [errorMsg, setErrorMsg] = useState<string>();
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    async function manageRequest() {
      if (status === 'loading' || data) return;
      setStatus('loading');
      try {
        const data = await fetchFn();
        setData(data);
        setStatus('success');
      } catch (error) {
        setStatus('error');
        if (axios.isAxiosError(error)) setErrorMsg(error.message);
      }
    }
    manageRequest();
  });

  return { data, status, errorMsg };
}
