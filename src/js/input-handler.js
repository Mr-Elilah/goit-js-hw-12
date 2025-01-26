export function inputHandler(event) {
  const input = event.currentTarget;

  if (input.value.trim() !== '') {
    input.classList.remove('empty');
    input.classList.add('filled');
  } else {
    input.classList.remove('filled');
    input.classList.add('empty');
  }
}
