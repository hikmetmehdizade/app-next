import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useRegistrationMutation } from '../../../apollo/hooks';
import { Button, Input } from '../../common';

interface RegistrationValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registrationSchema = yup.object().shape({
  email: yup.string().email().required(),
  firstName: yup.string().min(2).trim().required(),
  lastName: yup.string().min(2).trim().required(),
  password: yup.string().min(6).trim().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null]),
});

const RegistrationForm = () => {
  const [registration] = useRegistrationMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegistrationValues>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationValues> = (data) => {
    registration({
      variables: {
        data: {
          email: data.email,
          lastName: data.lastName,
          firstName: data.firstName,
          password: data.password,
        },
      },
      onCompleted: (data) => {
        if (typeof data.registration !== 'undefined') {
        }
      },
    });
  };

  return (
    <form
      className="grid grid-cols-1 auto-rows-max gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input fullWidth label="First name" {...register('firstName')} />

      <Input fullWidth label="Last Name" {...register('lastName')} />
      <Input fullWidth label="Email" {...register('email')} />
      <Input
        fullWidth
        label="Password"
        type="password"
        {...register('password')}
      />
      <Input
        fullWidth
        label="Confirm Password"
        type="password"
        {...register('confirmPassword')}
      />
      <Button type="submit" disabled={!isValid} fullWidth>
        Registration
      </Button>
    </form>
  );
};

export default RegistrationForm;
