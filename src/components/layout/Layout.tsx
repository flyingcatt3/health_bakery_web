import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}> = ({ children, title, description, keywords }) => {
  const defaultTitle = "健康烘焙坊 - 專業低糖無麩質烘焙專家 | 糖尿病友善蛋糕 | 特殊飲食需求烘焙";
  const defaultDescription = "健康烘焙坊專注於提供低糖、無麩質的健康烘焙產品，包括適合糖尿病患者的生日蛋糕、麩質過敏者的專用麵包，以及各種特殊飲食需求的手工點心。我們使用天然食材，無添加糖，為您打造美味又健康的烘焙體驗。";
  const defaultKeywords = "健康烘焙，低糖蛋糕，無麩質麵包，糖尿病友善點心，特殊飲食需求，健康烘焙坊";

  return (
    <>
      <Helmet>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
