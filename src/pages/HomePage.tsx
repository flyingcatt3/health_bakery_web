import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="健康烘焙坊 - 專業低糖無麩質烘焙專家 | 台北健康烘焙"
      description="健康烘焙坊提供低糖蛋糕、無麩質麵包等健康烘焙產品，專為糖尿病患者、麩質過敏者及注重健康飲食的消費者打造。線上訂購，全台宅配。"
      keywords="健康烘焙，低糖蛋糕，無麩質麵包，糖尿病友善點心，特殊飲食需求，健康烘焙坊"
    >
      {/* 主視覺區塊 */}
      <section className="relative bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                美味與健康的完美結合
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                專業低糖無麩質烘焙專家，為特殊飲食需求打造美味又健康的烘焙體驗
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products/low-sugar-cakes" 
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  探索低糖蛋糕
                </Link>
                <Link 
                  to="/products/gluten-free-bread" 
                  className="bg-white hover:bg-gray-100 text-green-700 font-medium py-3 px-6 rounded-lg border border-green-600 transition duration-300"
                >
                  瀏覽無麩質麵包
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/low_sugar_bakery_banner.jpg" 
                alt="健康烘焙坊特製低糖生日蛋糕，適合糖尿病患者享用" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 產品精選區塊 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">產品精選</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 低糖蛋糕 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/images/low_sugar_cake.jpg" 
                alt="健康烘焙坊低糖生日蛋糕，使用天然甜味劑，無添加糖" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">低糖生日蛋糕</h3>
                <p className="text-gray-600 mb-4">
                  使用天然甜味劑，無添加糖，適合糖尿病患者及控制糖分攝入的消費者
                </p>
                <Link 
                  to="/products/low-sugar-cakes" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            {/* 無麩質麵包 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/images/gluten_free_bread.jpg" 
                alt="健康烘焙坊無麩質全麥麵包，適合麩質過敏者食用" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">無麩質麵包</h3>
                <p className="text-gray-600 mb-4">
                  使用優質無麩質麵粉，口感鬆軟，風味豐富，適合麩質過敏者及乳糜瀉患者
                </p>
                <Link 
                  to="/products/gluten-free-bread" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            {/* 健康餅乾 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/images/healthy_cookies.jpg" 
                alt="健康烘焙坊健康手工餅乾，使用天然食材，低糖無麩質" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">健康手工餅乾</h3>
                <p className="text-gray-600 mb-4">
                  使用天然食材，低糖無麩質，適合各種特殊飲食需求的消費者
                </p>
                <Link 
                  to="/products/healthy-cookies" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>

            {/* 節慶特製產品 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="/images/seasonal_products.jpg" 
                alt="健康烘焙坊節慶特製產品，客製化低糖無麩質烘焙" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">節慶特製產品</h3>
                <p className="text-gray-600 mb-4">
                  針對各種節慶提供客製化低糖無麩質烘焙產品，滿足特殊場合需求
                </p>
                <Link 
                  to="/products/seasonal" 
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌故事簡介 */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/images/bakery_shop.jpg" 
                alt="健康烘焙坊實體店面與烘焙環境，專注於健康烘焙產品研發" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-green-800 mb-6">我們的故事</h2>
              <p className="text-gray-700 mb-6">
                健康烘焙坊源於一個簡單的信念：特殊飲食需求不應該成為享受美味烘焙的障礙。我們的創辦人因家人罹患糖尿病，深知控制飲食的重要性，卻也明白美食帶來的幸福感不應被剝奪。
              </p>
              <p className="text-gray-700 mb-6">
                經過多年的研發與嘗試，我們成功研製出低糖、無麩質的烘焙產品，不僅保留了傳統烘焙的美味，更兼顧了健康與營養。我們堅持使用天然食材，無添加糖，為特殊飲食需求的消費者打造美味又健康的烘焙體驗。
              </p>
              <Link 
                to="/about-us" 
                className="text-green-600 hover:text-green-800 font-medium"
              >
                了解更多關於我們 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 最新促銷活動 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">最新促銷活動</h2>
          <div className="bg-green-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">新會員首購優惠</h3>
            <p className="text-lg text-gray-700 mb-6">
              新會員註冊即贈送100元購物金，首次購物滿1000元再享9折優惠！
            </p>
            <Link 
              to="/member/register" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block"
            >
              立即註冊
            </Link>
          </div>
        </div>
      </section>

      {/* 顧客見證 */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">顧客見證</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 bg-green-200 flex items-center justify-center">
                  <span className="text-green-800 font-bold">王</span>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">王小明</h3>
                  <p className="text-gray-600 text-sm">糖尿病患者</p>
                </div>
              </div>
              <p className="text-gray-700">
                "自從發現健康烘焙坊，我終於可以在生日時享用蛋糕了！他們的低糖蛋糕不僅美味，更重要的是不會影響我的血糖。非常感謝健康烘焙坊讓我重拾甜食的樂趣。"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 bg-green-200 flex items-center justify-center">
                  <span className="text-green-800 font-bold">李</span>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">李小華</h3>
                  <p className="text-gray-600 text-sm">麩質過敏者</p>
                </div>
              </div>
              <p className="text-gray-700">
                "身為麩質過敏者，找到美味的麵包一直是個挑戰。健康烘焙坊的無麩質麵包系列改變了我的生活，終於可以享用美味的麵包而不用擔心過敏反應。強力推薦！"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 bg-green-200 flex items-center justify-center">
                  <span className="text-green-800 font-bold">張</span>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">張小芳</h3>
                  <p className="text-gray-600 text-sm">健康飲食愛好者</p>
                </div>
              </div>
              <p className="text-gray-700">
                "健康烘焙坊的產品讓我驚艷！使用天然食材，無添加糖，卻能保持如此美味的口感，真的很不容易。現在我家裡的烘焙產品都來自健康烘焙坊，全家人都很喜歡。"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 健康知識預覽 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">健康知識</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">低糖飲食的好處</h3>
              <p className="text-gray-700 mb-4">
                低糖飲食不僅適合糖尿病患者，對一般人也有諸多好處。減少精製糖的攝入可以幫助控制體重、改善血糖水平、降低心臟病風險，並減少慢性發炎。
              </p>
              <Link 
                to="/health-knowledge/low-sugar-diet" 
                className="text-green-600 hover:text-green-800 font-medium"
              >
                閱讀更多 &rarr;
              </Link>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">認識無麩質飲食</h3>
              <p className="text-gray-700 mb-4">
                無麩質飲食對麩質過敏者和乳糜瀉患者至關重要。了解什麼是麩質、哪些食物含有麩質，以及如何安全地遵循無麩質飲食，是維護健康的重要知識。
              </p>
              <Link 
                to="/health-knowledge/gluten-free-diet" 
                className="text-green-600 hover:text-green-800 font-medium"
              >
                閱讀更多 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 訂閱電子報 */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">訂閱我們的電子報</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            訂閱電子報，獲取最新產品資訊、健康知識、獨家優惠及活動通知。
          </p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="請輸入您的電子郵件" 
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              aria-label="電子郵件地址"
            />
            <button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-r-lg transition duration-300"
            >
              訂閱
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

document.dispatchEvent(new Event('prerender-ready'))

export default HomePage;
