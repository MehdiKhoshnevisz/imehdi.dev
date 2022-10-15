import { useTranslation } from 'react-i18next';

import Languages from '@/components/Languages';
import SocialLinks from '@/components/SocialLinks';

const Content = (props) => {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return '...';

  return (
    <>
      <main className="md:max-w-5xl mb-10">
        <div className="text-teal-500 font-extrabold md:hidden"></div>
        <h1 className="text-4xl md:text-5xl text-slate-900 font-bold mb-10">{t('hello')}</h1>
        <div className="mb-10">
          <p
            className="text-xl md:text-2xl text-slate-800 font-semibold leading-loose md:leading-normal mb-2"
            dangerouslySetInnerHTML={{ __html: t('intro') }}
          />
          <p
            className="text-slate-500 text-justify leading-loose"
            dangerouslySetInnerHTML={{ __html: t('description') }}
          />
        </div>
        <div>
          <a
            href={t('buttons.cta.url')}
            className="inline-block text-white bg-slate-800 rounded-xl px-3 py-2 my-1 md:my-0">
            {t('buttons.cta.title')}
          </a>
          &nbsp; &nbsp;
          <span className="text-slate-800 text-2xl md:text-3xl align-middle">
            {i18n.language === 'fa' ? 'یا' : 'or'}
          </span>
          &nbsp; &nbsp;
          <a
            href={t('buttons.invite.url')}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-dark rounded-xl px-3 py-2 my-1 md:my-0 font-light"
            style={{ backgroundColor: 'rgba(255,221,0,1)' }}>
            {t('buttons.invite.title')}
          </a>
        </div>
      </main>
      <div className="flex items-end justify-between">
        <SocialLinks />
        <Languages />
      </div>
    </>
  );
};

export default Content;
