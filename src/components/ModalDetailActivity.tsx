import {Activity} from "../services/ActivityService.ts";

interface Props {
    activity: Activity;
    onClose: () => void;
}
const ModalDetailActivity = ({activity, onClose}: Props) => {
    return (
        <div className="fixed inset-50 bg-transparent bg-opacity-50 flex items-center justify-center">
            <div className="bg-white text-gray-800 p-8 rounded-lg max-w-lg w-full">
                <h2 className="text-xl text-purple-800 font-bold mb-4">جزئیات فعالیت</h2>
                <h6 className='text-purple font-bold'>{activity.title}</h6>
                <br />
                <p className='text-purple'> {activity.body}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-purple-500  text-white py-2 px-4 rounded"
                >
                    بستن
                </button>
            </div>
        </div>
    );
};

export default ModalDetailActivity;