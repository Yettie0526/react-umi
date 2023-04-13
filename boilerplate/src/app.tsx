export function render(oldRender: any) {
  setTimeout(() => {
    oldRender();
  }, 3000);
}