declare const VALID_THEME_VALUES: readonly ['matrix', 'dim', 'light'];

export type ITheme = typeof VALID_THEME_VALUES[number];
