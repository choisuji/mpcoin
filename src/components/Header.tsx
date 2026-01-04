"use client";

import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  isNavigationActive: boolean;
  setIsNavigationActive: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setIsNavigationActive, isNavigationActive }) => {
  
  const [isSticky, setIsSticky] = useState(false);
  const [mounted, setMounted] = useState(false); // 마운트 상태 추가

  // sticky 효과
  useEffect(() => {
    setMounted(true); //  브라우저에 안착했음을 표시
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > 0) {//  window가 존재할 때만 실행되도록 한 번 더 방어
        setIsSticky(true); 
      } else {
        setIsSticky(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigationShow = () => {
    setIsNavigationActive(true);  // 네비게이션 활성화
  };
  const handleNavigationHide = () => {
    setIsNavigationActive(false);  // 네비게이션 활성화
  };

  // 서버 환경일 때는 아무것도 그리지 않거나 기본 헤더만 그림
  if (!mounted) {
    return (
      <header id="header">
        <div className="con">
           <div style={{ width: '247px', height: '75px' }}></div>
        </div>
      </header>
    );
  }

  return (
    <header id="header" className={isSticky ? 'sticky' : ''}>
      <div className="con">
        <a href="#Mpcoin">
          <span></span>
          <Image
            className="logo"
            src="/images/BI_molepin.png"
            alt="Mpcoin logo"
            width={231}
            height={75}
            priority
          />
        </a>

        <Image
          className="btnMenu"
          src={isNavigationActive ? "/icons/ic_menu_close.svg" : "/icons/ic_menu.svg"} 
          alt="menu icon"
          width={49}
          height={49}
          priority
          onClick={isNavigationActive ? handleNavigationHide : handleNavigationShow}
        />
      </div>
    </header>
  );
};

export default Header;