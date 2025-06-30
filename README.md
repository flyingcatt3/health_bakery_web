# 健康烘焙坊網站

## 📖 專案簡介

健康烘焙坊是一個專注於低糖、無麩質烘焙產品的專業網站。我們致力於為特殊飲食需求的消費者（如糖尿病患者、麩質過敏者）提供美味又健康的烘焙體驗。

### 🎯 主要功能

- **產品展示**：展示低糖蛋糕、無麩質麵包等健康烘焙產品
- **健康知識**：提供健康飲食相關知識和建議
- **線上訂購**：支援線上訂購和全台宅配服務
- **SEO 優化**：完整的 SEO 功能，包含 SERP 預覽和 SEO 驗證工具
- **響應式設計**：支援各種裝置的響應式網頁設計

## 🛠 技術棧

### 前端框架
- **React 18** - 現代化的 React 框架
- **TypeScript** - 型別安全的 JavaScript
- **Vite** - 快速的建構工具

### UI 組件庫
- **Radix UI** - 無障礙的 React 組件庫
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Framer Motion** - 動畫庫
- **Lucide React** - 圖示庫

### 路由與表單
- **React Router DOM** - 客戶端路由
- **React Hook Form** - 表單處理
- **Zod** - 型別驗證

### SEO 與效能
- **React Helmet Async** - 動態 SEO 標籤管理
- **Vite Plugin Prerender** - 靜態網站生成 (SSG)

## 📁 專案結構

```
health_bakery_web/
├── public/                 # 靜態資源
├── src/
│   ├── components/         # 可重複使用的組件
│   ├── pages/             # 頁面組件
│   │   ├── HomePage.tsx           # 首頁
│   │   ├── ProductsPage.tsx       # 產品頁面
│   │   ├── AboutUsPage.tsx        # 關於我們
│   │   ├── HealthKnowledgePage.tsx # 健康知識
│   │   ├── ContactUsPage.tsx      # 聯絡我們
│   │   ├── SERPPreviewPage.tsx    # SERP 預覽
│   │   ├── InternalLinksPage.tsx  # 內部連結
│   │   ├── SEOValidationPage.tsx  # SEO 驗證
│   │   └── NotFoundPage.tsx       # 404 頁面
│   ├── hooks/             # 自定義 React Hooks
│   ├── lib/               # 工具函數和配置
│   ├── assets/            # 圖片和其他資源
│   ├── App.tsx            # 主要應用組件
│   └── main.tsx           # 應用入口點
├── package.json           # 專案依賴
├── vite.config.ts         # Vite 配置
├── tailwind.config.js     # Tailwind CSS 配置
└── tsconfig.json          # TypeScript 配置
```

## 🚀 快速開始

### 環境需求

- Node.js 18.0 或更高版本
- npm 或 pnpm 套件管理器

### 安裝步驟

1. **克隆專案**
   ```bash
   git clone [repository-url]
   cd health_bakery_web
   ```

2. **安裝依賴**
   ```bash
   # 使用 npm
   npm install
   
   # 或使用 pnpm (推薦)
   pnpm install
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   # 或
   pnpm dev
   ```

4. **開啟瀏覽器**
   訪問 [http://localhost:5173](http://localhost:5173)

### 建置專案

```bash
# 建置生產版本
npm run build

# 預覽建置結果
npm run preview
```

### 程式碼檢查

```bash
# 執行 ESLint 檢查
npm run lint
```

## 📱 頁面功能

### 主要頁面

- **首頁** (`/`) - 品牌介紹、產品精選、最新活動
- **產品頁面** (`/products`) - 完整產品目錄和詳細資訊
- **關於我們** (`/about-us`) - 品牌故事、團隊介紹
- **健康知識** (`/health-knowledge`) - 健康飲食相關文章
- **聯絡我們** (`/contact-us`) - 聯絡方式和表單

### SEO 工具頁面

- **SERP 預覽** (`/serp-preview`) - 搜尋結果預覽工具
- **內部連結** (`/internal-links`) - 網站內部連結管理
- **SEO 驗證** (`/seo-validation`) - SEO 檢查和建議

## 🎨 設計特色

- **健康導向**：以綠色為主色調，營造健康、自然的品牌形象
- **無障礙設計**：符合 WCAG 標準，確保所有使用者都能順利使用
- **響應式佈局**：完美適配桌面、平板和手機裝置
- **現代化 UI**：使用最新的設計趨勢和動畫效果

## 🔧 開發指南

### 新增頁面

1. 在 `src/pages/` 目錄下建立新的頁面組件
2. 在 `src/App.tsx` 中新增路由配置
3. 在 `vite.config.ts` 的 `routes` 陣列中新增路徑（用於預渲染）

### 樣式指南

- 使用 Tailwind CSS 類別進行樣式設計
- 遵循 BEM 命名慣例
- 保持一致的色彩和間距系統

### 組件開發

- 使用 TypeScript 進行型別定義
- 遵循 React 最佳實踐
- 確保組件的可重用性和可維護性

## 📊 SEO 功能

### 已實作功能

- 動態 Meta 標籤管理
- 結構化資料 (Schema.org)
- 靜態網站生成 (SSG)
- 內部連結優化
- 圖片 Alt 文字優化

### SEO 工具

- SERP 預覽工具
- SEO 驗證檢查器
- 內部連結分析器

## 📄 授權

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

---

**健康烘焙坊** - 美味與健康的完美結合 🍰
