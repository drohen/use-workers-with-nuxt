self.addEventListener('message', (event: MessageEvent<string>) => {
  self.postMessage(`Worker received ${event.data}`)
})
