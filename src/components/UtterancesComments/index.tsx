// Code by:
// https://www.gregorygaines.com/blog/posts/2020/11/21/how-to-integrate-utterances-in-react-with-reloading-comments
import { useEffect } from 'react';

const addUtterancesScript = (
  parentElement: HTMLElement,
  repo: string,
  label: string,
  issueTerm: string,
  theme: string,
  isIssueNumber: boolean
): void => {
  const script = document.createElement('script');
  script.setAttribute('src', 'https://utteranc.es/client.js');
  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('async', 'true');
  script.setAttribute('repo', repo);

  if (label !== '') {
    script.setAttribute('label', label);
  }

  if (isIssueNumber) {
    script.setAttribute('issue-number', issueTerm);
  } else {
    script.setAttribute('issue-term', issueTerm);
  }

  script.setAttribute('theme', theme);

  parentElement.appendChild(script);
};

const UtterancesComments = (): JSX.Element => {
  const repo = process.env.NEXT_PUBLIC_UTTERANC_GITHUB_REPO;
  const theme = 'photon-dark';
  const issueTerm = 'pathname';
  const label = 'Comments';

  useEffect(() => {
    // Get comments box
    const commentsBox = document.getElementById('commentsBox');

    // Check if comments box is loaded
    if (!commentsBox) {
      return;
    }

    // Get utterances
    const utterances = document.getElementsByClassName('utterances')[0];

    // Remove utterances if it exists
    if (utterances) {
      utterances.remove();
    }

    // Add utterances script
    addUtterancesScript(commentsBox, repo, label, issueTerm, theme, false);
  });

  return <div id="commentsBox" />;
};

export default UtterancesComments;
