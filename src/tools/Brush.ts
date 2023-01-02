import { Tool } from './ToolClass';

export default class Brush extends Tool {
  mouseDown: boolean;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.mouseDown = false;
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseDownHandler(event: MouseEvent) {
    const mouseEvent = event.target as HTMLCanvasElement;
    this.mouseDown = true;
    this.ctx?.beginPath();
    this.ctx?.moveTo(
      event.pageX - mouseEvent.offsetLeft,
      event.pageY - mouseEvent.offsetTop
    );
  }

  mouseMoveHandler(event: MouseEvent) {
    const mouseEvent = event.target as HTMLCanvasElement;
    if (this.mouseDown) {
      this.draw(
        event.pageX - mouseEvent.offsetLeft,
        event.pageY - mouseEvent.offsetTop
      );
    }
  }

  draw(x: number, y: number) {
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
  }
}
