import Image from 'next/image';
import type { NextPage } from 'next';
import { StickyHeader } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { Link, ExternalLink } from '../../components/ui/Link';
import { Head } from '../../components/head';
import { Tags, Tag } from '../../components/ui/Tag';
import { Heading } from '../../components/ui/Heading';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head title="About | kimromi" description="About kimromi" />

      <StickyHeader>
        <Link href="/about">About</Link>
      </StickyHeader>

      <PageTransition>
        <main className="container z-0 px-4 mx-auto">
          <Heading level={2}>About me</Heading>

          <div className="leading-8">
            <p>kimromi(きむろみ)と申します。</p>
            <p>福岡でソフトウェアエンジニアをしている、2児の父です。</p>
            <p className="mt-6">
              アイコンは
              <s className="mx-1">オープンハウスのロゴとよく間違えられますが</s>
              ピエト・モンドリアンという画家のコンポジションという抽象画です。色味が好きなのと、なにかと抽象化するのが好きなのでこのアイコンにしていますが、特に美術には興味はないので深くつっこまれるとダンマリします。
            </p>
            <p className="mt-6">
              現在、株式会社マネーフォワードで
              <ExternalLink
                underline
                href="https://biz.moneyforward.com/expense/"
              >
                クラウド経費
              </ExternalLink>
              ・
              <ExternalLink
                underline
                href="https://biz.moneyforward.com/payable/"
              >
                クラウド債務支払
              </ExternalLink>
              を開発している開発部でテックリードとしてチーム全体の技術的支援や生産性向上の取り組みを中心に仕事をしています。
            </p>
          </div>

          <Heading level={3}>好きなもの・こと</Heading>
          <Tags>
            <Tag>キャンプ</Tag>
            <Tag>麻雀</Tag>
            <Tag>ダーツ</Tag>
            <Tag>ゴルフ</Tag>
            <Tag>野球</Tag>
            <Tag>ミニマル</Tag>
            <Tag>黒</Tag>
            <Tag>YouTube</Tag>
            <Tag>かけ・混ぜごはん</Tag>
          </Tags>

          <Border />

          <Heading level={2}>Works</Heading>

          <Timeline>
            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/role.png"
                  alt="change role"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>
              <Month>2022/02</Month>
              <EventTitle>テックリード</EventTitle>
              <EventNote>
                エンジニア組織, アーキテクト, 生産性向上, インフラ
              </EventNote>
              <Note url="https://note.com/embed/notes/n0f15317d25dd" />
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/launch.png"
                  alt="launch"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>
              <Month>2022/01</Month>
              <EventTitle>マネーフォワード福岡開発拠点サイト</EventTitle>
              <EventDescription>
                <ExternalLink href="https://fukuoka.moneyforward.com/">
                  https://fukuoka.moneyforward.com/
                </ExternalLink>
              </EventDescription>
              <EventDescription>フロントエンド</EventDescription>
              <EventNote>React(Next.js), TypeScript, Tailwind CSS</EventNote>
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/speaker.png"
                  alt="speaker"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>
              <Month>2021/09</Month>
              <EventTitle>
                フロントエンドカンファレンス福岡スピンオフ
                〜フロントエンドの現場 in 福岡〜
              </EventTitle>
              <EventDescription>
                https://fec-fukuoka.connpass.com/event/221846/
              </EventDescription>
              <ExternalLink href="https://speakerdeck.com/kimromi/money-forward-pay-for-business-frontend">
                <LinkCard
                  title="マネーフォワード Pay for Businessのフロントエンド"
                  category="Speaker Deck"
                />
              </ExternalLink>
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/launch.png"
                  alt="launch"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>
              <Month>2021/09</Month>
              <EventTitle>マネーフォワード Pay for Business</EventTitle>
              <EventDescription>
                <ExternalLink href="https://biz.moneyforward.com/biz-pay/">
                  https://biz.moneyforward.com/biz-pay/
                </ExternalLink>
              </EventDescription>
              <EventDescription>フロントエンド</EventDescription>
              <EventNote>React(Next.js), Redux, TypeScript, GraphQL</EventNote>
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/speaker.png"
                  alt="speaker"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>
              <Month>2020/09</Month>
              <EventTitle>
                <ExternalLink href="https://biz.moneyforward.com/biz-pay">
                  Frontend Conference Fukuoka スピンオフ ～福岡人大集合の会～
                </ExternalLink>
              </EventTitle>
              <EventDescription>
                https://fec-fukuoka.connpass.com/event/187391/
              </EventDescription>

              <ExternalLink href="https://speakerdeck.com/kimromi/moneyforward-expense-frontend">
                <LinkCard
                  title="マネーフォワードクラウド経費でのフロントエンドの取り組み"
                  category="Speaker Deck"
                />
              </ExternalLink>
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/office.png"
                  alt="job change"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>

              <Month>2019/09</Month>
              <EventTitle>Money Forward Inc.</EventTitle>
              <EventDescription>
                マネーフォワードビジネスカンパニー クラウド経費本部 開発部
              </EventDescription>
              <EventDescription>
                フロントエンドエンジニア / チームリーダー
              </EventDescription>
              <EventNote>React, Redux, TypeScript, GraphQL</EventNote>

              <Link href="/articles/0cl_o01665u7">
                <LinkCard
                  title="マネーフォワードにジョインして3ヶ月で取り組んだフロントエンドの改善と所感"
                  category="kimromi.com"
                />
              </Link>
            </Event>

            <Border />

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/role.png"
                  alt="change role"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>

              <Month>2019/01</Month>
              <EventTitle>シニアエンジニア</EventTitle>
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/launch.png"
                  alt="launch"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>
              <Month>2018/08</Month>
              <EventTitle>ムームードメイン サイトリニューアル</EventTitle>
              <EventDescription>フロントエンド</EventDescription>
              <EventNote>TypeScript, Vue.js(Nuxt.js)</EventNote>
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/role.png"
                  alt="change role"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>

              <Month>2017/09</Month>
              <EventTitle>チームリーダー</EventTitle>
              <EventDescription>
                ホスティング事業部 ムームードメイングループ
              </EventDescription>
              <EventNote>チームリーディング / 目標設定 / 評価 / 採用</EventNote>
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/speaker.png"
                  alt="speaker"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>
              <Month>2017/08</Month>
              <EventTitle>ペパボテックカンファレンス #9</EventTitle>
              <EventDescription>
                https://pepabo.connpass.com/event/63559/
              </EventDescription>

              <ExternalLink href="https://kimromi.hatenablog.jp/entry/2017/08/30/000000">
                <LinkCard
                  title="第9回ペパボテックカンファレンスでVue.js on Railsというテーマで発表しました"
                  category="kimromi.com"
                />
              </ExternalLink>
              <ExternalLink href="https://speakerdeck.com/kimromi/vue-js-on-rails">
                <LinkCard title="Vue.js on Rails" category="Speaker Deck" />
              </ExternalLink>
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/launch.png"
                  alt="launch"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>
              <Month>2017/07</Month>
              <EventTitle>ショッピングカート機能</EventTitle>
              <EventDescription>フロントエンド / バックエンド</EventDescription>
              <EventNote>JavaScript(Vue.js), Ruby on Rails</EventNote>

              <ExternalLink href="https://tech.pepabo.com/2017/07/26/muumuu-shopping-cart/">
                <LinkCard
                  title="ムームードメインがショッピングカート機能をリリースしました！"
                  category="external"
                  externalService="tech.pepabo.com"
                />
              </ExternalLink>
            </Event>

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/office.png"
                  alt="job change"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>

              <Month>2015/07</Month>
              <EventTitle>GMO Pepabo Inc.</EventTitle>
              <EventDescription>
                ホスティング事業部 ムームードメイングループ
              </EventDescription>
              <EventDescription>
                バックエンド / インフラ / フロントエンド
              </EventDescription>
              <EventNote>
                PHP, Ruby(Ruby on Rails), JavaScript(jQuery, CoffeeScript),
                MySQL, Chef, Terraform
              </EventNote>

              <ExternalLink href="https://speakerdeck.com/kimromi/prepare-muumuu-domains-javascript">
                <LinkCard
                  title="ムームードメインのJavaScript環境を整えた話"
                  category="Speaker Deck"
                />
              </ExternalLink>
              <ExternalLink href="https://speakerdeck.com/kimromi/saikyo-no-pull-request">
                <LinkCard
                  title="ぼくがかんがえたさいきょうのPull Request"
                  category="Speaker Deck"
                />
              </ExternalLink>
            </Event>

            <Border />

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/office.png"
                  alt="job change"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>

              <Month>2012/12</Month>
              <EventTitle>メディアファイブ株式会社</EventTitle>
              <EventDescription>バックエンドエンジニア(派遣)</EventDescription>
              <EventNote>Java(Struts), MySQL</EventNote>
            </Event>

            <Border />

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/office.png"
                  alt="job change"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>

              <Month>2011/04</Month>
              <EventTitle>Freelance</EventTitle>
              <EventDescription>Webデザイン・マークアップ</EventDescription>
              <EventNote>HTML, CSS, JavaScript</EventNote>
            </Event>

            <Border />

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/office.png"
                  alt="job change"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>

              <Month>2008/04</Month>
              <EventTitle>株式会社富士通九州システムズ(FJQS)</EventTitle>
              <EventDescription>システムエンジニア</EventDescription>
              <EventNote>Java(JSP), JavaScript(jQuery), SQL Server</EventNote>
            </Event>

            <Border />

            <Event>
              <EventIconWrapper>
                <Image
                  src="/about/graduate.png"
                  alt="graduate"
                  width={16}
                  height={16}
                />
              </EventIconWrapper>

              <Month>2008/03</Month>
              <EventTitle>北九州工業高等専門学校 専攻科 卒業</EventTitle>
              <EventDescription>制御工学専攻</EventDescription>
            </Event>
          </Timeline>
        </main>
      </PageTransition>

      <Footer showExternalServices />

      <script async src="https://note.com/scripts/embed.js" charSet="utf-8" />
    </>
  );
};

