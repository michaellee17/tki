// 合併成新的時間字串，不包含秒數
export function timeFormatter(time) {
    if (time.includes('~')) {
      const [startTime, endTime] = time.split(" ~ ");
      const formattedStartTime = startTime.split(":").slice(0, 2).join(":");
      const formattedEndTime = endTime.split(":").slice(0, 2).join(":");
      const formattedTime = `${formattedStartTime} ~ ${formattedEndTime}`;
      return formattedTime;
    } else {
      const formattedTime = time.split(":").slice(0, 2).join(":");
      return formattedTime;
    }
}
