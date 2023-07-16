export const formatDate = (dateString: string) => {
    const date = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "numeric", day: "numeric" });
    return date.format(new Date(dateString))
};