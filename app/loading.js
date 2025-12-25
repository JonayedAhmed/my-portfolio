export default function RootLoading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center app-loading-bg">
            <div className="loader-shell">
                <div className="loader-3d">
                    <div className="inner one" />
                    <div className="inner two" />
                    <div className="inner three" />
                </div>
            </div>
        </div>
    );
}
