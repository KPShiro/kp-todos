export function createActionName(featureKey: string, name: string): string {
    return `[${featureKey}] ${name}`;
}
