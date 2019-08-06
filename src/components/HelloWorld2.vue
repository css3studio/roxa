<template>
    <div id="test_app">

     <h1 class="title">
        Bulma <i class="xi-home"></i>
      </h1>

      <p class="subtitle">
        {{msg}}
      </p>

      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Input" v-model="message">
        </div>
      </div>

      <div class="field">
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div class="buttons">
        <a class="button is-primary">Primary</a>
        <a class="button is-link">Link</a>
      </div>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
