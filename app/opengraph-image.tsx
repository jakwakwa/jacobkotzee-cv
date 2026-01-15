import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Jacob Kotzee - Senior Front-End Engineer';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0f172a', // slate-900
                        width: '100%',
                        height: '100%',
                        padding: '4rem',
                        color: 'white',
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 'bold',
                            marginBottom: 24,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Jacob Kotzee
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: '#60a5fa', // blue-400
                            marginBottom: 48,
                            fontWeight: 500,
                        }}
                    >
                        Senior Front-End Engineer
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '24px',
                            fontSize: 24,
                            color: '#cbd5e1', // slate-300
                        }}
                    >
                        <span>React.js</span>
                        <span>•</span>
                        <span>Next.js</span>
                        <span>•</span>
                        <span>TypeScript</span>
                        <span>•</span>
                        <span>Tailwind</span>
                    </div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image size config
            ...size,
        }
    );
}
