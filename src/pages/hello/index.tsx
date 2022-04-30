import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTransition } from '../../components/layout/PageTransition';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello | kimromi</title>
      </Head>

      <Header isSticky>
        <span className="px-2 text-sm text-gray-600">/</span>
        <Link href="/hello">Hello</Link>
      </Header>

      <PageTransition>
        <main className="container z-0 px-4 mx-auto">
          <div className="text-3xl">Works</div>
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
                <a
                  href="https://fukuoka.moneyforward.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://fukuoka.moneyforward.com/
                </a>
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
              <a
                href="https://speakerdeck.com/kimromi/money-forward-pay-for-business-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <LinkCard
                  title="マネーフォワード Pay for Businessのフロントエンド"
                  category="Speaker Deck"
                />
              </a>
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
                <a
                  href="https://biz.moneyforward.com/biz-pay/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://biz.moneyforward.com/biz-pay/
                </a>
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
                <a
                  href="https://biz.moneyforward.com/biz-pay"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Conference Fukuoka スピンオフ ～福岡人大集合の会～
                </a>
              </EventTitle>
              <EventDescription>
                https://fec-fukuoka.connpass.com/event/187391/
              </EventDescription>

              <a
                href="https://speakerdeck.com/kimromi/moneyforward-expense-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <LinkCard
                  title="マネーフォワードクラウド経費でのフロントエンドの取り組み"
                  category="Speaker Deck"
                />
              </a>
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
                <a>
                  <LinkCard
                    title="マネーフォワードにジョインして3ヶ月で取り組んだフロントエンドの改善と所感"
                    category="kimromi.com"
                  />
                </a>
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

              <a
                href="https://kimromi.hatenablog.jp/entry/2017/08/30/000000"
                target="_blank"
                rel="noreferrer"
              >
                <LinkCard
                  title="第9回ペパボテックカンファレンスでVue.js on Railsというテーマで発表しました"
                  category="kimromi.com"
                />
              </a>
              <a
                href="https://speakerdeck.com/kimromi/vue-js-on-rails"
                target="_blank"
                rel="noreferrer"
              >
                <LinkCard title="Vue.js on Rails" category="Speaker Deck" />
              </a>
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

              <a
                href="https://tech.pepabo.com/2017/07/26/muumuu-shopping-cart/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkCard
                  title="ムームードメインがショッピングカート機能をリリースしました！"
                  category="external"
                  externalService="tech.pepabo.com"
                />
              </a>
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

              <a
                href="https://speakerdeck.com/kimromi/prepare-muumuu-domains-javascript"
                target="_blank"
                rel="noreferrer"
              >
                <LinkCard
                  title="ムームードメインのJavaScript環境を整えた話"
                  category="Speaker Deck"
                />
              </a>
              <a
                href="https://speakerdeck.com/kimromi/saikyo-no-pull-request"
                target="_blank"
                rel="noreferrer"
              >
                <LinkCard
                  title="ぼくがかんがえたさいきょうのPull Request"
                  category="Speaker Deck"
                />
              </a>
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

      <Footer />
      <script async src="https://note.com/scripts/embed.js" charSet="utf-8" />
    </>
  );
};

const Year = (props: { children: string }) => (
  <header className="mb-4 text-2xl" {...props} />
);
const Timeline = (props: { children: React.ReactNode }) => (
  <section
    className="relative before:absolute before:top-0 before:-bottom-6 mt-6 ml-2 before:w-[2px] before:content-[''] before:bg-gray-600"
    {...props}
  />
);
const Event = ({ children }: { children: React.ReactNode }) => (
  <div className="relative pl-7 mt-8">{children}</div>
);
const EventIconWrapper = (props: { children: React.ReactNode }) => (
  <div
    className="flex absolute top-1 left-[-15px] justify-center items-center w-8 h-8 bg-background rounded-full border-2 border-gray-300"
    {...props}
  />
);
const Month = (props: { children: string }) => (
  <p className="pt-[10px] text-sm text-gray-600" {...props} />
);
const EventTitle = (props: { children: React.ReactNode }) => (
  <p className="text-lg font-bold" {...props} />
);
const EventDescription = (props: { children: React.ReactNode }) => (
  <p className="mt-1 text-sm" {...props} />
);
const EventNote = (props: { children: React.ReactNode }) => (
  <p className="mt-1 text-sm text-gray-600" {...props} />
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
      imageSrc = '/logo.jpg';
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
    <div className="flex items-start py-4 px-6 mt-4 bg-gray-800 hover:bg-gray-700 rounded-md duration-150 ease-in">
      <Image src={imageSrc} alt="link" width={20} height={20} />
      <div className="ml-2">
        <p>{title}</p>
        <p className="text-sm text-gray-600">{categoryStr}</p>
      </div>
    </div>
  );
};

const Note = ({ url }: { url: string }) => (
  <iframe src={url} className="mt-4 w-full" height="230" />
);

const Border = () => <div className="mt-12 border-t border-gray-600" />;

export default AboutPage;
