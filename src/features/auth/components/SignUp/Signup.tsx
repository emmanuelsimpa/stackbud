import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { createUser } from './_redux/Crud';
import { useAppDispatch } from '@/hooks';
import { actions } from './_redux';
import img from '@/assets/images/auth.png';
import { Button } from '@/components/button/Button';
import Input from '@/components/input/input';
import { routes } from '@/config/routes';

export function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mutation = useMutation(createUser);
  const [payload, setPayload] = useState<any>();

  function handleChange(e: any, key: string, use?: 'USE_VALUE' | undefined) {
    setPayload((prev: any) => {
      return {
        ...prev,
        [key]: use === 'USE_VALUE' ? e.target.value : e.value,
      };
    });
  }

  const createUserProfile = () => {
    if (payload.email && payload.firstName && payload.lastName) {
      mutation.mutate(payload);
      if (mutation.status === 'success') {
        toast.success('Account Successfully Created');
        dispatch(actions.postUserData(mutation.data.data));
        navigate(routes.DASHBOARD);
      } else {
        toast.error('Something went wrong!!!');
      }
    }
  };

  return (
    <section className="min-h-screen">
      <div className="w-full h-full wrapper pt-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <h1 className="w-fit relative text-stone-950 font-black tracking-widest text-5xl uppercase">
                Create Account
                <div className="absolute bottom-0 h-5 w-full md:w-full bg-purple-500 -z-10" />
              </h1>
            </div>
            <div className="w-full md:w-10/12 pt-10">
              <div className="space-y-10">
                <Input
                  label={'First Name'}
                  placeholder={'First Name'}
                  onChange={(e: any) =>
                    handleChange(e, 'firstName', 'USE_VALUE')
                  }
                />
                <Input
                  label={'Last Name'}
                  placeholder={'Last Name'}
                  onChange={(e: any) =>
                    handleChange(e, 'lastName', 'USE_VALUE')
                  }
                />
                <Input
                  label={'Email Address'}
                  placeholder={'Enter email address'}
                  onChange={(e: any) => handleChange(e, 'email', 'USE_VALUE')}
                />
              </div>
            </div>
            <div className="w-full flex flex-col md:w-10/12 gap-1 pt-12">
              <Button
                name="Create Account"
                onClick={createUserProfile}
                disabled={mutation.isLoading}
              />
              <Link to={routes.LOGIN}>
                <div className="flex items-center justify-end gap-2 cursor-pointer">
                  <p className="text-purple-500 font-semibold text-xl hover:underline ">
                    Go to Login
                  </p>
                  <p className="text-purple-500 font-semibold text-3xl">
                    &#8674;
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full h-72 md:h-570 flex items-center justify-center relative">
            <div className="h-full md:h-90 w-full relative ">
              <div className="w-full h-fit absolute flex justify-center top-10 md:-top-10">
                <img src={img} alt="image" height={555} width={637} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
