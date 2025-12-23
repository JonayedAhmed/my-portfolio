export default function ResumeLoading() {
    return (
        <div className="fixed inset-0 z-[9999] grid place-items-center pointer-events-none bg-transparent">
            <div className="loader-3d">
                <div className="inner one" />
                <div className="inner two" />
                <div className="inner three" />
            </div>
        </div>
    );
}
