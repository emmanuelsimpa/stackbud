import React, { useEffect, useState } from 'react';
import share from '@/assets/svgs/share.svg';
import chain from '@/assets/svgs/chain.svg';

type Props = {
  title: string;
};

export const CopyShareLink: React.FC<Props> = ({ title }) => {
  const currentUrl = window.location.href;
  const [copied, setCopied] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setCopied(false);
    setModalOpen(!modalOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  }, [copied]);

  return (
    <>
      <div className="relative">
        <div className="w-full relative">
          <button
            onClick={() => handleModal()}
            className="text-white py-2 px-4 rounded relative z-20 share-button"
          >
            <div className='transition duration-300"'>
              <img src={share} alt="share" />
            </div>
            <p className="text-stone-950 text-sm absolute top-8 transition duration-300 opacity-0 share">
              {!modalOpen && !copied ? 'Share' : ''}
            </p>
          </button>

          {modalOpen && (
            <div className="absolute w-fit top-[120%] -right-[45%]  flex items-center justify-center z-10 border border-gray-300 shadow-lg transition duration-300">
              <div className="bg-white rounded px-10 py-6 max-w-md mx-auto shadow-xl relative border-gray-500">
                <div className="absolute -top-2 left-[80%] transform -translate-x-1/2 w-4 h-4 bg-white border-t border-gray-300 rotate-45 z-20"></div>
                <div className="absolute -top-2 right-[15%] transform -translate-x-1/2 w-4 h-4 bg-white border-t border-gray-300  -rotate-45 z-20"></div>
                <div className="flex items-center gap-2 mb-2 w-[180px]">
                  <p className="text-stone-950 text-md font-semibold">Share</p>
                </div>
                <ul className="space-y-2">
                  <li
                    className="cursor-pointer text-md text-gray-500 hover:text-lg hover:text-gray-700"
                    onClick={() => handleModal()}
                  >
                    <a
                      className="twitter-share-button"
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        currentUrl
                      )}&text=${encodeURIComponent(title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li
                    className="cursor-pointer text-md text-gray-500 hover:text-lg hover:text-gray-700"
                    onClick={() => handleModal()}
                  >
                    <a
                      className="twitter-share-button"
                      href={`https://wa.me/?text=${encodeURIComponent(
                        title
                      )}%0A${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Whatsapp
                    </a>
                  </li>
                  <li
                    className="cursor-pointer text-md text-gray-500 hover:text-lg hover:text-gray-700"
                    onClick={() => handleModal()}
                  >
                    <a
                      className="twitter-share-button"
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        currentUrl
                      )}&title=${encodeURIComponent(title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li
                    className="cursor-pointer text-md text-gray-500 hover:text-lg hover:text-gray-700"
                    onClick={() => handleModal()}
                  >
                    <a
                      className="twitter-share-button"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        currentUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={copyToClipboard}
        className="flex items-center relative w-fit share-button"
      >
        <div className='transition duration-300"'>
          <img src={chain} alt="" />
        </div>
        <p className="text-stone-950 text-sm absolute top-8 transition duration-300 opacity-0 share ">
          {!copied ? 'Copy' : 'Copied'}
        </p>
      </button>
    </>
  );
};
