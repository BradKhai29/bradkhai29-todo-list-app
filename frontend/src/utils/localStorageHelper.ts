function setItem<TObject>(key: string, value: TObject): void {
    localStorage.setItem(key, JSON.stringify(value));
}

function getItem<TObject>(key: string): TObject | null {
    const value = localStorage.getItem(key);
    if (value === null) {
        return null;
    }

    const parser = (inputJsonValue: string): TObject => {
        try {
            return JSON.parse(inputJsonValue) as TObject;
        } catch {
            return null as TObject;
        }
    };

    return parser(value);
}

function removeItem(key: string): void {
    localStorage.removeItem(key);
}

export const localStorageHelper = {
    setItem,
    getItem,
    removeItem
};
