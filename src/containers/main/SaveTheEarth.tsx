import Image from 'next/image'

const About = () => {
  return (
    <div id="SaveTheEarth" className="min_h">
        <div className="SaveTheEarthTop">
            <Image
                className="top_bg"
                src="/images/saveearth_top_bg1.jpg"
                alt="saveearth"
                width={512}
                height={223}
                priority
            />
        </div>
        <div className="SaveTheEarthBottom">
            <div className="saveearth_title">
                <Image
                    className="titleTxt"
                    src="/images/saveearth_title.png"
                    alt="saveearth_title"
                    width={236}
                    height={27}
                    priority
                />
            </div>
            <div className="charsWrp">
                <div className="chars">
                    <div className="charItem">
                        <Image
                            className="savearth_char"
                            src="/images/savearth_char1.png"
                            alt="savearth_character"
                            width={211}
                            height={215}
                            priority
                        />
                        <h5 className="dft mb-none font-Bold c_gr name">Cleaning up</h5>
                    </div>
                    <div className="charItem">
                        <Image
                            className="savearth_char"
                            src="/images/savearth_char2.png"
                            alt="savearth_character"
                            width={211}
                            height={215}
                            priority
                        />
                        <h5 className="dft mb-none font-Bold c_gr name">Plant More</h5>
                    </div>
                </div>
                <div className="chars conbox conbox_lg">
                    <div className="charItem">
                        <Image
                            className="savearth_char"
                            src="/images/savearth_char3.png"
                            alt="savearth_character"
                            width={211}
                            height={215}
                            priority
                        />
                        <h5 className="dft mb-none font-Bold c_gr name">
                            Recycle Reuse <br /> Reduce
                        </h5>
                    </div>
                    <div className="charItem">
                        <Image
                            className="savearth_char"
                            src="/images/savearth_char4.png"
                            alt="savearth_character"
                            width={211}
                            height={215}
                            priority
                        />
                        <h5 className="dft mb-none font-Bold c_gr name">
                            Save <br /> Electricity
                        </h5>
                    </div>
                </div>
            </div>
            <div className="conbox btTxt">
                <h5 className="dft mb-none font-ExtraBold c_dgr">
                    VISION
                </h5>
                <p className="dft mini mb-none font-Bold c_dgr">
                    Providing Web3-based rewards (tokens) to users who participate in nature conservation activities. <br />
                    Forming a participatory DAO community and contributing to practical carbon neutrality.
                </p>
            </div>
            <div className="conbox btTxt">
                <h5 className="dft mb-none font-ExtraBold c_dgr">
                    #Carbon neutrality and ecological restoration
                </h5>
            </div>
        </div>
    </div>
  );
};

export default About;