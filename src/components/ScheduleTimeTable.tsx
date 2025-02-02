import {useState} from 'react';
import useActivities from "../hooks/useActivities.ts";
import dayjs from "dayjs";
import mapNumberToDay from "../helpers/mapNumberToDay.ts";
import SkeletonLoader from "./SkeletonLoader.tsx";
import ModalDetailActivity from "./ModalDetailActivity.tsx";
import {Activity} from "../services/ActivityService.ts";

const ScheduleTimeTable = () => {
    const {data: activities, isLoading} = useActivities();
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

    const days = Array.from({length: 7}, (_, i) =>
        dayjs().add(6 + i, "day").calendar('jalali').format("DD-MM")
    );
    const hours = Array.from({length: 10}, (_, i) => `${8 + i}:00`);
    const sortedHours = sortOrder === "asc" ? hours : [...hours].reverse();

    const toggleSortOrder = () => {
        setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
    };

    const closeModal = () => {
        setSelectedActivity(null); // Close the modal
    };

    const showModal = (activity: Activity) => {
        setSelectedActivity(activity); // Show full activity details
    };

    if (isLoading) return <SkeletonLoader/>;

    return (
        <div className={`container mx-auto p-4 `}>

            <div className="flex justify-start mb-4">
                <button
                    onClick={toggleSortOrder}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 text-sm md:text-lg md:py-2 md:px-4 rounded"
                >
                    {sortOrder === "asc" ? "مرتب‌سازی نزولی" : "مرتب‌سازی صعودی"}
                </button>
            </div>

            <table
                className={`w-full table-fixed border border-purple-300 rounded-lg overflow-hidden shadow-md ${selectedActivity ? 'bg-gary-100 opacity-60' : ''} `}>
                <thead className="bg-purple-500 text-white">
                <tr>
                    <th className="md:p-3 p-1 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </th>
                    {days.map((day, index) => (
                        <th key={index} className="md:p-3 p-1 text-xs md:text-lg text-center border-r border-purple-600">
                            {mapNumberToDay(index)} {day}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {sortedHours.map((hour, index) => (
                    <tr key={index}>
                        <td className="md:p-3 p-1 text-xs md:text-lg  text-center font-semibold border border-purple-600 bg-purple-500 text-white">
                            {hour}
                        </td>
                        {days.map((day) => {
                            const activity = activities?.find(
                                (activity) => activity.date === day && activity.time === hour
                            );

                            return (
                                <td key={`${day}-${hour}`}
                                    className="md:p-3 p-1  text-center border border-gray-300 hover:bg-purple-100">
                                    {activity ? (
                                        <div
                                            className="max-w-sm bg-white border border-purple-200 rounded-lg shadow-sm">
                                            <a href="#" onClick={() => showModal(activity)}>
                                                <p className="mb-2 p-1 md:p-4 text-[6px] md:text-sm md:text-left font-bold text-gray-900 truncated-text">
                                                    {activity.title.length > 20 ? `${activity.title.slice(0, 20)}...` : activity.title}
                                                </p>
                                            </a>
                                        </div>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </table>


            {selectedActivity && (
                <ModalDetailActivity activity={selectedActivity} onClose={closeModal}/>
            )}

        </div>
    );
};

export default ScheduleTimeTable;
