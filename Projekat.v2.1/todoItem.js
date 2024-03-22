export class TodoItem {
    constructor(text) {
      this.text = text;
      this.checked = false;
      this.id = Date.now();
    }
  
    toggleDone() {
      this.checked = !this.checked;
    }
  }
  