export class Button {
    constructor(public label: string) {}

    onclick(): void {
        console.log(`Presionando: ${this.label}`);
    }
    
    render(): string {
        return `<button id="saveBtn">${this.label}</button>`;
    }
}