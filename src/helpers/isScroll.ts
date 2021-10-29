export const isScroll = (isActive: boolean) => {
    document.body.style.overflow = "visible";
    if (isActive) {
        document.body.style.overflow = "hidden";
    }

}