import React from 'react';
import Layout from '../components/layout/Layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout
      title="頁面未找到 | 404錯誤 | 健康烘焙坊"
      description="很抱歉，您所尋找的頁面不存在。請返回首頁或瀏覽我們的產品系列，探索健康烘焙坊提供的低糖蛋糕、無麩質麵包等健康烘焙產品。"
      keywords="404錯誤頁面,頁面未找到,健康烘焙坊,低糖蛋糕,無麩質麵包"
    >
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-green-800 mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-green-700 mb-6">頁面未找到</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            很抱歉，您所尋找的頁面不存在或已被移除。
            請返回首頁或瀏覽我們的產品系列，探索健康烘焙坊提供的美味又健康的烘焙產品。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              返回首頁
            </a>
            <a 
              href="/products" 
              className="bg-white hover:bg-gray-100 text-green-700 font-medium py-3 px-6 rounded-lg border border-green-600 transition duration-300"
            >
              瀏覽產品系列
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">您可能感興趣的產品</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/low-sugar-cake.jpg" 
                alt="健康烘焙坊低糖生日蛋糕，使用天然甜味劑，無添加糖" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-green-800 mb-2">低糖生日蛋糕</h4>
                <p className="text-gray-600 mb-4">
                  使用天然甜味劑，無添加糖，適合糖尿病患者及控制糖分攝入的消費者
                </p>
                <a 
                  href="/products/low-sugar-cakes" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/gluten-free-bread.jpg" 
                alt="健康烘焙坊無麩質全麥麵包，適合麩質過敏者食用" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-green-800 mb-2">無麩質麵包</h4>
                <p className="text-gray-600 mb-4">
                  使用優質無麩質麵粉，口感鬆軟，風味豐富，適合麩質過敏者及乳糜瀉患者
                </p>
                <a 
                  href="/products/gluten-free-bread" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/healthy-cookies.jpg" 
                alt="健康烘焙坊健康手工餅乾，使用天然食材，低糖無麩質" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-green-800 mb-2">健康手工餅乾</h4>
                <p className="text-gray-600 mb-4">
                  使用天然食材，低糖無麩質，適合各種特殊飲食需求的消費者
                </p>
                <a 
                  href="/products/healthy-cookies" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-green-800 mb-6">找不到您需要的內容？</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            如果您有任何問題或需要協助，請隨時聯絡我們的客服團隊，我們將竭誠為您服務。
          </p>
          <a 
            href="/contact-us" 
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block"
          >
            聯絡我們
          </a>
        </div>
      </section>
      
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <form className="flex w-full max-w-md">
              <input 
                type="search" 
                placeholder="搜尋產品..." 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-r-lg transition duration-300"
              >
                搜尋
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

document.dispatchEvent(new Event('prerender-ready'))

export default NotFoundPage;
