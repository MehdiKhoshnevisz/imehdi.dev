import { useTranslation } from 'react-i18next';

const Languages = (props) => {
  const { t, i18n, ready } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const translationKeyClass = 'cursor-pointer hover:text-slate-700 transition-all';
  const isActiveTranslationTextColorClass = 'text-slate-700 font-bold';
  const defaultTranslationTextColorClass = 'text-slate-400';

  if (!ready) return '...';

  return (
    <div className="flex items-center justify-between">
      <nav className="flex">
        <span
          onClick={() => changeLanguage('en')}
          className={`${translationKeyClass} ${
            i18n.language === 'en'
              ? isActiveTranslationTextColorClass
              : defaultTranslationTextColorClass
          }`}>
          EN
        </span>
        &nbsp;
        <span
          onClick={() => changeLanguage('fa')}
          className={`${translationKeyClass} ${
            i18n.language === 'fa'
              ? isActiveTranslationTextColorClass
              : defaultTranslationTextColorClass
          }`}>
          FA
        </span>
      </nav>
    </div>
  );
};

export default Languages;
