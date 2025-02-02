import {Activity} from "../services/ActivityService.ts";

interface Props {
    activity: Activity;
    onClose: () => void;
}
const ModalDetailActivity = ({activity, onClose}: Props) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center m-4 bg-opacity-50">
            <div className="bg-white text-gray-800 py-4 px-6 md:p-8 rounded-lg max-w-lg w-full shadow-lg">
                <h2 className="text-sm md:text-xl text-purple-800 font-bold mb-2 md:mb-4">جزئیات فعالیت</h2>
                <h6 className="text-purple font-bold text-sm md:text-lg">{activity.title}</h6>
                <br />
                <p className="text-purple text-sm md:text-lg">{activity.body}</p>
                <button
                    onClick={onClose}
                    className="mt-2 md:mt-4 bg-purple-500 text-white py-1 px-2 md:py-2 md:px-4 rounded"
                >
                    بستن
                </button>
            </div>
        </div>
    );
};


export default ModalDetailActivity;