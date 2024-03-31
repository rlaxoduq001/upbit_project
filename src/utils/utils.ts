// 숫자를 백만 포맷팅하고, 콤마를 포함시키는 함수
export const formatToMillion = (value: number): string => {
  const million = value / 1000000;
  return (
    new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 0 }).format(
      million,
    ) + '백만'
  );
};

// 숫자에 콤마를 삽입하여 포매팅하는 함수
export const formatNumberWithCommas = (value: number): string => {
  return new Intl.NumberFormat('ko-KR').format(value);
};
