function isNullOrEmpty(str: string | null | undefined): boolean {
	return !str || str.length === 0;
}

/**
 * A collection of string helper functions.
 */
export const stringHelper = {
	isNullOrEmpty
};
