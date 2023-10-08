import img from '@/assets/images/auth.png';
import google from '@/assets/svgs/google.svg';
import { Button } from '@/components/button/Button';
import Input from '@/components/input/input';
import { routes } from '@/config/routes';
import { useAppDispatch } from '@/hooks';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { actions } from '../SignUp/_redux';

export function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [payload, setPayload] = useState<any>();

  function handleChange(e: any, key: string, use?: 'USE_VALUE' | undefined) {
    setPayload((prev: any) => {
      return {
        ...prev,
        [key]: use === 'USE_VALUE' ? e.target.value : e.value,
      };
    });
  }

  const handleSubmit = () => {
    if (payload) {
      const userDataString = localStorage.getItem('persist:root');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const user = JSON.parse(userData.auth);
        const check = user.user.email === payload.email;
        if (check) {
          dispatch(actions.postUserData(user.user));
          navigate(routes.DASHBOARD);
          return;
        }
        toast.error('Opps!!!, Email is not correct');
      } else {
        toast('No data found');
      }
      return;
    }
    toast.error('Please provide your email');
  };

  return (
    <section className="min-h-screen hero-bg">
      <div className="w-full h-full wrapper pt-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <h1 className="w-fit relative text-stone-950 font-black tracking-widest text-5xl uppercase">
                Login
                <div className="absolute bottom-0 h-5 w-full md:w-full bg-purple-500 -z-10" />
              </h1>
            </div>

            <div className="w-full md:w-10/12 pt-2 flex justify-between">
              <Link to={routes.HOME}>
                <div className="flex items-center justify-end gap-1 cursor-pointer">
                  <p className="text-purple-500 font-semibold text-lg">
                    &#8672;
                  </p>
                  <p className="text-purple-500 font-semibold text-base hover:underline ">
                    Go to Blog
                  </p>
                </div>
              </Link>
              <Link to={routes.SIGNUP}>
                <div className="flex items-center justify-end gap-1 cursor-pointer">
                  <p className="text-purple-500 font-semibold text-base hover:underline ">
                    Go to SignUp
                  </p>
                  <p className="text-purple-500 font-semibold text-lg">
                    &#8674;
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full md:w-10/12 pt-8">
              <div className="space-y-10">
                <Input
                  label={'Email Address'}
                  placeholder={'Enter email address'}
                  onChange={(e: any) => handleChange(e, 'email', 'USE_VALUE')}
                />
                {/* <Input label={'Password'} placeholder={'Enter password'} /> */}
              </div>
            </div>
            <div className=" w-full md:w-10/12 flex flex-col gap-2 pt-12">
              <Button name="Login" onClick={handleSubmit} />
            </div>
            <div className=" w-full md:w-10/12 flex flex-col gap-5 pt-12">
              <div className="flex gap-2 items-center">
                <div className="w-full h-0 border-dashed border border-primary-100" />
                <p className="w-2/3 text-center text-stone-950">
                  Or Login with
                </p>
                <div className="w-full h-0 border-dashed border border-black-300" />
              </div>
              <button className="w-full flex items-center justify-center gap-5 text-white font-semibold text-lg tracking-wide uppercase rounded-md bg-purple-500 hover:bg-purple-800 py-2 px-4 md:px-8">
                <div>
                  <img src={google} alt="google" width="32" height="34" />
                </div>
                Login with Google
              </button>
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
