declare const VALID_LANGUAGE_VALUES: readonly ['en', 'de', 'fa'];

export type ILanguage = typeof VALID_LANGUAGE_VALUES[number];
