import { useSelector } from 'react-redux';

interface RootState {
    userStore: {
      name: string;
    };
  }

export const UseUser = () => {
  return  useSelector((state: RootState) => state.userStore.name);
}
