import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(
  new URL('../../assets/NotoSansJP-Medium.woff', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title')?.slice(0, 100);

    const fontData = await font;

    return new ImageResponse(
      title ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            background: '#191919',
            color: '#f4f4f5',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '100px 150px 0 150px',
              wordBreak: 'break-all',
              fontSize: 60,
              fontFamily: '"NotoSansJP"',
            }}
          >
            {title}
          </div>

          <div
            style={{
              position: 'absolute',
              right: 120,
              bottom: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              fontSize: 32,
              fontFamily: 'serif',
            }}
          >
            <img
              width="32"
              height="32"
              src="https://kimromi.com/logo.png"
              style={{
                margin: '0.5rem 0.75rem 0 0',
              }}
            />
            kimromi
          </div>
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#191919',
            color: '#f4f4f5',
            fontSize: 44,
          }}
        >
          <img
            width="38"
            height="38"
            src="https://kimromi.com/logo.png"
            style={{
              margin: '10px 20px 0 0',
            }}
          />
          kimromi
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'NotoSansJP',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
