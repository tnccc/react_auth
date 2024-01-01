/**
 * 西暦を計算して配列として返す関数
 * @param startYear 値はnumber型 例: 1980
 * @param currentYear 現在の年号を取得
 */

export const generateYears = (startYear: number) => {
  const currentYear: number = new Date().getFullYear();
  // 戻り値用に格納する空配列
  const years = [];
  for(let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years.map((e, index) => {
    return {
      id: index,
      name: e,
    }
  })
}