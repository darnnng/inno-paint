import { Tool } from './ToolClass';

export class Line extends Tool {
  mouseDown: boolean;
  curX: number;
  curY: number;
  saved: string;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.mouseDown = false;
    this.listen();
    this.curX = 0;
    this.curY = 0;
    this.saved = '';
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
    this.curX = event.pageX - mouseEvent.offsetLeft;
    this.curY = event.pageY - mouseEvent.offsetTop;
    this.ctx?.moveTo(this.curX, this.curY);
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(event: MouseEvent) {
    const mouseEvent = event.target as HTMLCanvasElement;
    if (this.mouseDown) {
      const x = event.pageX - mouseEvent.offsetLeft;
      const y = event.pageY - mouseEvent.offsetTop;
      this.draw(x, y);
    }
  }

  draw(x: number, y: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.moveTo(this.curX, this.curY);
      this.ctx?.lineTo(x, y);
      this.ctx?.stroke();
    };
  }
}
