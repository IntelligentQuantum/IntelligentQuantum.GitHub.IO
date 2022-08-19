declare const VALID_PAGE_VALUES: readonly ['home', 'contact', 'hobbies', 'portfolio', 'blogs'];

export type IPage = typeof VALID_PAGE_VALUES[number];
