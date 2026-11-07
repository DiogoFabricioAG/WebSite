let resetTimer: number | undefined;

export async function copyLlmPrompt(result: Promise<boolean>) {
  const label = document.querySelector<HTMLElement>('[data-copy-label]');
  const prompt = document.querySelector<HTMLTextAreaElement>('[data-copy-prompt]');
  const fallback = document.querySelector<HTMLElement>('[data-copy-fallback]');
  const status = document.querySelector<HTMLElement>('[data-copy-status]');
  if (!label || !prompt || !fallback || !status) return;
  window.clearTimeout(resetTimer);
  try {
    if (!await result) throw new Error('Clipboard unavailable');
    fallback.hidden = true;
    label.textContent = 'Copied!';
    status.textContent = 'Prompt copied to clipboard.';
    resetTimer = window.setTimeout(() => { label.textContent = 'Copy to LLM'; }, 2500);
  } catch {
    label.textContent = 'Copy to LLM';
    fallback.hidden = false;
    status.textContent = 'Automatic copying failed. Select and copy the prompt below.';
    prompt.focus();
    prompt.select();
  }
}
