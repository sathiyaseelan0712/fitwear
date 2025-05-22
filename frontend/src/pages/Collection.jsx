import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Range = Slider.Range;

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sizes, setSizes] = useState([]);  // <-- New state for sizes
  const [sortType, setSortType] = useState('relevant');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const toggleCategory = (e) => {
    const { value } = e.target;
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const { value } = e.target;
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  // New toggle for sizes
  const toggleSize = (e) => {
    const { value } = e.target;
    setSizes(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory));
    }

    if (sizes.length > 0) {
      // Assuming product.sizes is an array of available sizes like ['S','M','L']
      productsCopy = productsCopy.filter(item =>
        item.sizes && item.sizes.some(size => sizes.includes(size))
      );
    }

    const [minPrice, maxPrice] = priceRange;

    productsCopy = productsCopy.filter(item =>
      item.price >= minPrice && item.price <= maxPrice
    );

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let sorted = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }
    setFilterProducts(sorted);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subcategory, sizes, search, showSearch, products, priceRange]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filters */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Toggle Filters" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 p-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700'>
            {['Men', 'Women', 'Kids'].map(item => (
              <label className='flex gap-2' key={item}>
                <input className='w-3' type="checkbox" onChange={toggleCategory} value={item} />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 p-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map(item => (
              <label className='flex gap-2' key={item}>
                <input className='w-3' type="checkbox" onChange={toggleSubCategory} value={item} />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className={`border border-gray-300 p-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SIZE</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700'>
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <label className='flex gap-2' key={size}>
                <input className='w-3' type="checkbox" onChange={toggleSize} value={size} />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className={`border border-gray-300 p-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>PRICE RANGE</p>
          <div className="px-3">
            <Slider range
              min={0}
              max={10000}
              step={100}
              allowCross={false}
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
              trackStyle={[{ backgroundColor: '#4B5563' }]}
              handleStyle={[{ borderColor: '#4B5563' }, { borderColor: '#4B5563' }]}
            />
            <div className="flex justify-between text-xs mt-1 text-gray-600">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
            value={sortType}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
