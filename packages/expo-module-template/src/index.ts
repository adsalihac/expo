import { type EventSubscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to <%- project.name %>.web.ts
// and on native platforms to <%- project.name %>.ts
import <%- project.moduleName %> from './<%- project.moduleName %>';
import <%- project.viewName %> from './<%- project.viewName %>';
import { ChangeEventPayload, <%- project.viewName %>Props } from './<%- project.name %>.types';

// Get the native constant value.
export const PI = <%- project.moduleName %>.PI;

export function hello(): string {
  return <%- project.moduleName %>.hello();
}

export async function setValueAsync(value: string) {
  return await <%- project.moduleName %>.setValueAsync(value);
}

export function addChangeListener(listener: (event: ChangeEventPayload) => void): EventSubscription {
  return <%- project.moduleName %>.addListener<ChangeEventPayload>('onChange', listener);
}

export { <%- project.viewName %>, <%- project.viewName %>Props, ChangeEventPayload };
