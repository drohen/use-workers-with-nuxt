<template>
  <div>
    <div>
      <input v-model="message" type="text" placeholder="type something...">
    </div>
    <p>Messages from worker:</p>
    <pre>
	    {{ responses.map(response => `${response}\n`).join(``) }}
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SimpleWorker from '~/assets/simple.worker.ts'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    const worker = new SimpleWorker()
    return {
      message: '',
      responses: [''],
      worker
    }
  },
  watch: {
    message () {
      this.worker.postMessage(this.message)
    }
  },
  created () {
    this.worker.addEventListener('message', (event: MessageEvent<string>) => {
      this.responses.push(event.data)
    })
  }
})
</script>
