import { useTranslation } from 'react-i18next';

import Content from '@/components/Content';

const App = () => {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return '...';

  return (
    <div id="app">
      <div className={`container app-content ${i18n.language === 'fa' ? 'app-content--rtl' : ''}`}>
        <Content />
      </div>
    </div>
  );
};

export default App;
