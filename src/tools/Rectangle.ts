import { Tool } from './ToolClass';

export class Rectangle extends Tool {
  mouseDown: boolean;
  startX: number;
  startY: number;
  saved: string;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.mouseDown = false;
    this.listen();
    this.startX = 0;
    this.startY = 0;
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
    this.startX = event.pageX - mouseEvent.offsetLeft;
    this.startY = event.pageY - mouseEvent.offsetTop;
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(event: MouseEvent) {
    const mouseEvent = event.target as HTMLCanvasElement;
    if (this.mouseDown) {
      const curX = event.pageX - mouseEvent.offsetLeft;
      const curY = event.pageY - mouseEvent.offsetTop;
      const width = curX - this.startX;
      const height = curY - this.startY;
      this.draw(this.startX, this.startY, width, height);
    }
  }

  draw(x: number, y: number, w: number, h: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.rect(x, y, w, h);
      this.ctx?.stroke();
    };
  }
}
