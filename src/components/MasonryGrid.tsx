"use client"; 

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Masonry from 'masonry-layout';

const images = [
  { id: 1, category: 'Molepin T-shirts', cost:'110', src: '/images/product_t-shirt1.png' },
  { id: 2, category: 'Molepin T-shirts', cost:'110', src: '/images/product_t-shirt2.png' },
  { id: 3, category: 'Molepin Cap', cost:'110', src: '/images/product_t-cap1.png' },
  { id: 4, category: 'Molepin Cap', cost:'110', src: '/images/product_t-cap2.png' },
  { id: 5, category: 'Molepin T-shirts', cost:'110', src: '/images/product_t-shirt1.png' },
  { id: 6, category: 'Molepin T-shirts', cost:'110', src: '/images/product_t-shirt2.png' },
  { id: 7, category: 'Molepin Cap', cost:'110', src: '/images/product_t-cap1.png' },
  { id: 8, category: 'Molepin Cap', cost:'110', src: '/images/product_t-cap2.png' },
];

const categories = ['all', 'T-shirt', 'Cap'];

const MasonryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredImages, setFilteredImages] = useState(images);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // 카테고리 필터링
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(image => image.category === selectedCategory));
    }
  }, [selectedCategory]);

  // 클라이언트 사이드에서만 Masonry 초기화
  useEffect(() => {
    if (typeof window !== "undefined" && gridRef.current) {
      // Masonry 초기화
      const masonry = new Masonry(gridRef.current, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        gutter: 0,
        percentPosition: false,
      });

      masonry.layout(); // 레이아웃 초기화

      // 이미지 필터링 후 레이아웃 리로드
      return () => {
        masonry.reloadItems();  // 레이아웃 리로드
        masonry.layout();  // 레이아웃 재계산
      };
    }
  }, [filteredImages]); 

  return (
    <div id="productsList">
      {/* 카테고리 탭 */}
      <h4 className="dft font-Heavy f_kar c_dgr2">
        Categories
      </h4>
      <nav className='tabs conbox conbox_xxs'>
        {categories.map((category) => (
          <p
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`tab dft ${selectedCategory === category ? 'active' : ''}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
        ))}
      </nav>

      <div className="conbox conbox_xs">
        {/* 그리드 */}
        <h4 className="dft font-Heavy f_kar c_dgr2">
          Molepin Essentials
        </h4>
        <div ref={gridRef} className="grid conbox conbox_xxs">
          {filteredImages.map((image) => (
            <div className="grid-item" key={image.id}>
              <a href="#" className="gridItemWrp">
                <Image
                  className='plus'
                  src={`/icons/plus.svg`}
                  alt={`Product Plus Icon`} 
                  width={28}
                  height={28} 
                />
                <div className="img">
                  <Image
                    src={image.src}
                    alt={`Product ${image.id}`} 
                    width={171}
                    height={162} 
                    layout="intrinsic"
                  />
                </div>
                <div className="costInfo">
                  <div>
                    <h4 className="dft mini mb-none font-Heavy f_kar">{image.category}</h4>
                    <h4 className="dft mini mb-none font-Heavy f_kar">${image.cost}</h4>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasonryGrid;
