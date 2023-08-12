export default function () {
  const currentIconCode = ref<number>(0); // 目前天氣代號
  let currentIconSvg = ref<string>("refresh"); // 目前天氣Svg name
  const currentTime = ref<number>(0); // 現在時間
  // 天氣代號總表
  const listType: Object = {
    isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
    isClear: [1],
    isCloudyFog: [25, 26, 27, 28],
    isCloudy: [2, 3, 4, 5, 6, 7],
    isFog: [24],
    isPartiallyClearWithRain: [
      8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39,
    ],
    isSnowing: [23, 37, 42],
  };
  // 天氣代號對應 svg名稱總表
  const weatherIcons = {
    day: {
      isThunderstorm: "day-thunderstorm",
      isClear: "day-clear",
      isCloudyFog: "day-cloudy-fog",
      isCloudy: "day-cloudy",
      isFog: "day-fog",
      isPartiallyClearWithRain: "day-partially-clear-with-rain",
      isSnowing: "day-snowing",
    },
    night: {
      isThunderstorm: "night-thunderstorm",
      isClear: "night-clear",
      isCloudyFog: "night-cloudy-fog",
      isCloudy: "night-cloudy",
      isFog: "night-fog",
      isPartiallyClearWithRain: "night-partially-clear-with-rain",
      isSnowing: "night-snowing",
    },
  };
  // 模擬天氣代號(1~42, 無 40)
  const getRandomInterger = (min: number, max: number, exclude: number) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber === exclude) {
      randomNumber = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber;
  };

  // 轉換對應 Svg name
  const handleToConvertSvgName = (val: number): string => {
    let listArr = Object.entries(listType);
    let target: string = "";
    listArr.map((el: any[]) => {
      let targetArr = el[1];
      if (targetArr.some((items: number) => items === val)) {
        target = el[0];
      }
    });
    return target;
  };
  // 重置天氣 Svg name
  const handleReset = (emits: any) => {
    currentIconSvg.value = "refresh";
    emits("handeChangeTag", "refresh");
  };
  // 更改 icon(不同天氣)
  const handleIconChange = (emits: any) => {
    handleReset(emits);
    currentIconCode.value = getRandomInterger(1, 42, 40);
    emits("handleCurrentIconCode", currentIconCode.value);
    const currentWeatherIcon = handleToConvertSvgName(currentIconCode.value);
    currentTime.value = new Date().getHours();
    const currentWeatherIcons = weatherIcons[
      currentTime.value >= 6 && currentTime.value < 18 ? "day" : "night"
    ] as {
      [key: string]: string;
    };
    currentIconSvg.value = currentWeatherIcons[currentWeatherIcon];
    emits("handeChangeTag", currentIconSvg.value);
  };

  // 判斷白天或夜晚
  const handleTime = (currentTime: number): string => {
    return currentTime >= 6 && currentTime < 18 ? "day" : "night";
  };
  return {
    currentIconCode,
    currentIconSvg,
    listType,
    weatherIcons,
    getRandomInterger,
    handleToConvertSvgName,
    handleReset,
    handleIconChange,
    handleTime,
  };
}
