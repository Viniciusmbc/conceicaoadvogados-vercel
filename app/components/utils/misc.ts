export const getDomainUrl = (request: Request) => {
  const host =request.headers.get('host');
  if (!host) {
    throw new Error();
  }
  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
};

export function typedBoolean<T>(
  value: T,
): value is Exclude<T, '' | 0 | false | null | undefined> {
  return Boolean(value)
}

export function removeTrailingSlash(s: string) {
  return s.endsWith('/') ? s.slice(0, -1) : s
}