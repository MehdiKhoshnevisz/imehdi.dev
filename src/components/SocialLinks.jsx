import { useTranslation } from 'react-i18next';

const SocialLinks = () => {
  const { t, i18n, ready } = useTranslation();
  const socials = t('socials', { returnObjects: true });

  if (!ready) return '...';

  return (
    <div className="md:flex">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className={`block text-slate-400 hover:text-slate-700 last:mb-0 mb-3 md:mb-0 ${
            i18n.language === 'fa' ? 'ml-3' : 'mr-3'
          }`}>
          {social.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
