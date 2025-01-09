// export const getImageUrl = (path) => {
//   return new URL(`/assets/${path}`, import.meta.url).href;
// };
//なんで上のではうまくいかなかったのか？？？

export const getImageUrl = (path) => {
  return `/assets/${path}`; // public フォルダ基準のパスを返す
};
