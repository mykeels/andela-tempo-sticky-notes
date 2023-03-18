import invariant from 'tiny-invariant';

export function assert<TOptional>(condition: TOptional, message?: string | (() => string)): NonNullable<TOptional> {
    invariant(condition, typeof message === "string" ? `AssertError: ${message}` : message || `AssertError: condition must be truthy`);
    return condition as NonNullable<TOptional>;
}