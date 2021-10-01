import { useCallback, useState } from 'react';
import cn from 'classnames';
import s from './LoginView.module.css';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import type {
  VFC,
  Dispatch,
  SetStateAction,
  FormEventHandler,
  ChangeEventHandler,
} from 'react';

type Props = {
  className?: string;
  setIsLogin: Dispatch<SetStateAction<boolean | undefined>>;
};

const endpoint = '/api/interviews/login';

const useForm = (setIsLogin: Props['setIsLogin']) => {
  const [value, setValue] = useState<string>();
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setValue(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault();
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: value,
        }),
      });
      if (res.status === 200) {
        const json = await res.json();
        const { login } = json;
        setIsLogin(login);
      } else {
        console.log('Interviews login error: ', res);
      }
    },
    [value, setIsLogin]
  );
  return { handleSubmit, handleChange };
};

const LoginView: VFC<Props> = ({ className, setIsLogin }) => {
  const f = useIntlMessage();
  const { handleSubmit, handleChange } = useForm(setIsLogin);
  return (
    <div className={cn(className)}>
      <form onSubmit={handleSubmit}>
        <label>
          password:{' '}
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">送信</button>
      </form>
      {/* {login === false && <p>{f('labo.wrongPassword')}</p>} */}
    </div>
  );
};

export default LoginView;
