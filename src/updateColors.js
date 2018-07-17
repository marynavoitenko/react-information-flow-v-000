import { getRandomColor, getReducedColor } from './randomColorGenerator.js'

export function updateColors() {
    const newColor = getRandomColor();
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    });
  }

export function updateChildColors(event) {
    event.stopPropagation();
    this.setState({
        childColor: getRandomColor()
    });
}