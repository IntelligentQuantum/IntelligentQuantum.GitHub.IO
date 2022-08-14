declare const VALID_THEME_VALUES: readonly ['dark', 'dim', 'light'];

export type ITheme = typeof VALID_THEME_VALUES[number];
