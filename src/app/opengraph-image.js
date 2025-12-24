import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Jonayed Ahmed Riduan - Software Engineer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1a0f0a 0%, #1f1218 25%, #1a1428 50%, #14182a 75%, #0f1520 100%)',
                    fontFamily: 'Inter, sans-serif',
                }}
            >
                {/* Gradient orbs */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        left: '-100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'rgba(124, 45, 18, 0.3)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'rgba(88, 28, 135, 0.3)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'rgba(112, 26, 117, 0.2)',
                        filter: 'blur(100px)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            fontSize: '24px',
                            color: '#64ffda',
                            marginBottom: '16px',
                            letterSpacing: '2px',
                        }}
                    >
                        PORTFOLIO
                    </div>
                    <div
                        style={{
                            fontSize: '72px',
                            fontWeight: 'bold',
                            color: '#ccd6f6',
                            marginBottom: '16px',
                            textAlign: 'center',
                        }}
                    >
                        Jonayed Ahmed Riduan
                    </div>
                    <div
                        style={{
                            fontSize: '32px',
                            color: '#8892b0',
                            marginBottom: '32px',
                        }}
                    >
                        Software Engineer
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            fontSize: '20px',
                            color: '#64ffda',
                        }}
                    >
                        <span>React.js</span>
                        <span>•</span>
                        <span>Next.js</span>
                        <span>•</span>
                        <span>TypeScript</span>
                        <span>•</span>
                        <span>Node.js</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
