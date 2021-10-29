export default class ButtonSettings {
    constructor(width, height, color, backgroundColor, border) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.border = border;
    }
    getAllCustomStyle = () => Object.entries(this).filter(item => typeof item[1] !== 'function' && item[1] != null).reduce((acc, elem) => { acc[elem[0]] = elem[1]; return acc }, {})


}