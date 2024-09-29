import React, { useState, useEffect } from 'react';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';

interface DropdownProps {
  text: string;
  desc: string;
  vid?: string;
  isWorldRecords?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ text, desc, vid, isWorldRecords = false }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [arrowClass, setArrowClass] = useState<string>('rotate-180');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setArrowClass(isOpen ? 'rotate-90' : 'rotate-0');
    }, 0);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  const opts: YouTubeProps['opts']  = {
    height: '195',
    width: '320',
    playerVars: {
      autoplay: 0,
    },
  };

  const onPlayerReady = (event: YouTubeEvent) => {
    event.target.pauseVideo();
  };

  // const opts: YouTubeProps['opts'] = {
  //   width: '1024',
  //   height: '276',
  // };

  return (
    <div className='flex flex-col'>
      <div
        className="px-4 py-2 cursor-pointer flex items-center"
        onClick={toggleDropdown}
      >
        <span className={`transition-transform duration-200 ${arrowClass}`}>
          <svg
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-[5px] font-semibold">{text}</span>
      </div>
      {isOpen && (
        <div className="px-4 py-2">
          <div className='px-[21px] text-justify'>
            {desc}
          </div>
          {vid && !isWorldRecords && (
            <div className="flex flex-col items-center my-[20px]">
              <video className="flex w-[60%]" disablePictureInPicture controls>
                <source src={vid} />
              </video>
            </div>
          )}
          {isWorldRecords && (
            <div className="flex flex-col text-justify text-lg">
              <div className="flex items-center justify-center">
                <div className='text-center'>
                  <YouTube className="flex m-5 w-[40%]" videoId="gh8HX4itF_w" opts={opts} onReady={onPlayerReady}/>
                  <span className='italic text-sm'>Max Park's 3.13 World Record</span>
                </div>
                <div className='text-center'>
                  <YouTube className="flex m-5 w-[40%]" videoId="vFOsnxAwvgA" opts={opts} onReady={onPlayerReady}/>
                  <span className='italic text-sm'>Leo Borneo's 2.78 World Record</span>
                </div>
                <div className='text-center'>
                  <YouTube className="flex m-5 w-[40%]" videoId="-k50TfgkbFA" opts={opts} onReady={onPlayerReady}/>
                  <span className='italic text-sm'>Yiheng Wang's 4.09 World Record average of 5</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;