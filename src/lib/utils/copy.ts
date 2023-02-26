function setClipboard(text: string) {
  const type = 'text/plain';
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    function () {
      /* success */
      console.log('copied to clipboard');
    },
    function () {
      /* failure */
    }
  );
}

export function clickToCopy(this: HTMLElement) {
  const address = this.innerText;
  if (address) {
    setClipboard(address);
  }
}
