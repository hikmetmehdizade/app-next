import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { useLogoutMutation } from '../apollo/hooks';
import { Button, Dropdown, Input } from '../components/common';
import { LogInModal } from '../components/modals';

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {}, []);
  const [logout] = useLogoutMutation();

  return (
    <div className="flex flex-col">
      <Input label="Price" placeholder="Enter price" type="number" />
      <Input label="Price" disabled />
      <LogInModal open={openModal} onOpen={(val) => setOpenModal(val)} />

      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
      />
      <Button onClick={() => setOpenModal((prev) => !prev)}>Sign in</Button>
      <Button btnType="secondary" onClick={() => logout()}>
        Logout
      </Button>
      <Button btnType="dark">Dark</Button>
      <Button disabled>Primary disabled</Button>
      <Button disabled btnType="secondary">
        Secondary disabled
      </Button>
      <Button disabled btnType="dark">
        Dark disabled
      </Button>

      <Button rounded="md">Primary</Button>
      <Button rounded="md" btnType="secondary">
        Secondary
      </Button>
      <Button rounded="md" btnType="dark">
        Dark
      </Button>
      <Button rounded="full">Primary</Button>
      <Button rounded="full" btnType="secondary">
        Secondary
      </Button>
      <Button rounded="full" btnType="dark">
        Dark
      </Button>
      <Button outline rounded="full">
        Primary
      </Button>
      <Button outline rounded="full" btnType="secondary">
        Secondary
      </Button>
      <Button outline rounded="full" btnType="dark">
        Dark
      </Button>

      <Dropdown
        label="Memasik"
        items={[
          { label: 'mem', value: 'mem' },
          { label: 'mem11', value: 'me1m' },
          { label: 'mem22', value: 'mem22' },
        ]}
      />
    </div>
  );
};

export default Home;
