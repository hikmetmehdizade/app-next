import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLoginMutation } from '../../../apollo/hooks';
import { Button, Input, Modal, PasswordInput } from '../../common';

interface SignInModalProps {
  open: boolean;
}
interface LogInValues {
  email: string;
  password: string;
}

const LogInModal = ({ open }: SignInModalProps) => {
  const [, setOpen] = useState(true);
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm<LogInValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LogInValues) => {
    console.log('data', data);

    login({
      variables: {
        email: data.email,
        password: data.email,
      },
    });
  };

  return (
    <Modal open={open} onOpen={setOpen} title="Sign In">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" {...register('email')} />
        <PasswordInput label="Password" {...register('password')} />
        <Button rounded="md" fullWidth type="submit">
          Sign In
        </Button>
      </form>
    </Modal>
  );
};

export default LogInModal;
