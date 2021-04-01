import { useEffect, useRef } from 'react';

export default function UtterancesComments(): JSX.Element {
  const commentsDiv = useRef<HTMLDivElement>();

  useEffect(() => {
    if (commentsDiv) {
      const scriptEl = document.createElement('script');
      scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
      scriptEl.setAttribute('crossorigin', 'anonymous');
      scriptEl.setAttribute('async', 'true');
      scriptEl.setAttribute(
        'repo',
        process.env.NEXT_PUBLIC_UTTERANC_GITHUB_REPO
      );
      scriptEl.setAttribute('issue-term', 'pathname');
      scriptEl.setAttribute('theme', 'photon-dark');
      commentsDiv.current.appendChild(scriptEl);
    }
  }, []);

  return <div ref={commentsDiv} />;
}
