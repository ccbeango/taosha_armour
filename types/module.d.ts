declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const Component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    any
  >
  export default Component
}