const Year = (props: { children: string }) => (
  <header className="mb-4 text-2xl" {...props} />
);
const Timeline = (props: { children: React.ReactNode }) => (
  <section
    className="relative before:absolute before:top-0 before:-bottom-6 mt-6 ml-2 before:w-[2px] before:content-[''] before:bg-tertiary"
    {...props}
  />
);
const Event = ({ children }: { children: React.ReactNode }) => (
  <div className="relative pl-7 mt-8">{children}</div>
);
const EventIconWrapper = (props: { children: React.ReactNode }) => (
  <div
    className="flex absolute top-1 left-[-15px] justify-center items-center w-8 h-8 bg-background rounded-full border-2 border-tertiary"
    {...props}
  />
);
const Month = (props: { children: string }) => (
  <p className="pt-[10px] text-sm text-tertiary" {...props} />
);
const EventTitle = (props: { children: React.ReactNode }) => (
  <p className="text-lg font-bold" {...props} />
);
const EventDescription = (props: { children: React.ReactNode }) => (
  <p className="mt-1 text-sm" {...props} />
);
const EventNote = (props: { children: React.ReactNode }) => (
  <p className="mt-1 text-sm text-tertiary" {...props} />
);

const LinkCard = ({
  title,
  category,
  externalService,
}: {
  title: string;
  category: 'kimromi.com' | 'Speaker Deck' | 'external';
  externalService?: string;
}) => {
  let imageSrc: string = '';
  let categoryStr: string = category;
  switch (category) {
    case 'kimromi.com':
      imageSrc = '/logo.png';
      break;
    case 'Speaker Deck':
      imageSrc = '/logos/speaker-deck.svg';
      break;
    case 'external':
      imageSrc = '/external.png';
      categoryStr = externalService || '';
      break;
  }

  return (
    <div className="flex items-start py-4 px-6 mt-4 bg-secondary rounded-md border border-secondary hover:border-tertiary duration-150 ease-in">
      <Image src={imageSrc} alt="link" width={20} height={20} />
      <div className="ml-2">
        <p>{title}</p>
        <p className="text-sm text-tertiary">{categoryStr}</p>
      </div>
    </div>
  );
};

const Note = ({ url }: { url: string }) => (
  <iframe src={url} className="mt-4 w-full" height="230" />
);

const Border = () => <div className="mt-12 border-t border-secondary" />;

export default AboutPage;
