import { isValidEmail } from '@/utils/validate';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Banner() {
  const [payload, setPayload] = useState('');
  const handleSubmit = () => {
    if (payload.length) {
      const isEmail = isValidEmail(payload);
      !isEmail && toast('Invalid email format');
      if (isEmail) {
        toast.success('Successfully subscribed to our blog.');
        setPayload('');
      }
      return;
    }
    toast('Please enter your email address');
  };

  return (
    <section id="subscribe">
      <div className="banner py-8 px-4 flex gap-10 flex-col rounded-xl justify-between items-start md:items-end lg:p-14">
        <div className="flex w-full flex-1 flex-col gap-4 text-white ">
          <h1 className="text-2xl md:text-6xl font-bold tracking-widest">
            Don’t miss our latest news and updates
          </h1>
          <p className="text-sm leading-normal text-white max-w-xl">
            Subscribe to our blog and stay up to date with all our news and
            information on how Keza works for you and your business
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mb-0 md:mb-4 w-full">
          <input
            placeholder="Enjoy subscribing to this blog"
            className="rounded-md bg-white text-stone-950 text-base h-12 w-full  outline-none px-2 md:text-md"
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="text-white shadow-2xl font-semibold text-lg tracking-wide uppercase rounded-md bg-purple-800 hover:bg-purple-200 hover:text-purple-800 py-2 px-4 md:px-8"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
