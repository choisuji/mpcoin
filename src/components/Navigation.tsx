"use client";

import { useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

// Props 타입 정의
interface NavigationProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ isActive, setIsActive }) => {
  const closeNavigation = () => {
    setIsActive(false);  // 네비게이션 닫기
  };
  
  // 메뉴 span태그 감싸 쪼개기
  useEffect(() => {
    const aTags = document.querySelectorAll('#Navigation a:not(.noSpace)');
    aTags.forEach((aTag) => {
      const element = aTag as HTMLAnchorElement;
      const text = element.innerText;
  
      // 각 문자를 <span>으로 감싸기
      const wrappedText = text.split('').map(char => {
        // 공백은 그대로 두기
        if (char === ' ') {
          return '<span>&nbsp;</span>';
        }
        // 빈 문자는 처리하지 않기
        if (char === '') {
          return '';  // 빈 문자열은 그대로 두기
        }
        // 그 외의 문자들은 <span>으로 감싸기
        return `<span>${char}</span>`;
      }).join('');
  
      element.innerHTML = wrappedText;
    });
  }, []);

  return (
    <div id="Navigation" className={isActive ? 'active' : ''}>
      <nav>
        <ul>
          <li>
            <a href="#About" onClick={closeNavigation}>ABOUT MOLEPIN</a>
          </li>
          <li>
            <a href="#SaveTheEarth" onClick={closeNavigation}>SAVE THE EARTH</a>
          </li>
          <li>
            <a href="#Intergrations" onClick={closeNavigation}>INTEGRATION</a>
          </li>
          <li>
            {/* noSpace 입력시 그냥 중앙정렬 */}
            <a href="#Links" className='noSpace' onClick={closeNavigation}>CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
