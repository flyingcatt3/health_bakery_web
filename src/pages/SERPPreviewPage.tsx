import React from 'react';
import Layout from '../components/layout/Layout';

const SERPPreviewPage: React.FC = () => {
  return (
    <Layout
      title="SERP搜尋結果預覽 | 健康烘焙坊"
      description="健康烘焙坊的SERP搜尋結果預覽頁面，展示在Google搜尋結果中的呈現效果，包含結構化資料與優化的標題描述。"
      keywords="SERP預覽,搜尋引擎結果頁,健康烘焙坊,SEO優化,結構化資料"
    >
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">SERP搜尋結果預覽</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            以下展示健康烘焙坊在Google搜尋結果中的呈現效果，包含各頁面的標題、描述與結構化資料。
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">主要頁面SERP預覽</h2>
          
          {/* 首頁SERP預覽 */}
          <div className="mb-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-green-800 mb-4">首頁</h3>
            <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
              <div className="mb-1">
                <span className="text-xs text-gray-600">https://www.healthybakery.com/</span>
              </div>
              <h4 className="text-xl text-blue-700 font-medium mb-1 hover:underline cursor-pointer">
                健康烘焙坊 - 專業低糖無麩質烘焙專家 | 台北健康烘焙
              </h4>
              <p className="text-sm text-gray-700">
                健康烘焙坊提供低糖蛋糕、無麩質麵包等健康烘焙產品，專為糖尿病患者、麩質過敏者及注重健康飲食的消費者打造。線上訂購，全台宅配。
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">低糖蛋糕</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">無麩質麵包</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">健康烘焙</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">糖尿病友善</span>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-medium text-gray-800 mb-2">結構化資料 (JSON-LD)</h5>
              <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "健康烘焙坊",
  "url": "https://www.healthybakery.com",
  "logo": "https://www.healthybakery.com/logo.png",
  "description": "專業低糖無麩質烘焙專家，為特殊飲食需求打造美味又健康的烘焙體驗",
  "telephone": "(02) 1234-5678",
  "email": "info@healthybakery.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "健康路123號",
    "addressLocality": "台北市",
    "postalCode": "10001",
    "addressCountry": "TW"
  },
  "sameAs": [
    "https://www.facebook.com/healthybakery",
    "https://www.instagram.com/healthybakery"
  ]
}`}
              </pre>
            </div>
          </div>
          
          {/* 產品系列頁SERP預覽 */}
          <div className="mb-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-green-800 mb-4">產品系列頁</h3>
            <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
              <div className="mb-1">
                <span className="text-xs text-gray-600">https://www.healthybakery.com/products</span>
              </div>
              <h4 className="text-xl text-blue-700 font-medium mb-1 hover:underline cursor-pointer">
                健康烘焙產品系列 | 低糖蛋糕 | 無麩質麵包 | 健康烘焙坊
              </h4>
              <p className="text-sm text-gray-700">
                探索健康烘焙坊的產品系列，包括低糖生日蛋糕、無麩質麵包、健康手工餅乾及節慶特製產品。所有產品均使用天然食材，無添加糖，適合各種特殊飲食需求。
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">低糖蛋糕</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">無麩質麵包</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">健康餅乾</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">特殊飲食需求</span>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-medium text-gray-800 mb-2">結構化資料 (JSON-LD)</h5>
              <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-auto">
{`{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "低糖蛋糕系列",
      "url": "https://www.healthybakery.com/products/low-sugar-cakes",
      "image": "https://www.healthybakery.com/images/low-sugar-cake-series.jpg"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "無麩質麵包系列",
      "url": "https://www.healthybakery.com/products/gluten-free-bread",
      "image": "https://www.healthybakery.com/images/gluten-free-bread-series.jpg"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "健康餅乾系列",
      "url": "https://www.healthybakery.com/products/healthy-cookies",
      "image": "https://www.healthybakery.com/images/healthy-cookies-series.jpg"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "節慶特製產品",
      "url": "https://www.healthybakery.com/products/seasonal",
      "image": "https://www.healthybakery.com/images/seasonal-products-series.jpg"
    }
  ]
}`}
              </pre>
            </div>
          </div>
          
          {/* 低糖蛋糕系列頁SERP預覽 */}
          <div className="mb-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-green-800 mb-4">低糖蛋糕系列頁</h3>
            <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
              <div className="mb-1">
                <span className="text-xs text-gray-600">https://www.healthybakery.com/products/low-sugar-cakes</span>
              </div>
              <h4 className="text-xl text-blue-700 font-medium mb-1 hover:underline cursor-pointer">
                低糖蛋糕系列 | 糖尿病友善蛋糕 | 健康烘焙坊
              </h4>
              <p className="text-sm text-gray-700">
                健康烘焙坊的低糖蛋糕系列專為糖尿病患者及控制糖分攝入的消費者設計。使用天然甜味劑，無添加糖，口感細膩，風味絕佳。提供客製化服務，線上訂購。
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">低糖蛋糕</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">糖尿病友善蛋糕</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">低升糖指數蛋糕</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">無添加糖蛋糕</span>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-medium text-gray-800 mb-2">結構化資料 (JSON-LD)</h5>
              <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "低糖蛋糕系列",
  "image": "https://www.healthybakery.com/images/low-sugar-cake-series.jpg",
  "description": "健康烘焙坊的低糖蛋糕系列專為糖尿病患者及控制糖分攝入的消費者設計。使用天然甜味劑，無添加糖，口感細膩，風味絕佳。",
  "brand": {
    "@type": "Brand",
    "name": "健康烘焙坊"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "TWD",
    "lowPrice": "600",
    "highPrice": "1800",
    "offerCount": "10",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "125"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">SERP優化策略</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-4">標題優化策略</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>將主要關鍵字放在標題前端，增加關鍵字權重</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>使用豎線符號(|)分隔不同關鍵字，增加標題可讀性</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>控制標題長度在60個字元以內，避免在搜尋結果中被截斷</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>在標題中加入品牌名稱，增強品牌辨識度</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>使用吸引人的詞彙，如「專業」、「健康」等，提高點擊率</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-4">描述優化策略</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>在描述中自然融入關鍵字，增加相關性</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>控制描述長度在160個字元以內，避免在搜尋結果中被截斷</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>加入行動召喚語句，如「線上訂購」、「全台宅配」等，提高點擊率</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>突出產品特色與優勢，如「天然食材」、「無添加糖」等</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>描述內容與標題相呼應，增強一致性</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">結構化資料實施</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              結構化資料是一種標準化的格式，用於提供有關網頁內容的資訊，幫助搜尋引擎更好地理解網頁內容，並在搜尋結果中顯示更豐富的資訊。
              我們使用JSON-LD格式實施Schema.org標記，為不同類型的頁面添加適當的結構化資料。
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">已實施的結構化資料類型</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Organization</h4>
                  <p className="text-gray-700 text-sm">
                    用於首頁，提供公司名稱、標誌、聯絡資訊等基本資訊。
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">LocalBusiness</h4>
                  <p className="text-gray-700 text-sm">
                    用於聯絡我們頁面，提供門市地址、營業時間、評價等資訊。
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Product</h4>
                  <p className="text-gray-700 text-sm">
                    用於產品詳情頁，提供產品名稱、描述、價格、評價等資訊。
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">ItemList</h4>
                  <p className="text-gray-700 text-sm">
                    用於產品系列頁，提供產品列表資訊。
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Recipe</h4>
                  <p className="text-gray-700 text-sm">
                    用於部分產品頁面，提供成分、製作方法、營養資訊等。
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">BreadcrumbList</h4>
                  <p className="text-gray-700 text-sm">
                    用於所有頁面，提供網站導航路徑資訊。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-700 mb-6">
                結構化資料不僅可以提高搜尋結果的豐富度，還可能提高點擊率和網站權威性。
                我們將持續監控結構化資料的效果，並根據需要進行調整和優化。
              </p>
              <a 
                href="https://search.google.com/test/rich-results" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block"
              >
                使用Google結構化資料測試工具
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

document.dispatchEvent(new Event('prerender-ready'))

export default SERPPreviewPage;
