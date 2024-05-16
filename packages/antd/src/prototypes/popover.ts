import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Popover: ComponentPrototypeType = {
  name: 'Popover',
  title: '气泡卡片',
  package: '@music163/antd',
  icon: 'icon-qipao',
  help: '点击/鼠标移入元素，弹出气泡式的卡片浮层',
  type: 'element',
  relatedImports: ['Button', 'Placeholder'],
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'children',
      title: '内容',
      setter: 'expressionSetter',
      initValue: '{{<Button children="hover button"/>}}',
    },
    {
      name: 'content',
      title: '卡片内容',
      tip: '卡片内容',
      setter: 'expressionSetter',
      initValue: '{{<Placeholder text="放置替换" />}}',
    },
    {
      name: 'title',
      title: '卡片标题',
      tip: '卡片标题',
      setter: 'expressionSetter',
      initValue: '标题',
    },
    {
      name: 'arrowPointAtCenter',
      title: '箭头指向目标元素中心',
      setter: 'boolSetter',
    },
    {
      name: 'arrowPointAtCenter',
      title: '箭头指向目标元素中心',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'autoAdjustOverflow',
      title: '自动调整位置',
      tip: '气泡被遮挡时自动调整位置',
      setter: 'boolSetter',
      group: 'advanced',
    },
    { name: 'color', title: '背景颜色', setter: 'colorSetter' },
    {
      name: 'defaultVisible',
      title: '默认是否显隐',
      setter: 'boolSetter',
    },
    {
      name: 'destroyTooltipOnHide',
      title: '关闭后是否销毁 Tooltip',
      tip: '当 keepParent 为 false 时销毁父容器',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'getPopupContainer',
      title: '浮层渲染父节点',
      tip: '默认渲染到 body 上',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'mouseEnterDelay',
      title: '延时显示',
      tip: '鼠标移入后延时多少才显示 Tooltip，单位：秒',
      setter: 'numberSetter',
      group: 'advanced',
    },
    {
      name: 'mouseLeaveDelay',
      title: '延时隐藏',
      tip: '鼠标移出后延时多少才隐藏 Tooltip，单位：秒',
      setter: 'numberSetter',
      group: 'advanced',
    },
    { name: 'overlayClassName', title: '卡片类名', setter: 'textSetter', group: 'advanced' },
    {
      name: 'overlayStyle',
      group: 'style',
      title: '卡片样式',
      setter: 'expressionSetter',
    },
    {
      name: 'overlayInnerStyle',
      group: 'style',
      title: '卡片内容区域样式',
      setter: 'expressionSetter',
    },
    {
      name: 'placement',
      title: '气泡框位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'top', value: 'top' },
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
          { label: 'bottom', value: 'bottom' },
          { label: 'topLeft', value: 'topLeft' },
          { label: 'topRight', value: 'topRight' },
          { label: 'bottomLeft', value: 'bottomLeft' },
          { label: 'bottomRight', value: 'bottomRight' },
          { label: 'leftTop', value: 'leftTop' },
          { label: 'leftBottom', value: 'leftBottom' },
          { label: 'rightTop', value: 'rightTop' },
          { label: 'rightBottom', value: 'rightBottom' },
        ],
      },
    },
    {
      name: 'trigger',
      title: '触发行为',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'hover', value: 'hover' },
          { label: 'focus', value: 'focus' },
          { label: 'click', value: 'click' },
          { label: 'contextMenu', value: 'contextMenu' },
        ],
      },
    },
    {
      name: 'visible',
      title: '浮层显隐',
      setter: 'boolSetter',
    },
    {
      name: 'zIndex',
      title: 'z-index',
      setter: 'numberSetter',
      group: 'advanced',
    },
    {
      name: 'onVisibleChange',
      title: '显示隐藏的回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};
