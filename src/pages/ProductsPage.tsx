import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const ProductsPage: React.FC = () => {
  return (
    <Layout
      title="健康烘焙產品系列 | 低糖蛋糕 | 無麩質麵包 | 健康烘焙坊"
      description="探索健康烘焙坊的產品系列，包括低糖生日蛋糕、無麩質麵包、健康手工餅乾及節慶特製產品。所有產品均使用天然食材，無添加糖，適合各種特殊飲食需求。"
      keywords="低糖蛋糕，無麩質麵包，健康餅乾，節慶特製產品，特殊飲食需求，健康烘焙"
    >
      {/* 產品系列頁面標題 */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">健康烘焙產品系列</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            我們提供多種低糖、無麩質的健康烘焙產品，使用天然食材，無添加糖，適合各種特殊飲食需求。
            從生日蛋糕到日常麵包，從手工餅乾到節慶特製產品，健康烘焙坊為您打造美味又健康的烘焙體驗。
          </p>
        </div>
      </section>

      {/* 產品類別導航 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#low-sugar-cakes" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-300">
              低糖蛋糕系列
            </a>
            <a href="#gluten-free-bread" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-300">
              無麩質麵包系列
            </a>
            <a href="#healthy-cookies" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-300">
              健康餅乾系列
            </a>
            <a href="#seasonal-products" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-300">
              節慶特製產品
            </a>
          </div>
        </div>
      </section>

      {/* 低糖蛋糕系列 */}
      <section id="low-sugar-cakes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-green-800 mb-6">低糖蛋糕系列</h2>
              <p className="text-gray-700 mb-6">
                我們的低糖蛋糕系列專為糖尿病患者及控制糖分攝入的消費者設計。使用天然甜味劑，無添加糖，口感細膩，風味絕佳。
                每款蛋糕都經過精心研發，確保在減少糖分的同時，保持傳統蛋糕的美味與口感。
              </p>
              <p className="text-gray-700 mb-6">
                所有低糖蛋糕均標示碳水化合物含量及升糖指數，讓您安心享用。我們也提供客製化服務，可依照您的需求調整甜度及口味。
              </p>
              <Link 
                to="/products/low-sugar-cakes" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block"
              >
                查看完整系列
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src="/low-sugar-cake-series.jpg" 
                alt="健康烘焙坊低糖蛋糕系列，適合糖尿病患者的生日蛋糕" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/low-sugar-birthday-cake.jpg" 
                alt="健康烘焙坊低糖生日蛋糕，使用天然甜味劑，無添加糖" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">低糖生日蛋糕</h3>
                <p className="text-gray-600 mb-4">
                  使用天然甜味劑，無添加糖，適合糖尿病患者及控制糖分攝入的消費者。提供多種口味選擇。
                </p>
                <Link 
                  to="/products/low-sugar-cakes/birthday" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/low-sugar-cheese-cake.jpg" 
                alt="健康烘焙坊低糖乳酪蛋糕，低升糖指數，適合糖尿病患者" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">低糖乳酪蛋糕</h3>
                <p className="text-gray-600 mb-4">
                  低升糖指數，使用優質乳酪製作，口感綿密，風味豐富，無添加糖。
                </p>
                <Link 
                  to="/products/low-sugar-cakes/cheese" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/low-sugar-fruit-cake.jpg" 
                alt="健康烘焙坊低糖水果蛋糕，使用新鮮水果，無添加糖" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">低糖水果蛋糕</h3>
                <p className="text-gray-600 mb-4">
                  使用新鮮水果，無添加糖，利用水果的天然甜度，健康美味，適合各種特殊飲食需求。
                </p>
                <Link 
                  to="/products/low-sugar-cakes/fruit" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 無麩質麵包系列 */}
      <section id="gluten-free-bread" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <h2 className="text-3xl font-bold text-green-800 mb-6">無麩質麵包系列</h2>
              <p className="text-gray-700 mb-6">
                我們的無麩質麵包系列專為麩質過敏者及乳糜瀉患者設計。使用優質無麩質麵粉，口感鬆軟，風味豐富。
                經過多年研發，我們成功克服了無麩質麵包常見的乾硬問題，打造出口感接近傳統麵包的健康選擇。
              </p>
              <p className="text-gray-700 mb-6">
                所有無麩質麵包均在專用烘焙區製作，避免交叉污染，讓麩質過敏者安心享用。我們提供多種口味選擇，從基本的白麵包到全麥、雜糧等多種變化。
              </p>
              <Link 
                to="/products/gluten-free-bread" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block"
              >
                查看完整系列
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/gluten-free-bread-series.jpg" 
                alt="健康烘焙坊無麩質麵包系列，適合麩質過敏者的專用麵包" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/gluten-free-white-bread.jpg" 
                alt="健康烘焙坊無麩質白麵包，口感鬆軟，適合麩質過敏者" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">無麩質白麵包</h3>
                <p className="text-gray-600 mb-4">
                  使用優質無麩質麵粉，口感鬆軟，風味純正，適合麩質過敏者及乳糜瀉患者的日常選擇。
                </p>
                <Link 
                  to="/products/gluten-free-bread/white" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/gluten-free-whole-wheat-bread.jpg" 
                alt="健康烘焙坊無麩質全麥麵包，富含膳食纖維，無麩質" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">無麩質全麥麵包</h3>
                <p className="text-gray-600 mb-4">
                  富含膳食纖維，使用無麩質全麥粉製作，營養豐富，口感扎實，適合追求健康的麩質過敏者。
                </p>
                <Link 
                  to="/products/gluten-free-bread/whole-wheat" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/gluten-free-multi-grain-bread.jpg" 
                alt="健康烘焙坊無麩質雜糧麵包，添加多種無麩質穀物，營養豐富" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">無麩質雜糧麵包</h3>
                <p className="text-gray-600 mb-4">
                  添加多種無麩質穀物，如小米、藜麥、亞麻籽等，營養豐富，口感多層次，風味獨特。
                </p>
                <Link 
                  to="/products/gluten-free-bread/multi-grain" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 健康餅乾系列 */}
      <section id="healthy-cookies" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-green-800 mb-6">健康餅乾系列</h2>
              <p className="text-gray-700 mb-6">
                我們的健康餅乾系列使用天然食材，低糖無麩質，適合各種特殊飲食需求的消費者。
                從傳統的巧克力餅乾到創新的蔬果餅乾，我們提供多種口味選擇，滿足不同的味蕾需求。
              </p>
              <p className="text-gray-700 mb-6">
                所有餅乾均手工製作，不添加防腐劑及人工色素，保留食材的天然風味與營養。
                我們的餅乾不僅美味，更是健康的零食選擇，適合日常享用或送禮。
              </p>
              <Link 
                to="/products/healthy-cookies" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block"
              >
                查看完整系列
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src="/healthy-cookies-series.jpg" 
                alt="健康烘焙坊健康餅乾系列，低糖無麩質手工餅乾" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/low-sugar-chocolate-cookies.jpg" 
                alt="健康烘焙坊低糖巧克力餅乾，使用天然可可，無添加糖" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">低糖巧克力餅乾</h3>
                <p className="text-gray-600 mb-4">
                  使用天然可可，無添加糖，口感酥脆，巧克力風味濃郁，適合控制糖分攝入的消費者。
                </p>
                <Link 
                  to="/products/healthy-cookies/chocolate" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/gluten-free-oatmeal-cookies.jpg" 
                alt="健康烘焙坊無麩質燕麥餅乾，富含膳食纖維，無麩質" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">無麩質燕麥餅乾</h3>
                <p className="text-gray-600 mb-4">
                  使用無麩質燕麥，富含膳食纖維，口感香脆，風味獨特，適合麩質過敏者及追求健康的消費者。
                </p>
                <Link 
                  to="/products/healthy-cookies/oatmeal" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/vegetable-cookies.jpg" 
                alt="健康烘焙坊蔬果餅乾，添加天然蔬果粉，營養豐富" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">蔬果餅乾</h3>
                <p className="text-gray-600 mb-4">
                  添加天然蔬果粉，如菠菜、胡蘿蔔、藍莓等，營養豐富，色彩繽紛，風味獨特，適合兒童及追求健康的消費者。
                </p>
                <Link 
                  to="/products/healthy-cookies/vegetable" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 節慶特製產品 */}
      <section id="seasonal-products" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <h2 className="text-3xl font-bold text-green-800 mb-6">節慶特製產品</h2>
              <p className="text-gray-700 mb-6">
                我們的節慶特製產品系列針對各種節慶提供客製化低糖無麩質烘焙產品，滿足特殊場合需求。
                從農曆新年的年糕、中秋節的月餅，到聖誕節的薑餅屋，我們為每個節慶打造健康美味的烘焙體驗。
              </p>
              <p className="text-gray-700 mb-6">
                所有節慶產品均可客製化，根據您的需求調整甜度、口味及裝飾，讓特殊飲食需求不再成為享受節慶氣氛的障礙。
                提前預訂，讓健康烘焙坊為您的節慶增添美味與健康。
              </p>
              <Link 
                to="/products/seasonal" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block"
              >
                查看完整系列
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/seasonal-products-series.jpg" 
                alt="健康烘焙坊節慶特製產品系列，客製化低糖無麩質節慶烘焙" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/low-sugar-mooncake.jpg" 
                alt="健康烘焙坊低糖月餅，使用天然食材，無添加糖" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">低糖月餅</h3>
                <p className="text-gray-600 mb-4">
                  中秋節特製，使用天然食材，無添加糖，多種口味選擇，適合糖尿病患者及控制糖分攝入的消費者。
                </p>
                <Link 
                  to="/products/seasonal/mooncake" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/gluten-free-christmas-cake.jpg" 
                alt="健康烘焙坊無麩質聖誕蛋糕，節慶裝飾，無麩質配方" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">無麩質聖誕蛋糕</h3>
                <p className="text-gray-600 mb-4">
                  聖誕節特製，使用無麩質配方，節慶裝飾，多種口味選擇，適合麩質過敏者及追求健康的消費者。
                </p>
                <Link 
                  to="/products/seasonal/christmas" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/healthy-new-year-cake.jpg" 
                alt="健康烘焙坊健康年糕，使用天然食材，低糖無麩質" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">健康年糕</h3>
                <p className="text-gray-600 mb-4">
                  農曆新年特製，使用天然食材，低糖無麩質，傳統風味，健康享用，適合各種特殊飲食需求的消費者。
                </p>
                <Link 
                  to="/products/seasonal/new-year" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 客製化服務 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">客製化服務</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            我們提供客製化服務，可根據您的特殊飲食需求及喜好，為您打造專屬的健康烘焙產品。
            無論是生日蛋糕、婚禮蛋糕，還是企業活動的點心，我們都能為您量身定制。
          </p>
          <Link 
            to="/contact-us" 
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block"
          >
            聯絡我們了解更多
          </Link>
        </div>
      </section>
    </Layout>
  );
};

document.dispatchEvent(new Event('prerender-ready'))

export default ProductsPage;
