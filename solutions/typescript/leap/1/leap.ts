export function isLeap(y: number): boolean {
  if (y % 4 == 0 && y % 100 !==0) {
    return true;
  }
  if (y % 400 == 0) {
    return true;
  }
  else{
    return false;
  }
}
