import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">健康烘焙坊</h3>
            <p className="mb-4">專業低糖無麩質烘焙專家，為您打造美味又健康的烘焙體驗。</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-green-300">
                <span>Facebook</span>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-green-300">
                <span>Instagram</span>
              </a>
              <a href="#" aria-label="Line" className="hover:text-green-300">
                <span>Line</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-300">首頁</a></li>
              <li><a href="/products" className="hover:text-green-300">產品系列</a></li>
              <li><a href="/about-us" className="hover:text-green-300">關於我們</a></li>
              <li><a href="/health-knowledge" className="hover:text-green-300">健康知識</a></li>
              <li><a href="/contact-us" className="hover:text-green-300">聯絡我們</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">產品系列</h3>
            <ul className="space-y-2">
              <li><a href="/products/low-sugar-cakes" className="hover:text-green-300">低糖蛋糕系列</a></li>
              <li><a href="/products/gluten-free-bread" className="hover:text-green-300">無麩質麵包系列</a></li>
              <li><a href="/products/healthy-cookies" className="hover:text-green-300">健康餅乾系列</a></li>
              <li><a href="/products/seasonal" className="hover:text-green-300">節慶特製產品</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <address className="not-italic">
              <p className="mb-2">台北市健康路123號</p>
              <p className="mb-2">電話：(02) 1234-5678</p>
              <p className="mb-2">Email：info@healthybakery.com</p>
              <p>營業時間：週一至週日 10:00-20:00</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 text-center">
          <div className="mb-4">
            <a href="/faq" className="mx-3 hover:text-green-300">常見問題</a>
            <a href="/privacy-policy" className="mx-3 hover:text-green-300">隱私政策</a>
            <a href="/terms-of-service" className="mx-3 hover:text-green-300">使用條款</a>
            <a href="/order-info" className="mx-3 hover:text-green-300">訂購須知</a>
            <a href="/return-policy" className="mx-3 hover:text-green-300">退換貨政策</a>
          </div>
          <p>&copy; {new Date().getFullYear()} 健康烘焙坊. 版權所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
