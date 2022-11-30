import { gql, useSubscription } from '@apollo/client';

export const TASK_SUBSCRIPTION = gql`
  subscription TaskSub {
    taskSub {

      action
    }
  }
`;

export const useTaskSubscription = () => useSubscription(TASK_SUBSCRIPTION);
