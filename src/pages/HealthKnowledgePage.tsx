import React from 'react';
import Layout from '../components/layout/Layout';

const HealthKnowledgePage: React.FC = () => {
  return (
    <Layout
      title="健康烘焙知識 | 低糖飲食 | 無麩質飲食指南 | 健康烘焙坊"
      description="探索健康烘焙坊提供的健康飲食知識，包括低糖飲食指南、無麩質飲食建議、健康烘焙小技巧及常見問答。幫助您了解特殊飲食需求及如何選擇適合的烘焙產品。"
      keywords="低糖飲食知識，無麩質飲食指南，健康烘焙技巧，特殊飲食建議，糖尿病飲食，麩質過敏飲食"
    >
      {/* 頁面標題 */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">健康烘焙知識</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            探索健康飲食的世界，了解低糖飲食、無麩質飲食的知識與建議，
            以及如何在日常生活中實踐健康烘焙，享受美味又健康的烘焙體驗。
          </p>
        </div>
      </section>

      {/* 知識分類導航 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#low-sugar-diet" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-300">
              低糖飲食知識
            </a>
            <a href="#gluten-free-diet" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-300">
              無麩質飲食指南
            </a>
            <a href="#healthy-baking-tips" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-300">
              健康烘焙小技巧
            </a>
            <a href="#faq" className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full transition duration-300">
              常見問答
            </a>
          </div>
        </div>
      </section>

      {/* 低糖飲食知識 */}
      <section id="low-sugar-diet" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">低糖飲食知識</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">什麼是低糖飲食？</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  低糖飲食是指減少精製糖和簡單碳水化合物的攝入，以控制血糖水平和減少糖分對身體的負面影響。低糖飲食不僅適合糖尿病患者，對一般人也有諸多好處。
                </p>
                <p className="text-gray-700 mb-4">
                  低糖飲食的核心是選擇低升糖指數（GI）的食物，避免血糖快速上升。升糖指數是衡量食物中碳水化合物影響血糖水平的指標，GI值越低，對血糖的影響越小。
                </p>
                <p className="text-gray-700">
                  實行低糖飲食並不意味著完全不吃含糖食物，而是選擇天然的糖源，如水果，並減少添加糖的攝入。健康的低糖飲食應該是均衡的，包含足夠的蛋白質、健康脂肪和複合碳水化合物。
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="/low-sugar-diet.jpg" 
                  alt="低糖飲食示意圖，展示適合糖尿病患者的健康食物選擇" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">低糖飲食的好處</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-green-800 mb-3">控制血糖水平</h4>
                <p className="text-gray-700">
                  低糖飲食可以幫助控制血糖水平，減少血糖波動，對糖尿病患者尤為重要。穩定的血糖水平也有助於減少飢餓感和食慾過盛，有利於體重管理。
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-green-800 mb-3">改善心臟健康</h4>
                <p className="text-gray-700">
                  研究表明，高糖飲食與心臟病風險增加有關。低糖飲食可以幫助降低血壓、改善膽固醇水平，減少心臟病和中風的風險。
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-green-800 mb-3">促進體重管理</h4>
                <p className="text-gray-700">
                  減少糖分攝入可以幫助控制體重，因為過量的糖分會轉化為脂肪儲存在體內。低糖飲食也有助於減少食慾，增加飽腹感，從而減少總熱量攝入。
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-green-800 mb-3">提高能量水平</h4>
                <p className="text-gray-700">
                  穩定的血糖水平可以避免能量的大起大落，提供持續的能量供應，減少疲勞感。低糖飲食也有助於改善睡眠質量，增強整體活力。
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">如何實踐低糖飲食</h3>
            <div className="flex flex-col md:flex-row-reverse gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  實踐低糖飲食並不意味著完全放棄甜食，而是做出更明智的選擇。以下是一些實用的建議：
                </p>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>選擇天然甜味劑，如赤藻糖醇、羅漢果糖、甜菊糖等，這些甜味劑具有低升糖指數，適合糖尿病患者</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>增加蛋白質和健康脂肪的攝入，這些營養素可以幫助穩定血糖水平，增加飽腹感</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>選擇全穀物和高纖維食物，這些食物具有較低的升糖指數，可以緩慢釋放能量</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>限制加工食品和飲料的攝入，這些產品通常含有大量添加糖</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>閱讀食品標籤，了解產品中的糖含量和碳水化合物含量</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  在健康烘焙坊，我們提供多種低糖烘焙產品，使用天然甜味劑，無添加糖，讓您在控制糖分攝入的同時，也能享受烘焙的美味。
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="/low-sugar-baking.jpg" 
                  alt="低糖烘焙示意圖，展示使用天然甜味劑製作的健康點心" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/products/low-sugar-cakes" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block">
              探索我們的低糖蛋糕系列
            </a>
          </div>
        </div>
      </section>

      {/* 無麩質飲食指南 */}
      <section id="gluten-free-diet" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">無麩質飲食指南</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">什麼是麩質？</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  麩質（Gluten）是存在於小麥、大麥、黑麥等穀物中的蛋白質複合物。它賦予麵團彈性和黏性，使麵包能夠膨脹並保持形狀。然而，對某些人來說，麩質可能引起健康問題。
                </p>
                <p className="text-gray-700 mb-4">
                  麩質過敏是一種自身免疫反應，當麩質過敏者攝入含麩質的食物時，免疫系統會攻擊小腸內壁，導致發炎和損傷。這種情況被稱為乳糜瀉（Celiac Disease）。
                </p>
                <p className="text-gray-700">
                  除了乳糜瀉，還有一種情況被稱為非乳糜瀉麩質敏感（Non-Celiac Gluten Sensitivity），患者在攝入麩質後會出現類似乳糜瀉的症狀，但不會對小腸造成損傷。
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="/gluten-free-diet.jpg" 
                  alt="無麩質飲食示意圖，展示適合麩質過敏者的健康食物選擇" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">無麩質飲食的必要性</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-medium text-green-800 mb-3">乳糜瀉患者</h4>
                <p className="text-gray-700">
                  對乳糜瀉患者來說，無麩質飲食是唯一的治療方法。即使是微量的麩質也可能引起免疫反應，導致小腸損傷。嚴格遵循無麩質飲食可以幫助小腸癒合，改善症狀。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-medium text-green-800 mb-3">麩質敏感者</h4>
                <p className="text-gray-700">
                  對於非乳糜瀉麩質敏感的人來說，無麩質飲食可以幫助緩解症狀，如腹痛、腹脹、腹瀉、疲勞等。這些人可能不需要像乳糜瀉患者那樣嚴格，但減少麩質攝入仍然有益。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-medium text-green-800 mb-3">小麥過敏者</h4>
                <p className="text-gray-700">
                  小麥過敏是一種對小麥蛋白質的過敏反應，與麩質過敏不同。小麥過敏者需要避免所有含小麥的食物，但可能可以食用其他含麩質的穀物，如大麥和黑麥。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-medium text-green-800 mb-3">其他健康考量</h4>
                <p className="text-gray-700">
                  有些人選擇無麩質飲食是出於其他健康考量，如減少發炎、改善腸道健康等。雖然科學證據有限，但有些人報告說無麩質飲食改善了他們的整體健康狀況。
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">無麩質飲食指南</h3>
            <div className="flex flex-col md:flex-row-reverse gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  遵循無麩質飲食需要了解哪些食物含有麩質，哪些食物是安全的。以下是一些基本指南：
                </p>
                <h4 className="text-xl font-medium text-green-800 mb-3">避免的食物</h4>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>小麥及其衍生物（如麵粉、麵包、麵條、餅乾、蛋糕等）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>大麥（包括麥芽、麥芽糖漿、啤酒等）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>黑麥</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>某些燕麥（除非標明無麩質）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>某些加工食品和調味料（需閱讀標籤）</span>
                  </li>
                </ul>
                
                <h4 className="text-xl font-medium text-green-800 mb-3">安全的食物</h4>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>米飯、玉米、馬鈴薯、藜麥、小米等</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>無麩質麵粉（如米粉、玉米粉、馬鈴薯粉等）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>新鮮水果和蔬菜</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>肉類、魚類、蛋類、豆類</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>大多數乳製品</span>
                  </li>
                </ul>
                
                <p className="text-gray-700">
                  在健康烘焙坊，我們提供多種無麩質烘焙產品，使用優質無麩質麵粉，在專用區域製作，避免交叉污染，讓麩質過敏者安心享用。
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="/gluten-free-baking.jpg" 
                  alt="無麩質烘焙示意圖，展示使用無麩質麵粉製作的健康麵包" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/products/gluten-free-bread" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block">
              探索我們的無麩質麵包系列
            </a>
          </div>
        </div>
      </section>

      {/* 健康烘焙小技巧 */}
      <section id="healthy-baking-tips" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">健康烘焙小技巧</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">替代精製糖的選擇</h3>
              <p className="text-gray-700 mb-4">
                在健康烘焙中，可以使用多種天然甜味劑替代精製糖：
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>赤藻糖醇：</strong>具有零卡路里，不影響血糖，口感接近蔗糖，適合糖尿病患者</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>羅漢果糖：</strong>天然甜度高，零卡路里，不影響血糖，適合糖尿病患者</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>甜菊糖：</strong>天然甜度高，零卡路里，不影響血糖，適合糖尿病患者</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>椰子糖：</strong>低升糖指數，含有微量礦物質，風味獨特</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>楓糖漿：</strong>含有抗氧化物質和礦物質，風味豐富，但仍含有糖分，需適量使用</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">無麩質烘焙的麵粉選擇</h3>
              <p className="text-gray-700 mb-4">
                在無麩質烘焙中，可以使用多種無麩質麵粉替代小麥麵粉：
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>杏仁粉：</strong>富含蛋白質和健康脂肪，低碳水化合物，適合低碳飲食</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>椰子粉：</strong>富含膳食纖維，低碳水化合物，吸水性強，需調整配方</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>米粉：</strong>質地輕盈，風味中性，適合多種烘焙產品</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>藜麥粉：</strong>富含蛋白質和礦物質，營養價值高</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>無麩質混合粉：</strong>通常由多種無麩質麵粉和澱粉混合而成，模擬小麥麵粉的特性</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">增加營養價值的技巧</h3>
              <p className="text-gray-700 mb-4">
                在健康烘焙中，可以通過多種方式增加產品的營養價值：
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>添加堅果和種子，如杏仁、核桃、亞麻籽等，增加蛋白質、健康脂肪和礦物質</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>添加水果和蔬菜，如香蕉、蘋果、胡蘿蔔等，增加天然甜度、膳食纖維和維生素</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>使用全穀物麵粉，如全麥麵粉、燕麥粉等，增加膳食纖維和礦物質</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>添加蛋白質粉，如乳清蛋白、豌豆蛋白等，增加蛋白質含量</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>使用健康油脂，如橄欖油、椰子油、酪梨油等，替代黃油或植物油</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">烘焙技巧與注意事項</h3>
              <p className="text-gray-700 mb-4">
                在健康烘焙中，需要注意以下技巧和事項：
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>無麩質麵粉的吸水性與小麥麵粉不同，需要調整液體比例</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>無麩質麵糊通常較黏稠，可以添加黃原膠或瓜爾豆膠增加彈性</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>天然甜味劑的甜度與蔗糖不同，需要調整用量</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>低糖烘焙產品的烘烤時間和溫度可能需要調整，通常溫度略低，時間略長</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>避免交叉污染，使用專用的烘焙工具和區域製作無麩質產品</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              在健康烘焙坊，我們運用這些健康烘焙技巧，為您打造美味又健康的烘焙產品。
              我們也定期舉辦健康烘焙工作坊，分享這些技巧，歡迎參加！
            </p>
            <a href="/contact-us" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block">
              了解工作坊資訊
            </a>
          </div>
        </div>
      </section>

      {/* 常見問答 */}
      <section id="faq" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">常見問答</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">低糖蛋糕適合糖尿病患者食用嗎？</h3>
              <p className="text-gray-700">
                是的，我們的低糖蛋糕專為糖尿病患者設計，使用天然甜味劑，無添加糖，具有低升糖指數。每款蛋糕都標示碳水化合物含量及升糖指數，讓您安心享用。不過，糖尿病患者仍應控制份量，並根據個人情況諮詢醫生或營養師的建議。
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">無麩質產品的口感如何？</h3>
              <p className="text-gray-700">
                我們的無麩質產品經過多年研發，成功克服了無麩質烘焙常見的乾硬問題。我們使用優質無麩質麵粉和特殊配方，使產品口感接近傳統烘焙，鬆軟可口，風味豐富。許多顧客表示，他們幾乎無法分辨我們的無麩質產品與傳統烘焙的差異。
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">你們的產品含有防腐劑嗎？</h3>
              <p className="text-gray-700">
                不含。我們所有產品均不添加防腐劑及人工色素，保留食材的天然風味與營養。因此，我們的產品保存期限較短，建議儘快食用或冷藏保存。我們每天新鮮製作，確保您享用的是最新鮮的烘焙產品。
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">如何訂購客製化蛋糕？</h3>
              <p className="text-gray-700">
                您可以通過我們的網站、電話或親臨門市訂購客製化蛋糕。我們提供多種口味、尺寸和裝飾選擇，可根據您的特殊飲食需求及喜好調整。建議提前3-5天訂購，特殊節慶期間可能需要更長時間。您可以在「聯絡我們」頁面填寫訂購表單，或直接致電我們的客服專線。
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">你們的產品適合素食者嗎？</h3>
              <p className="text-gray-700">
                是的，我們提供多種素食選項，包括蛋奶素和全素。所有產品均清楚標示成分，您可以根據自己的飲食需求選擇。我們也提供客製化服務，可根據您的素食需求調整配方。
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">你們的產品含有堅果嗎？</h3>
              <p className="text-gray-700">
                部分產品含有堅果，我們會清楚標示成分。我們也提供無堅果選項，但由於我們的烘焙坊處理各種食材，無法完全保證不會有交叉污染。如果您有嚴重的堅果過敏，建議諮詢我們的客服人員，了解更詳細的資訊。
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              如果您有其他問題，歡迎聯絡我們，我們的專業團隊將為您提供詳細解答。
            </p>
            <a href="/contact-us" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block">
              聯絡我們
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

document.dispatchEvent(new Event('prerender-ready'))

export default HealthKnowledgePage;
