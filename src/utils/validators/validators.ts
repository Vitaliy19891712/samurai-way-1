export const required = (value: string) => (value ? undefined : "Required");

const maxLength = (max: number) => (value: string) => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength30 = maxLength(30);
export const maxLength100 = maxLength(100);
export const maxLength15 = maxLength(15);