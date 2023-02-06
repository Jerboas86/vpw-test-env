# vpw-test-env

Testing vite-plugin-wasm v3.1.0 with different frameworks:

- svelte (CSR)
- sveltekit (SSR)

In different scopes:

- Window scope
- Worker scope
- Worklet scope (audioworklet)
- Nodejs scope (vitest)

And with different web browers:

- Chrome 108
- Firefox 108
- Gnome web (aka Epiphany) 43

## Results

### Vitest

|        | Svelte | Sveltekit |
| ------ | ------ | --------- |
| Vitest | ✅     | ✅        |

### Chrome

|         | Svelte | Sveltekit |
| ------- | ------ | --------- |
| Window  | ✅     | ✅        |
| Worker  | ✅     | ❗        |
| Worklet | ❗     | ❗        |

### Firefox

|         | Svelte | Sveltekit |
| ------- | ------ | --------- |
| Window  | ✅     | ✅        |
| Worker  | ❗     | ❗        |
| Worklet | ❗     | ❗        |

### Gnome web

|         | Svelte | Sveltekit |
| ------- | ------ | --------- |
| Window  | ✅     | ✅        |
| Worker  | ✅     | ✅        |
| Worklet | ❗     | ❗        |
