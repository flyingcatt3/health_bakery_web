import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 在實際應用中，這裡會處理表單提交邏輯
    console.log('表單提交:', formData);
    alert('感謝您的訊息！我們將盡快回覆您。');
    // 重置表單
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout
      title="聯絡健康烘焙坊 | 門市資訊 | 線上訂購 | 客服聯絡"
      description="聯絡健康烘焙坊的各種方式，包括門市地址、營業時間、線上訂購流程、客服電話及意見回饋表單。我們提供專業諮詢，協助您選擇適合的健康烘焙產品。"
      keywords="健康烘焙坊聯絡方式，低糖蛋糕訂購，無麩質麵包訂購，健康烘焙門市，特殊飲食諮詢，客製化蛋糕訂製"
    >
      {/* 頁面標題 */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">聯絡我們</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            無論您有任何問題、建議或訂購需求，我們都很樂意為您服務。
            您可以透過以下方式聯絡我們，我們將盡快回覆您。
          </p>
        </div>
      </section>

      {/* 聯絡資訊與表單 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* 聯絡資訊 */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-green-800 mb-6">聯絡資訊</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-3">門市地址</h3>
                <p className="text-gray-700 mb-2">台北市健康路123號</p>
                <p className="text-gray-700 mb-4">
                  鄰近捷運站：健康站2號出口步行5分鐘
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">營業時間</h4>
                  <p className="text-gray-700">週一至週五：10:00 - 20:00</p>
                  <p className="text-gray-700">週六至週日：09:00 - 21:00</p>
                  <p className="text-gray-700 mt-2">國定假日依官網公告</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-3">聯絡電話</h3>
                <p className="text-gray-700 mb-2">客服專線：(02) 1234-5678</p>
                <p className="text-gray-700 mb-2">訂購專線：(02) 8765-4321</p>
                <p className="text-gray-700">
                  服務時間：週一至週日 09:00 - 18:00
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-3">電子郵件</h3>
                <p className="text-gray-700 mb-2">客服信箱：service@healthybakery.com</p>
                <p className="text-gray-700 mb-2">訂購信箱：order@healthybakery.com</p>
                <p className="text-gray-700">
                  我們將在24小時內回覆您的郵件
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">社群媒體</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-green-700 hover:text-green-500">
                    Facebook
                  </a>
                  <a href="#" className="text-green-700 hover:text-green-500">
                    Instagram
                  </a>
                  <a href="#" className="text-green-700 hover:text-green-500">
                    Line
                  </a>
                </div>
              </div>
            </div>
            
            {/* 聯絡表單 */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-green-800 mb-6">意見回饋表單</h2>
              <p className="text-gray-700 mb-6">
                如果您有任何問題、建議或訂購需求，請填寫以下表單，我們將盡快回覆您。
                標示 * 的欄位為必填項目。
              </p>
              
              <form onSubmit={handleSubmit} className="bg-green-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名 *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">電子郵件 *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="請輸入您的電子郵件"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">電話</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="請輸入您的電話號碼"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">主旨 *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                      <option value="">請選擇主旨</option>
                      <option value="product-inquiry">產品諮詢</option>
                      <option value="order-inquiry">訂購諮詢</option>
                      <option value="custom-order">客製化訂製</option>
                      <option value="feedback">意見回饋</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">訊息內容 *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="請輸入您的訊息內容"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                  >
                    送出訊息
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 門市位置地圖 */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">門市位置</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
              {/* 在實際應用中，這裡會嵌入 Google Maps 或其他地圖服務 */}
              <div className="flex items-center justify-center h-96 bg-gray-200 rounded-lg">
                <p className="text-gray-600">地圖載入中...</p>
                {/* 地圖將顯示在這裡 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 線上訂購流程 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">線上訂購流程</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-800">1</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">選擇產品</h3>
              <p className="text-gray-700">
                瀏覽我們的產品系列，選擇您喜愛的健康烘焙產品。您可以根據特殊飲食需求篩選產品。
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-800">2</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">加入購物車</h3>
              <p className="text-gray-700">
                將您選擇的產品加入購物車，可以調整數量或選擇客製化選項。您可以繼續購物或直接結帳。
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-800">3</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">填寫資料</h3>
              <p className="text-gray-700">
                填寫收件人資料、配送方式、付款方式等資訊。會員可以使用儲存的資料快速結帳。
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-800">4</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">完成訂購</h3>
              <p className="text-gray-700">
                確認訂單資訊並完成付款。您將收到訂單確認郵件，可以在會員中心查詢訂單狀態。
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/products" className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block">
              立即選購
            </a>
          </div>
        </div>
      </section>

      {/* 常見問題 */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">訂購常見問題</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">配送範圍與時間</h3>
              <p className="text-gray-700">
                我們提供全台宅配服務，一般訂單將在1-2個工作天內出貨，配送時間依地區而定，通常為1-3個工作天。特殊節慶期間可能需要更長時間，建議提前訂購。客製化蛋糕需提前3-5天訂購，並選擇指定配送日期。
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">付款方式</h3>
              <p className="text-gray-700">
                我們接受信用卡、ATM轉帳、LINE Pay、街口支付等多種付款方式。線上訂購需先付款，門市取貨可選擇貨到付款。企業訂購可提供統一發票，並可申請月結帳款，詳情請聯絡我們的業務專員。
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">退換貨政策</h3>
              <p className="text-gray-700">
                由於烘焙產品的特性，除非產品有明顯瑕疵或品質問題，否則恕不接受退換貨。如收到產品有任何問題，請在24小時內聯絡我們，並提供產品照片，我們將盡快為您處理。客製化產品除有明顯瑕疵外，恕不接受退換貨。
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">保存方式</h3>
              <p className="text-gray-700">
                我們的產品不添加防腐劑，保存期限較短。一般建議蛋糕類產品冷藏保存2-3天，麵包類產品室溫保存1-2天或冷藏保存3-5天。詳細保存方式請參考產品包裝上的說明。為確保最佳風味，建議儘快食用。
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              如果您有其他問題，歡迎聯絡我們的客服人員，我們將竭誠為您服務。
            </p>
            <a href="/faq" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block">
              查看更多常見問題
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

document.dispatchEvent(new Event('prerender-ready'))

export default ContactUsPage;
