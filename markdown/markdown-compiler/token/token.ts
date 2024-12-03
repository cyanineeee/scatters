export class Token{
    typeName: string;
    value: string | null;
    length: number;

    constructor(typeName: string, value: string, length: number) {
        this.typeName = typeName;
        this.value = value;
        this.length = length;
      }

      to_String() {
        return this.value === null ? `<${this.typeName}>` : `<${this.typeName}="${this.value}">`
      }
}