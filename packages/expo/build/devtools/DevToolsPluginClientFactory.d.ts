import type { DevToolsPluginClient } from './DevToolsPluginClient';
import type { ConnectionInfo, DevToolsPluginClientOptions } from './devtools.types';
/**
 * Factory of DevToolsPluginClient based on sender types.
 * @hidden
 */
export declare function createDevToolsPluginClient(connectionInfo: ConnectionInfo, options?: DevToolsPluginClientOptions): Promise<DevToolsPluginClient>;
/**
 * Public API to get the DevToolsPluginClient instance.
 */
export declare function getDevToolsPluginClientAsync(pluginName: string, options?: DevToolsPluginClientOptions): Promise<DevToolsPluginClient>;
/**
 * Internal testing API to cleanup all DevToolsPluginClient instances.
 */
export declare function cleanupDevToolsPluginInstances(): void;
//# sourceMappingURL=DevToolsPluginClientFactory.d.ts.map