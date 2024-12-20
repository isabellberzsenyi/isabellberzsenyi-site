export const breakpointsObj = {
  mobile: 320,
  mobileLg: 425,
  tabletSm: 500,
  tablet: 768,
  tabletLg: 1024,
  desktop: 1224,
  desktopLg: 1440,
  desktopXl: 1600,
};

const breakpoints = [
  ['mobile', 320],
  ['mobileLg', 425],
  ['tabletSm', 500],
  ['tablet', 768],
  ['tabletLg', 1024],
  ['desktop', 1224],
  ['desktopLg', 1440],
  ['desktopXl', 1600],
];

/**
 * min-width queries for every breakpoint.
 *
 * e.g. mobile: '(min-width: 320px)'
 */
export const min: Record<string, string> = breakpoints.reduce(
  (acc, [name, size]) => ({
    ...acc,
    [name]: `(min-width: ${size}px)`,
  }),
  {},
);

/**
 * max-width queries for every breakpoint.
 *
 * e.g. tablet: '(max-width: 768px)'
 */
export const max: Record<string, string> = breakpoints.reduce(
  (acc, [name, size]) => ({
    ...acc,
    [name]: `(max-width: ${size}px)`,
  }),
  {},
);

/**
 * min-width and max-width queries for each device.
 *
 * e.g. mobile: '(min-width: 320px) and (max-width: 768px)'
 */
export const devices: Record<string, string> = breakpoints.reduce((acc, [name, size], i) => {
  const [nextName, nextSize] = breakpoints[i + 1] || [];

  const minQuery = min[name];
  const maxQuery = nextName ? `and ${max[nextName]}` : '';

  return { ...acc, [name]: `${minQuery} ${maxQuery}` };
}, {});