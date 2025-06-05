import React from 'react';
import Layout from '../components/layout/Layout';

const AboutUsPage: React.FC = () => {
  return (
    <Layout
      title="關於健康烘焙坊 | 我們的故事與理念 | 健康烘焙專家"
      description="了解健康烘焙坊的品牌故事、製作理念及團隊介紹。我們致力於為特殊飲食需求的消費者提供美味又健康的烘焙產品，使用優質天然食材，無添加糖，無麩質選項。"
      keywords="健康烘焙坊，健康烘焙理念，特殊飲食烘焙，低糖無麩質烘焙，健康飲食專家，天然食材烘焙"
    >
      {/* 頁面標題 */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">關於健康烘焙坊</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            我們致力於為特殊飲食需求的消費者提供美味又健康的烘焙體驗，
            使用優質天然食材，無添加糖，提供無麩質選項，讓每個人都能享受烘焙的美好。
          </p>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-green-800 mb-6">我們的故事</h2>
              <p className="text-gray-700 mb-6">
                健康烘焙坊的故事始於2015年，當時我們的創辦人陳美玲因家人罹患糖尿病，深刻體會到控制飲食的重要性，卻也明白美食帶來的幸福感不應被剝奪。
              </p>
              <p className="text-gray-700 mb-6">
                身為一名熱愛烘焙的糕點師，陳美玲開始研究如何在不使用精製糖的情況下，製作出美味的蛋糕和點心。同時，她也注意到越來越多人因麩質過敏而無法享用傳統烘焙產品的困境。
              </p>
              <p className="text-gray-700 mb-6">
                經過兩年的研發與嘗試，陳美玲成功研製出低糖、無麩質的烘焙配方，不僅保留了傳統烘焙的美味，更兼顧了健康與營養。2017年，健康烘焙坊正式成立，致力於為特殊飲食需求的消費者提供美味又健康的烘焙體驗。
              </p>
              <p className="text-gray-700">
                從最初的小工作室到現在的專業烘焙坊，我們始終堅持使用天然食材，無添加糖，為特殊飲食需求的消費者打造美味又健康的烘焙產品。我們相信，特殊飲食需求不應該成為享受美味烘焙的障礙。
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src="/founder-story.jpg" 
                alt="健康烘焙坊創辦人陳美玲，專注於研發低糖無麩質烘焙產品" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 製作理念 */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <h2 className="text-3xl font-bold text-green-800 mb-6">我們的理念</h2>
              <p className="text-gray-700 mb-6">
                健康烘焙坊的核心理念是「美味與健康的完美結合」。我們相信，健康的飲食不應該犧牲美味，特殊飲食需求不應該成為享受烘焙的障礙。
              </p>
              <p className="text-gray-700 mb-6">
                我們堅持以下原則：
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>使用天然食材，拒絕人工添加物</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>無添加糖，使用天然甜味劑</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>提供無麩質選項，避免交叉污染</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>標示完整營養成分，讓消費者安心選擇</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>手工製作，確保品質與風味</span>
                </li>
              </ul>
              <p className="text-gray-700">
                我們不斷創新與研發，致力於提供更多元、更美味的健康烘焙選擇，讓每個人都能享受烘焙的美好，不受飲食限制的影響。
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/baking-philosophy.jpg" 
                alt="健康烘焙坊的製作理念，使用天然食材，無添加糖，提供無麩質選項" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 食材來源 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">我們的食材</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">優質麵粉</h3>
              <p className="text-gray-700">
                我們使用經過嚴格篩選的優質麵粉，包括無麩質麵粉、全麥麵粉等多種選擇。所有麵粉均來自可靠的供應商，確保品質與安全。無麩質產品使用的麵粉在專用區域處理，避免交叉污染。
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">天然甜味劑</h3>
              <p className="text-gray-700">
                我們不使用精製糖，而是採用天然甜味劑，如赤藻糖醇、羅漢果糖、甜菊糖等。這些天然甜味劑具有低升糖指數，適合糖尿病患者及控制糖分攝入的消費者。我們也善用水果的天然甜度，減少額外添加的甜味劑。
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">新鮮水果</h3>
              <p className="text-gray-700">
                我們使用當季新鮮水果，增添烘焙產品的天然風味與營養。所有水果均經過嚴格篩選，確保新鮮度與品質。我們優先選用本地有機水果，支持永續農業，也減少運輸過程中的碳足跡。
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">優質乳製品</h3>
              <p className="text-gray-700">
                我們使用優質乳製品，包括有機牛奶、優格、乳酪等。所有乳製品均來自可靠的供應商，確保品質與安全。我們也提供無乳製品的選項，滿足乳糖不耐症或素食者的需求。
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">天然香料</h3>
              <p className="text-gray-700">
                我們使用天然香料，如香草莢、肉桂、薑黃等，增添烘焙產品的風味。所有香料均經過嚴格篩選，確保品質與安全。我們不使用人工香精，堅持天然風味的純粹與豐富。
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">堅果與種子</h3>
              <p className="text-gray-700">
                我們使用多種堅果與種子，如杏仁、核桃、亞麻籽等，增添烘焙產品的營養與口感。所有堅果與種子均經過嚴格篩選，確保新鮮度與品質。我們也提供無堅果的選項，滿足堅果過敏者的需求。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 團隊介紹 */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">我們的團隊</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/team-founder.jpg" 
                alt="健康烘焙坊創辦人陳美玲，專業糕點師，專注於健康烘焙研發" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">陳美玲</h3>
                <p className="text-gray-600 text-sm mb-4">創辦人 / 主廚</p>
                <p className="text-gray-700">
                  專業糕點師，擁有10年以上烘焙經驗。因家人罹患糖尿病，開始研發低糖烘焙產品，並創立健康烘焙坊。專注於健康烘焙配方的研發與創新。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/team-nutritionist.jpg" 
                alt="健康烘焙坊營養師林家瑜，專業營養師，負責產品營養成分分析與健康知識推廣" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">林家瑜</h3>
                <p className="text-gray-600 text-sm mb-4">營養師</p>
                <p className="text-gray-700">
                  專業營養師，擁有特殊飲食諮詢經驗。負責產品營養成分分析、健康知識推廣，以及為特殊飲食需求的客戶提供專業諮詢。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/team-baker.jpg" 
                alt="健康烘焙坊烘焙師張志明，專業烘焙師，專注於無麩質烘焙技術" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">張志明</h3>
                <p className="text-gray-600 text-sm mb-4">烘焙師</p>
                <p className="text-gray-700">
                  專業烘焙師，擁有無麩質烘焙專業技術。負責無麩質麵包系列的研發與製作，致力於提升無麩質烘焙產品的口感與風味。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 我們的承諾 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">我們的承諾</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            健康烘焙坊承諾為每位顧客提供美味又健康的烘焙體驗。我們堅持使用天然食材，無添加糖，提供無麩質選項，
            讓特殊飲食需求不再成為享受美味烘焙的障礙。我們也承諾持續創新與研發，提供更多元、更美味的健康烘焙選擇。
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/products" className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
              探索我們的產品
            </a>
            <a href="/contact-us" className="bg-white hover:bg-gray-100 text-green-700 font-medium py-3 px-6 rounded-lg border border-green-600 transition duration-300">
              聯絡我們
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
