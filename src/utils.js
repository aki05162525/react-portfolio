// export const getImageUrl = (path) => {
//   return new URL(`/assets/${path}`, import.meta.url).href;
// };
//なんで上のではうまくいかなかったのか？？？

export const getImageUrl = (path) => {
  return `${import.meta.env.BASE_URL}assets/${path}`; // Viteの base を使用
};
