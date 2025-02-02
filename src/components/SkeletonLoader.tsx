const SkeletonLoader = () => {
    // ایجاد ساختار اسکلتون مانند خود جدول اصلی
    const days = Array.from({length: 7}, (_, i) => `روز ${i + 1}`);
    const hours = Array.from({length: 17}, (_, i) => `${8 + i}:00`);

    return (
        <div className="container mx-auto p-4">
            <table className="w-full table-fixed border border-purple-300 rounded-lg overflow-hidden shadow-md animate-pulse">
                <thead className="bg-purple-300">
                <tr>
                    <th className="p-3 text-center border-r border-purple-400">
                        <div className="w-6 h-6  mx-auto rounded"></div>
                    </th>
                    {days.map((index) => (
                        <th key={index} className="p-3 text-center border-r border-purple-400">
                            <div className="h-4 w-20 rounded mx-auto"></div>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {hours.map(( index) => (
                    <tr key={index}>
                        <td className="p-3 text-center font-semibold border border-purple-400 bg-purple-300">
                            <div className="h-4 w-12 rounded mx-auto"></div>
                        </td>
                        {days.map((_, i) => (
                            <td key={i} className="p-3 text-center border border-purple-300">
                                <div className="h-6 w-24 bg-purple-100 rounded mx-auto"></div>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkeletonLoader;
