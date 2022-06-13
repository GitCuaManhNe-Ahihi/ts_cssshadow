export function ConvertColor(color: string, opacity: number): string {
  return `rgba(${
    parseInt(color.slice(-6, -4), 16) +
    "," +
    parseInt(color.slice(-4, -2), 16) +
    "," +
    parseInt(color.slice(-2), 16)
  },${opacity / 100})`;
}

