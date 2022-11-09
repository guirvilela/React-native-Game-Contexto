import theme from '../styles/theme';

export const getColorDistantece = (distance: number) => {
  if (distance < 500) {
    return theme.colors.green;
  }
  if (distance < 1500) {
    return theme.colors.yellow;
  }
  return theme.colors.red;
};

export const getBarWidth = (distance: number) => {
  const total = 40000;
  const lambda = 0.5;
  const pdf = (x: any) => lambda * Math.exp(-lambda * x);
  const startX = 0;
  const endX = 100;
  const startY = pdf(startX);
  const endY = pdf(endX);
  const x = (distance / total) * (endX - startX);
  const result = ((pdf(x) - endY) / (startY - endY)) * 100;
  return `${result}%`;
};
