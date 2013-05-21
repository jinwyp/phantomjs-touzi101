// Render Multiple URLs to file

var  website = [
    {"pagename":"homepage-homepage", "url":"http://www.touzi101.cn/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
    {"pagename":"channel-Dictionary", "url":"http://www.touzi101.cn/dictionary/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
    {"pagename":"channelmore-RecentlyAdded", "url":"http://www.touzi101.cn/terms/RecentlyAdded", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""}
//    {"pagename":"channelmore-termlist", "url":"http://www.touzi101.cn/terms/b/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Investing Basics", "url":"http://www.touzi101.cn/dictionary/investing-basics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Active Trading", "url":"http://www.touzi101.cn/dictionary/active-trading/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Forex", "url":"http://www.touzi101.cn/dictionary/forex/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Technical Analysis", "url":"http://www.touzi101.cn/dictionary/technical-analysis/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Fundamental Analysis", "url":"http://www.touzi101.cn/dictionary/fundamentals/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Insurance", "url":"http://www.touzi101.cn/dictionary/insurance/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Futures", "url":"http://www.touzi101.cn/dictionary/futures/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Stocks", "url":"http://www.touzi101.cn/dictionary/stocks/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Bonds", "url":"http://www.touzi101.cn/dictionary/bonds/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Personal Finance", "url":"http://www.touzi101.cn/dictionary/personal-finance/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Accounting", "url":"http://www.touzi101.cn/dictionary/accounting/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Economics", "url":"http://www.touzi101.cn/dictionary/economics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channel-Investing", "url":"http://www.touzi101.cn/investing/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channelmore-investnews", "url":"http://www.touzi101.cn/tags/investing-news/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channelmore-investalltutorials", "url":"http://www.touzi101.cn/tutorials/all/basics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channelmore-investarticles", "url":"http://www.touzi101.cn/investing/listallcontent", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Investing Basics", "url":"http://www.touzi101.cn/investing/investing-basics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Stocks", "url":"http://www.touzi101.cn/investing/stocks/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Bonds", "url":"http://www.touzi101.cn/investing/bonds/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Funds", "url":"http://www.touzi101.cn/investing/funds/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Fundamental Analysis", "url":"http://www.touzi101.cn/investing/fundamental-analysis/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-fundamentals", "url":"http://www.touzi101.cn/tags/fundamentals/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-financial-theory", "url":"http://www.touzi101.cn/tags/financial-theory/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-accounting", "url":"http://www.touzi101.cn/tags/accounting/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-portfolio-management", "url":"http://www.touzi101.cn/tags/portfolio-management/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Economics", "url":"http://www.touzi101.cn/investing/economics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channel-Personal Finance", "url":"http://www.touzi101.cn/personal-finance/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channelmore-whatnew", "url":"http://www.touzi101.cn/personal-finance/whatsnew", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channelmore-personal-finance-fundamentals", "url":"http://www.touzi101.cn/personal-finance/fundamentals", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Savings", "url":"http://www.touzi101.cn/personal-finance/savings/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Credit & Loans", "url":"http://www.touzi101.cn/personal-finance/credit-loans/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Credit Cards", "url":"http://www.touzi101.cn/personal-finance/credit-cards/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Budgeting", "url":"http://www.touzi101.cn/personal-finance/budgeting", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Insurance", "url":"http://www.touzi101.cn/personal-finance/insurance/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Retirement", "url":"http://www.touzi101.cn/personal-finance/retirement/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channel-Active Trading", "url":"http://www.touzi101.cn/active-trading/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channelmore-chart", "url":"http://www.touzi101.cn/tags/chart-types/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Fundamentals", "url":"http://www.touzi101.cn/active-trading/fundamentals", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-trading-psychology", "url":"http://www.touzi101.cn/tags/trading-psychology", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-risk-management", "url":"http://www.touzi101.cn/tags/risk-management", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-trends", "url":"http://www.touzi101.cn/tags/trends", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-short-selling", "url":"http://www.touzi101.cn/tags/short-selling", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Technical Analysis", "url":"http://www.touzi101.cn/active-trading/technical-analysis", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Trading Strategies", "url":"http://www.touzi101.cn/active-trading/trading-strategies/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-day-trading", "url":"http://www.touzi101.cn/tags/day-trading", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-position-trading", "url":"http://www.touzi101.cn/tags/position-trading", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-swing-trading", "url":"http://www.touzi101.cn/tags/swing-trading", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchmore-momentum-trading", "url":"http://www.touzi101.cn/tags/momentum-trading", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Trading System & Software", "url":"http://www.touzi101.cn/active-trading/trading-system-software/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Futures", "url":"http://www.touzi101.cn/active-trading/futures/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Options", "url":"http://www.touzi101.cn/active-trading/options/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channel-Forex", "url":"http://www.touzi101.cn/forex/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Walkthrough", "url":"http://www.touzi101.cn/forex/walkthrough/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Fundamentals", "url":"http://www.touzi101.cn/forex/fundamentals", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Trading Strategies", "url":"http://www.touzi101.cn/forex/trading-strategies/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channel-Professionals", "url":"http://www.touzi101.cn/professionals/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Global Professional Exams", "url":"http://www.touzi101.cn/professionals/global-professional-exams/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Chinese Professional Exams", "url":"http://www.touzi101.cn/professionals/chinese-professional-exams/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Charted Financial Analyst -CFA", "url":"http://www.touzi101.cn/professionals/charted-financial-analyst-cfa/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Careers", "url":"http://www.touzi101.cn/professionals/careers/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"channel-Tutorials", "url":"http://www.touzi101.cn/tutorials/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-at", "url":"http://www.touzi101.cn/tags/active-trading/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-forex", "url":"http://www.touzi101.cn/tags/forex/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-pf", "url":"http://www.touzi101.cn/tags/personal-finance/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-fundamentals", "url":"http://www.touzi101.cn/tags/fundamentals/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-ib", "url":"http://www.touzi101.cn/tags/investing-basics/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-stocks", "url":"http://www.touzi101.cn/tags/stocks/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-bonds", "url":"http://www.touzi101.cn/tags/bonds/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-funds", "url":"http://www.touzi101.cn/tags/funds/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-futures", "url":"http://www.touzi101.cn/tags/futures/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-Tutorials-economics", "url":"http://www.touzi101.cn/tags/economics/tutorial/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-at", "url":"http://www.touzi101.cn/tags/active-trading/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-forex", "url":"http://www.touzi101.cn/tags/forex/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-pf", "url":"http://www.touzi101.cn/tags/personal-finance/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-fundamentals", "url":"http://www.touzi101.cn/tags/fundamentals/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-ib", "url":"http://www.touzi101.cn/tags/investing-basics/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-stocks", "url":"http://www.touzi101.cn/tags/stocks/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-bonds", "url":"http://www.touzi101.cn/tags/bonds/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-funds", "url":"http://www.touzi101.cn/tags/funds/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-insurance", "url":"http://www.touzi101.cn/tags/insurance/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-real-estate", "url":"http://www.touzi101.cn/tags/real-estate/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-futures", "url":"http://www.touzi101.cn/tags/futures/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-articles-economics", "url":"http://www.touzi101.cn/tags/economics/article/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-pf", "url":"http://www.touzi101.cn/tags/personal-finance/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-fundamentals", "url":"http://www.touzi101.cn/tags/fundamentals/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-ib", "url":"http://www.touzi101.cn/tags/investing-basics/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-stocks", "url":"http://www.touzi101.cn/tags/stocks/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-bonds", "url":"http://www.touzi101.cn/tags/bonds/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-funds", "url":"http://www.touzi101.cn/tags/funds/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-insurance", "url":"http://www.touzi101.cn/tags/insurance/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-real-estate", "url":"http://www.touzi101.cn/tags/real-estate/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-futures", "url":"http://www.touzi101.cn/tags/futures/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"subchannel-faq-economics", "url":"http://www.touzi101.cn/tags/economics/faq/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-basics-dictionary", "url":"http://www.touzi101.cn/dictionary/basics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-basics-article", "url":"http://www.touzi101.cn/articles/basics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-basics-slideshow", "url":"http://www.touzi101.cn/slideshows/basics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-basics-tutorial", "url":"http://www.touzi101.cn/tutorials/all/basics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-basics-faq", "url":"http://www.touzi101.cn/faqs/basics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-dictionary", "url":"http://www.touzi101.cn/dictionary/pf/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-article", "url":"http://www.touzi101.cn/articles/pf/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-slideshow", "url":"http://www.touzi101.cn/slideshows/pf/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-tutorial", "url":"http://www.touzi101.cn/tutorials/all/pf/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-faq", "url":"http://www.touzi101.cn/faqs/pf/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-trading-dictionary", "url":"http://www.touzi101.cn/dictionary/trading/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-trading-article", "url":"http://www.touzi101.cn/articles/trading/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-trading-slideshow", "url":"http://www.touzi101.cn/slideshows/trading/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-trading-tutorial", "url":"http://www.touzi101.cn/tutorials/all/trading/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-trading-faq", "url":"http://www.touzi101.cn/faqs/trading/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-dictionary", "url":"http://www.touzi101.cn/dictionary/fx/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-article", "url":"http://www.touzi101.cn/articles/fx/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-slideshow", "url":"http://www.touzi101.cn/slideshows/fx/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-tutorial", "url":"http://www.touzi101.cn/tutorials/all/fx/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-pf-faq", "url":"http://www.touzi101.cn/faqs/fx/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-CFA1", "url":"http://www.touzi101.cn/professionals/111457/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-CFA2", "url":"http://www.touzi101.cn/professionals/111458/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-CFA3", "url":"http://www.touzi101.cn/professionals/111459/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-FRM1", "url":"http://www.touzi101.cn/professionals/111460/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-FRM2", "url":"http://www.touzi101.cn/professionals/111461/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-exam1", "url":"http://www.touzi101.cn/professionals/111190/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-exam2", "url":"http://www.touzi101.cn/professionals/111454/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-exam3", "url":"http://www.touzi101.cn/professionals/111453/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-exam4", "url":"http://www.touzi101.cn/professionals/111455", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"menu-exam5", "url":"http://www.touzi101.cn/professionals/111456", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Tags-All tags list", "url":"http://www.touzi101.cn/tags/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Tags list-Tag term list", "url":"http://www.touzi101.cn/tags/investing-basics/definitions/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Tags list-Tag Article list", "url":"http://www.touzi101.cn/tags/investing-basics/articles/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Tags list-Tag walkthroughs/tutorials  list", "url":"http://www.touzi101.cn/tags/investing-basics/tutorials/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Tags list-Tag FAQs list", "url":"http://www.touzi101.cn/tags/investing-basics/faqs/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Tags list-Tag Slideshows list", "url":"http://www.touzi101.cn/tags/investing-basics/slideshows/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Single tag-Tag content-type page ", "url":"http://www.touzi101.cn/tags/investing-basics/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Landing page-Single term ", "url":"http://www.touzi101.cn/terms/100ID", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Landing page-Single article", "url":"http://www.touzi101.cn/articles/20130506/200112577/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Landing page-Single walkthroughs/tutorials  ", "url":"http://www.touzi101.cn/tutorials/300111420/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Landing page-Single FAQs ", "url":"http://www.touzi101.cn/faqs/20130503/400111468/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Landing page-Single Slideshows ", "url":"http://www.touzi101.cn/slideshows/500112669/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"Landing page-Single examprep ", "url":"http://www.touzi101.cn/professionals/111457/", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"footer-advertise", "url":"http://www.touzi101.cn/corp/advertise", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"footer-writeforus", "url":"http://www.touzi101.cn/corp/writeforus", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"footer-contactus", "url":"http://www.touzi101.cn/corp/contactus", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"footer-termsofuse", "url":"http://www.touzi101.cn/corp/termsofuse", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"footer-privacypolicy", "url":"http://www.touzi101.cn/corp/privacypolicy", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""},
//    {"pagename":"footer-disclaimerpolicy", "url":"http://www.touzi101.cn/corp/disclaimerpolicy", "title":"", "keyword":"", "description":"", "h1":"", "h2":"", "status":"", "filename":""}


];

var RenderUrlsToFile,  system;
system = require("system");



/*
Render given urls
@param array of URLs to render
@param callbackPerUrl Function called after finishing each URL, including the last URL
@param callbackFinal Function called after finishing everything
*/
RenderUrlsToFile = function(websitedata, callbackPerUrl, callbackFinal) {
    var  next, finish, page, retrieve, urlIndex, webpage, websiteresult;
    websiteresult = [];
    urlIndex = 0;
    webpage = require("webpage");
    page = null;

    next = function(status, pagedata) {
        page.close();
        callbackPerUrl(status, pagedata);
        return retrieve();
    };

    finish = function(result) {
        return callbackFinal(result);
    };

    retrieve = function() {
        var pagedata ;
        if (websitedata.length > 0) {
            pagedata = website.shift();
            urlIndex++;
            page = webpage.create();
            page.viewportSize = {
                width: 1024,
                height: 768
            };
            page.settings.userAgent = "Phantom.js bot";

            page.open(pagedata.url, function(status) {
                var datenow = new Date();
                var starttime = datenow.getFullYear()+"-"+datenow.getMonth()+1+"-"+datenow.getDate()+"-"+datenow.getHours()+":"+datenow.getMinutes()+":"+datenow.getSeconds() ;

                pagedata.filename = pagedata.pagename + "-num" + urlIndex + ".png";
                pagedata.status = status;
                console.log("Start to capture page: " + pagedata.url + ". save in:" + pagedata.filename + ". starttime:" + starttime);

                if (status === "success") {
                    pagedata = page.evaluate(function(pagedata1) {
//                        pagedata1.title = document.titlel;
                        pagedata1.title = document.querySelector("title").innerText;
                        pagedata1.keyword = document.querySelector("meta[name=Keywords]").getAttribute("content");
                        pagedata1.description = document.querySelector("meta[name=Description]").getAttribute("content");
                        pagedata1.h1 = document.querySelector("h1").innerText;
                        pagedata1.h2 = document.querySelector("h2").innerText;

                        return pagedata1;
                    }, pagedata);
                    websiteresult.push(pagedata);

/*
                    Using  jQuery
                    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
                        page.evaluate(function() {
                            $("button").click();
                        });
                        phantom.exit()
                    });
*/


                    window.setTimeout((function() {
                        page.render("./touzi101/" + pagedata.filename);

                        var datenow = new Date();
                        var endtime = datenow.getFullYear()+"-"+datenow.getMonth()+1+"-"+datenow.getDate()+"-"+datenow.getHours()+":"+datenow.getMinutes()+":"+datenow.getSeconds() ;

                        console.log("Finish capture time: " + endtime);
                        return next(status, pagedata);
                    }), 200);

                } else {
                    websiteresult.push(pagedata);
                    return next(status, pagedata);
                }
            });

        } else {
            return finish(websiteresult);
        }
    };
    return retrieve();
};




if (system.args.length > 1) {
//    arrayOfUrls = Array.prototype.slice.call(system.args, 1);
} else {
    console.log("Usage: phantomjs --config=config.json captureurl.js ");
    console.log("Check Result on http://localhost:8080/ ");

}

RenderUrlsToFile(website, (function(status, pagedata) {
    if (status !== "success") {
        return console.log("Unable to render '" + pagedata.url + "'");
    } else {
        return console.log("Finished Rendering '" + pagedata.url + "' at ' Title:" + pagedata.filename + "'" + pagedata.title);
    }
}), function(result) {
    console.log("Final Result: " + result.length);
    var server = require('webserver').create();
    var service = server.listen(8080, function(request, response) {
        response.statusCode = 200;
        response.write('<html><body><table>');
                    response.write('<tr>');
            response.write('<th>' +'PAGE NAME'  + '</th>');
            response.write('<th>' + 'PAGE TITLE'  + '</th>');
            response.write('<th>' + 'PAGE URL'  + '</th>');
            response.write('<th>' + 'PAGE KEYWORDS'  + '</th>');
            response.write('<th>' + 'PAGE DESCRIPTION'  + '</th>');
            response.write('<th>' + 'PAGE STATUS'  + '</th>');
            response.write('<th>' + 'PAGE IMAGE NAME'  + '</th>');
            response.write('</tr>');
        for(var i=0; i<result.length; i++){
            response.write('<tr>');
            response.write('<td>' + result[i].pagename  + '</td>');
            response.write('<td>' + result[i].title  + '</td>');
            response.write('<td>' + result[i].url  + '</td>');
            response.write('<td>' + result[i].keyword  + '</td>');
            response.write('<td>' + result[i].description  + '</td>');
            response.write('<td>' + result[i].status  + '</td>');
            response.write('<td>' + result[i].filename  + '</td>');
            response.write('</tr>');
        }

        response.write('</table></body></html>');

        response.close();
    });

//    phantom.exit()

});
