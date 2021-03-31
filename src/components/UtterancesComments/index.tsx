const UtterancesComments: React.FC = () => {
  return (
    <section
      ref={element => {
        if (!element) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.crossOrigin = 'anonymous';
        scriptElem.setAttribute(
          'repo',
          process.env.NEXT_PUBLIC_UTTERANC_GITHUB_REPO
        );
        scriptElem.setAttribute('issue-term', 'pathname');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.setAttribute('theme', 'photon-dark');
        element.appendChild(scriptElem);
      }}
    />
  );
};

export default UtterancesComments;
