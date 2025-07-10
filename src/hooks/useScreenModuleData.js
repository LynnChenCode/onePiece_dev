
import { inject, watch } from "vue";
// import { isFunction } from "lodash";

export default function (handleApiData) {
  const apiData = inject("getApiData", null);
  const apiLoading = inject("getApiLoading", false);
  const contrastRatio = inject("getContrastRatio", 1);

  watch(
    () => apiData.value,
    (val) => {
      // && isFunction(handleApiData)
      if (handleApiData ) {
        handleApiData(val);
      }
    },
    {
      immediate: true,
    }
  );

  return {
    apiData,
    apiLoading,
    contrastRatio,
  };
}
