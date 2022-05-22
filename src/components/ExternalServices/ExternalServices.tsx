import Image from 'next/image';
import { ExternalLink } from '../ui/Link';

export const ExternalServices: React.FC = () => (
  <div className="flex gap-4 justify-center">
    <ExternalLink href="https://twitter.com/kimromi">
      <Image src="/logos/twitter.svg" alt="twitter" width={20} height={20} />
    </ExternalLink>

    <ExternalLink href="http://github.com/kimromi">
      <Image
        src="/logos/github-white.png"
        alt="github"
        width={20}
        height={20}
      />
    </ExternalLink>

    <ExternalLink href="https://speakerdeck.com/kimromi">
      <Image
        src="/logos/speaker-deck.svg"
        alt="speaker-deck"
        width={20}
        height={20}
      />
    </ExternalLink>

    <ExternalLink href="https://zenn.dev/kimromi">
      <Image src="/logos/zenn.svg" alt="zenn" width={20} height={20} />
    </ExternalLink>
  </div>
);
