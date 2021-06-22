export class ButtonProperties {
  public title: string;
  public timeoutOnClick: number | null;

  constructor(options: { title: string; timeoutOnClick?: number }) {
    this.title = options.title;
    this.timeoutOnClick = options.timeoutOnClick ?? null;
  }
}
