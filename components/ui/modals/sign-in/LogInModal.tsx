import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLoginMutation } from '../../../../apollo/hooks';
import { Button, Input, Modal } from '../../../common';

interface SignInModalProps {
  open: boolean;
  onOpen: (open: boolean) => void;
}
interface LogInValues {
  email: string;
  password: string;
}

const LogInModal = ({ open, onOpen }: SignInModalProps) => {
  const [login, { data }] = useLoginMutation();
  const { register, handleSubmit } = useForm<LogInValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LogInValues) => {
    login({
      variables: {
        email: data.email,
        password: data.email,
      },
    });
  };

  return (
    <Modal open={open} onOpen={onOpen} title="Sign In">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input fullWidth label="Email" {...register('email')} />
        <Input
          fullWidth
          type="password"
          label="Password"
          {...register('password')}
        />
        <Button rounded="md" fullWidth type="submit">
          Sign In
        </Button>
      </form>
    </Modal>
  );
};

export default LogInModal;
