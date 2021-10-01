import { useState, useEffect } from 'react';

const endpoint = '/api/interviews/login-check';

export const useIsInterviewsLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>();
  useEffect(() => {
    const fetchForLogin = async () => {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await res.json();
      return json.login;
    };
    fetchForLogin().then((isLogin) => {
      setIsLoading(false);
      setIsLogin(isLogin);
    });
  }, []);
  return { isLoading, isLogin, setIsLogin };
};
