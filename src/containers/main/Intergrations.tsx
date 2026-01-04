import Image from 'next/image'
import CoinList from '../../components/CoinList';

const Intergrations = () => {
  return (
    <div id="Intergrations" className="min_h">
        <div className="top text-center">
          <h1 className="dft mb-none font-Heavy text-light">INTEGRATIONS</h1>
          <h4 className="dft mb-none font-Medium text-light conbox conbox_xxxs">
            Aiming for a better planet?
          </h4>
        </div>
        <div className="bt">
          <CoinList />
        </div>
    </div>
  );
};

export default Intergrations;