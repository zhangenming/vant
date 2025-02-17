# Notify

### Intro

The display message prompt is at the top of the page, and supports two methods: component call and function call.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Notify } from 'vant';

const app = createApp();
app.use(Notify);
```

### Function Call

Vant provides some utility functions that can quickly evoke global `Notify` components.

For example, calling the `showNotify` function will render a Dialog directly in the page.

```js
import { showNotify } from 'vant';

showNotify('Notify Message');
```

## Usage

### Basic Usage

```js
import { showNotify, closeNotify } from 'vant';

// auto close after 3s
showNotify('Message');

// manually close
closeNotify();
```

### Notify Type

```js
import { showNotify } from 'vant';

showNotify({ type: 'primary', message: 'Notify Message' });
showNotify({ type: 'success', message: 'Notify Message' });
showNotify({ type: 'danger', message: 'Notify Message' });
showNotify({ type: 'warning', message: 'Notify Message' });
```

### Custom Notify

```js
import { showNotify } from 'vant';

showNotify({
  message: 'Custom Color',
  color: '#ad0000',
  background: '#ffe1e1',
});

showNotify({
  message: 'Custom Position',
  position: 'bottom',
});

showNotify({
  message: 'Custom Duration',
  duration: 1000,
});
```

### Use Notify Component

```html
<van-button type="primary" text="Use Notify Component" @click="showNotify" />
<van-notify v-model:show="show" type="success">
  <van-icon name="bell" style="margin-right: 4px;" />
  <span>Content</span>
</van-notify>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);

    const showNotify = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2000);
    };

    return {
      show,
      showNotify,
    };
  },
};
```

## API

### Methods

Vant exports following Notify utility functions:

| Methods | Description | Attribute | Return value |
| --- | --- | --- | --- |
| showNotify | Show notify | `NotifyOptions \| string` | notify instance |
| closeNotify | Close notify | - | `void` |
| setNotifyDefaultOptions | Set default options of all notifies | `NotifyOptions` | `void` |
| resetNotifyDefaultOptions | Reset default options of all notifies | - | `void` |

### NotifyOptions

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `success` `warning` | _NotifyType_ | `danger` |
| message | Message | _string_ | - |
| duration | Duration(ms), won't disappear if value is 0 | _number \| string_ | `3000` |
| position `v3.4.0` | Position, can be set to `bottom` | _NotifyPosition_ | `top` |
| color | Message color | _string_ | `white` |
| background | Background color | _string_ | - |
| className | Custom className | _string \| Array \| object_ | - |
| lockScroll `v3.0.7` | Whether to lock background scroll | _boolean_ | `false` |
| onClick | Callback function after click | _(event: MouseEvent) => void_ | - |
| onOpened | Callback function after opened | _() => void_ | - |
| onClose | Callback function after close | _() => void_ | - |

### Types

The component exports the following type definitions:

```ts
import type {
  NotifyType,
  NotifyProps,
  NotifyOptions,
  NotifyPosition,
} from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-notify-text-color | _var(--van-white)_ | - |
| --van-notify-padding | _var(--van-padding-xs) var(--van-padding-md)_ | - |
| --van-notify-font-size | _var(--van-font-size-md)_ | - |
| --van-notify-line-height | _var(--van-line-height-md)_ | - |
| --van-notify-primary-background | _var(--van-primary-color)_ | - |
| --van-notify-success-background | _var(--van-success-color)_ | - |
| --van-notify-danger-background | _var(--van-danger-color)_ | - |
| --van-notify-warning-background | _var(--van-warning-color)_ | - |
