import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useLoginMutation } from '../../../apollo/hooks';
import { Routes } from '../../../constant';
import { Button, Input } from '../../common';

interface LogInValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { t } = useTranslation(['auth']);
  const { push } = useRouter();

  const [login, {loading}] = useLoginMutation();

  const loginSchema = yup.object({
    email: yup.string().email().required(t('auth:emailRequired')),
    password: yup.string().min(4).required(t('auth:passwordRequired')),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LogInValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LogInValues> = ({ email, password }) => {
    login({
      variables: {
        email,
        password,
      },
      onCompleted: (data) => {
        if (typeof data?.login !== 'undefined') {
          data.login.currentWorkspaceId;
          push(
            !data.login.currentWorkspaceId
              ? Routes.workspaces()
              : Routes.workspaceDashboard(data.login.currentWorkspaceId)
          );
        }
      },
    });
  };

  return (
    <form
      className="grid grid-cols-1 auto-rows-max gap-6"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <Input
        fullWidth
        errormessage={errors.email?.message}
        placeholder={t('common:email')}
        {...register('email')}
      />
      <Input
        fullWidth
        type="password"
        placeholder={t('common:password')}
        errormessage={errors.password?.message}
        {...register('password')}
      />
      <Button type="submit" loading={loading} rounded="md" fullWidth disabled={!isValid}>
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
