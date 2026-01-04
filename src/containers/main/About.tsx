'use client';

import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image'
import Btn from '../../components/Btn';


interface AboutProps {
    setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

const About: React.FC<AboutProps> = ({ setIsModalActive }) => {
    const handleMopineClick = () => {
      setIsModalActive(true);  // 모달 활성화
    };
    return (
        <div id="About" className="min_h">
            <div className="inner">
                <div className="AboutTxtWrp">
                    <div className="AboutTxt">
                        <div className="top">
                            <div className="lft">
                                <h1 className="dft font-ExtraBold text-light tt conbox conbox_xs">ABOUT</h1>
                                <Image
                                    className="logo"
                                    src="/images/bi_molepin_sm.png"
                                    alt="Mpcoin logo"
                                    width={183}
                                    height={57}
                                    priority
                                />
                            </div>
                            <h5 className="dft mb-none con font-Medium conbox conbox_xs">
                                Memecoin is the first to support all nine main chains with the same smart contract wallet. Comprehensive support for nine main chains, including Ethereum, Base, Polygon, BSC, Arbitrum, Optmism, Ava- lanche, zkSync, and Tron. Memecoin is the first tosupport a decentralized bridge, en- abling coin transfers across multiplechains. Memecoin is the first to support a utili- ty-based ESG DAO platform and a decen- tralized wallet (Kookmin Wallet) combined service. Support for listing on DEXs such as Uniswap, PancakeSwap, and SusiSwap.
                            </h5>
                        </div>
                        <div className="conbox conbox_xs text-center">
                        <Btn 
                            label="OUR STORY"
                            width="200px" 
                            onClick={handleMopineClick}
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomBgWrp">
                <Image
                    className="bottom_bg"
                    src="/images/bottom_bg.png"
                    alt="Mpcoin logo"
                    width={512}
                    height={342}
                    priority
                />
                <Image
                    className="bottom_bg_char"
                    src="/images/bottom_bg_char.png"
                    alt="Mpcoin logo"
                    width={512}
                    height={342}
                    priority
                />
            </div>
        </div>
    );
};

export default About;