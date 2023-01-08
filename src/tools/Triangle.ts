import { Tool } from './ToolClass';

export class Triangle extends Tool {
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

  draw(x: number, y: number, width: number, height: number) {
    const img = new Image();
    const arms = 6;
    let radius;
    let angle: number;
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      for (let i = 0; i < arms + 1; i++) {
        if (i % 2 == 0) {
          radius = Math.sqrt(width ** 2 + height ** 2);
        } else {
          radius = Math.sqrt(width ** 2 + height ** 2) * 0.5;
        }
        angle = (Math.PI * i) / (arms / 2);
        this.ctx?.lineTo(
          x + radius * Math.sin(angle) + 1,
          y + radius * Math.cos(angle) + 1
        );
      }
      this.ctx?.closePath();
      this.ctx?.stroke();
    };
  }
}
