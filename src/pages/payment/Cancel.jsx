
const Cancel = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-100">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
                <h1 className="text-2xl font-bold text-red-600">Subscription Cancelled</h1>
                <p>Your subscription process has been cancelled. No charges were made.</p>
                <a href="/" className="text-blue-500 hover:underline">Go to Dashboard</a>
            </div>
        </div>
    );
};

export default Cancel;
