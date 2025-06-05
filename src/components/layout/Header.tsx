import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-green-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="健康烘焙坊標誌" 
                className="h-12 w-auto mr-3"
              />
              <h1 className="text-2xl font-bold text-green-800">健康烘焙坊</h1>
            </Link>
          </div>
          
          <nav className="flex flex-wrap justify-center">
            <Link to="/" className="px-4 py-2 text-green-800 hover:text-green-600 font-medium">
              首頁
            </Link>
            <Link to="/products" className="px-4 py-2 text-green-800 hover:text-green-600 font-medium">
              產品系列
            </Link>
            <Link to="/about-us" className="px-4 py-2 text-green-800 hover:text-green-600 font-medium">
              關於我們
            </Link>
            <Link to="/health-knowledge" className="px-4 py-2 text-green-800 hover:text-green-600 font-medium">
              健康知識
            </Link>
            <Link to="/contact-us" className="px-4 py-2 text-green-800 hover:text-green-600 font-medium">
              聯絡我們
            </Link>
          </nav>
          
          <div className="flex items-center mt-4 md:mt-0">
            <Link to="/member" className="px-3 py-2 text-green-800 hover:text-green-600">
              <span className="mr-1">會員中心</span>
            </Link>
            <Link to="/cart" className="px-3 py-2 text-green-800 hover:text-green-600">
              <span className="mr-1">購物車</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
