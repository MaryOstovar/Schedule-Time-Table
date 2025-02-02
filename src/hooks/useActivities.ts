import { useQuery } from "@tanstack/react-query";
import activityService, { Activity } from "../services/ActivityService.ts";
import { CACHE_KEY_Activity } from "../constants.ts";
import dayjs from 'dayjs';
import jalaliPlugin from '@zoomit/dayjs-jalali-plugin';


dayjs.extend(jalaliPlugin);

const UseActivities = () => {
    return useQuery<Activity[], Error>({
        queryKey: CACHE_KEY_Activity,
        queryFn: activityService.getAll,
        staleTime: 10 * 1000,

        select: (data) =>
            data.map((item, index) => {

                const jalaliDate = dayjs().add(6 +(index % 7), "day").calendar('jalali');

                return {
                    ...item,
                    date: jalaliDate.format("DD-MM"),
                    time: `${8 + (index % 10)}:00`,
                };
            }),
    });
};

export default UseActivities;
