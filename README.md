# vpw-test-env

Testing vite-plugin-wasm with different frameworks:

- svelte
- sveltekit

And in different scopes:

- Window scope
- Worker scope
- Worklet scope (audioworklet)
- Nodejs scope (vitest)

## Results

|         | Svelte | Sveltekit |
| ------- | ------ | --------- |
| Window  | ✅     | ❗        |
| Worker  | ✅     | ❗        |
| Worklet | ❗     | ❗        |
| Vitest  | ❗     | ❗        |
