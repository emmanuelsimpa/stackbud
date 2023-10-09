import { shallowEqual } from 'react-redux';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { Button } from '@/components/button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useGetUser, useGetUserPost } from './_redux/mutation/Mutate';
import Loading from '@/components/loading/Loading';
import { actions } from './_redux';
import Input from '@/components/input/input';
import { createUserPost, deletUserPost } from './_redux/Crud';
import { isPictureURL, isText } from '@/utils/validate';

export function Main() {
  const dispatch = useAppDispatch();
  const { user, state } = useAppSelector(
    (state) => ({
      user: state.auth,
      state: state.dashboard,
    }),
    shallowEqual
  );
  const { userData, isLoading } = useGetUser(user.user.id);
  const { refetch, ...userPost } = useGetUserPost(user.user.id);
  const mutation = useMutation(createUserPost);
  const deleteMutation = useMutation(deletUserPost);
  const { entities, statements } = state;
  const [payload, setPayload] = useState<any>();

  function handleChange(e: any, key: string, use?: 'USE_VALUE' | undefined) {
    setPayload((prev: any) => {
      return {
        ...prev,
        [key]: use === 'USE_VALUE' ? e.target.value : e.value,
      };
    });
  }

  const handleSubmit = async () => {
    const isImage = isPictureURL(payload?.image);
    const isTest = isText(payload?.text);
    !isImage && toast.error('Url not found for this image');
    !isTest && toast.error('Make text Longer');
    if (isImage && isTest) {
      const data = {
        ...payload,
        likes: 1,
        tags: ['Tech News', 'Football', 'Books'],
        owner: entities.id,
      };
      await mutation.mutate(data, {
        onSuccess: () => {
          refetch();
          toast.success('Post Successfully Created');
          setPayload(null);
        },
        onError: (error: any) => {
          toast.error(error?.response.data.data.email);
        },
      });
    }
  };

  const handleDelete = async (id: string) => {
    await deleteMutation.mutate(id, {
      onSuccess: () => {
        refetch();
        toast.success('Post Successfully Deleted');
      },
      onError: (error: any) => {
        toast.error(error?.response.data.data.email);
      },
    });
  };

  useEffect(() => {
    if (userData) {
      dispatch(actions.fetchUserData(userData.data));
    }
    if (userPost.userPost) {
      dispatch(actions.fetchUserPost(userPost.userPost?.data));
    }
  }, [dispatch, userData, userPost.userPost]);

  if (isLoading && userPost.isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-500 via-purple-300 to-purple-700 text-transparent bg-clip-text text-4xl font-black">
        {`Welcome, ${entities?.firstName} ${entities?.lastName}`}
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 gap-10">
        <div className="col-span-2 h-fit border border-dashed border-purple-500 p-5">
          <p className="text-2xl text-stone-950 font-bold">Create a Post</p>
          <div className="pt-2 space-y-5">
            <div className="">
              <Input
                label="Post Image"
                placeholder="https:your image url .jpg"
                onChange={(e: any) => handleChange(e, 'image', 'USE_VALUE')}
              />
            </div>
            <p className="text-lg font-bold text-stone-950">Post Text</p>
            <textarea
              name="Message"
              cols={30}
              rows={10}
              className="w-full h-full bg-slate-200 text-stone-950 text-base focus:outline-none px-2 -mt-2"
              placeholder="Text should be 6 - 50 words long"
              onChange={(e: any) => handleChange(e, 'text', 'USE_VALUE')}
              value={payload?.text}
            />
            <div className="w-full pt-5">
              <Button
                name="submit"
                onClick={handleSubmit}
                disabled={mutation.isLoading}
              />
            </div>
          </div>
        </div>
        <div className="relative min-h-80 w-full border border-dashed border-purple-500 p-5">
          <div className="w-full h-full absolute -z-10">
            <div id="animatedElement" className="bg-blue-500" />
          </div>
          <p className="text-2xl text-stone-950 font-bold">
            List of Post Created
          </p>

          <div className="flex flex-col gap-2 pt-2 h-full">
            {statements && statements?.data?.length <= 0 ? (
              <p className="text-stone-950 text-lg font-medium text-center h-full w-full flex items-center justify-center">
                No Data
              </p>
            ) : (
              statements?.data?.map((item: any) => (
                <div
                  className="flex items-center justify-between"
                  key={item.id}
                >
                  <div className="flex items-center  gap-2">
                    <div className="w-6 h-4 rounded-full bg-purple-500" />
                    <p className="text-stone-950 text-base font-normal">
                      {item.text}
                    </p>
                  </div>
                  <div
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 text-base font-normal cursor-pointer"
                  >
                    X
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
